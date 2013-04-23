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

module.exports = function notificationBadges(el, alertTypes, type){
  var authToken = cookie('fssessionid');
  var userId = cookie('fs-hf-user');
  if(!authToken || !userId){return;} //if no user or if user is not logged in return

  require('notificationCall')(userId, authToken, function(err, notificationSummary){
    if(err){return;}

    var alertCount = 0;
      for (var i = 0; i < notificationSummary.alertSummaries.length; i++) { //only augment alertCount for alerts within alertTypes
        if(alertTypes.indexOf(notificationSummary.alertSummaries[i].alertType) !== -1){
          alertCount += notificationSummary.alertSummaries[i].count;
        }
      }; 

      if(alertCount > 0){ //only show badge if alertCount is greater than 0
        var badge = domify(template)[0];
        if(type === 'number'){ // set alertCount from * to actual count if type is number
          badge.innerHTML = alertCount;
        }
        el.appendChild(badge); //append badge to specified element.
      }
  });

}