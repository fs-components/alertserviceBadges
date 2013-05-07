/*
 * Module Description
 * Language Picker for FamilySearch.org. Like version in frontier, without jQuery deps.
 *
 *
 */ 

/**
 * Module Deps
 *
 */
var cookie = require("cookie"); 
var events = require("event"); 
var domify = require("domify"); 
var template = require('./template');
var timesTried = 0;

module.exports = function notificationBadges(el, alertTypes, type){
  var authToken,
      user;

  function getCookies() {
    //get session cookie
    authToken = cookie('fssessionid');
    //get user cookie
    user = cookie('fs-hf-user');
  }

  getCookies();

  //if no user or if user is not logged in return
  if(!authToken || !user){

    // if we've recursed more than once, quit
    if(timesTried > 1){return}

    //setting timeout because the fs-hf-user cookie sometimes isn't set yet.
    var t = setTimeout(function() {
      // recursively call notificationBadges after 1/2 second.
      notificationBadges(el,alertTypes,type);
      timesTried++;
    },500);
    return;
  } 
  
  //parse user cookie
  var userId = JSON.parse(user).id;
  
  require('alertserviceCaller')(userId, authToken, function(err, notificationSummary){
    if(err){return;}

    var alertCount = 0;
    //only augment alertCount for alerts within alertTypes
    for (var i = 0; i < notificationSummary.alertSummaries.length; i++) { 
      if(alertTypes.indexOf(notificationSummary.alertSummaries[i].alertType) !== -1){
        alertCount += notificationSummary.alertSummaries[i].count;
      }
    }; 

    //only show badge if alertCount is greater than 0
    if(alertCount > 0){ 
      var badge = domify(template)[0];

      // set alertCount from * to actual count if type is number
      if(type === 'number'){ 
        badge.innerHTML = alertCount;
      }
      //append badge to specified element.
      el.appendChild(badge); 
    }
  });

}