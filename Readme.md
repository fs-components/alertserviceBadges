
# alertserviceBadges

  receives alertservice summary from alertserviceCaller component and creates a badge.

## Installation

    $ component install fs-components/alertserviceBadges


## Example
Some cookies need to be set:
```js
var cookie = require('component-cookie/index.js');

//these two vars need to be set.
var userId = 'cis.user.MMMM-9999';
var fssessionid = 'USYSA3CC32A84E689C210752532B9EBD49B8_idses-prod04.a.fsglobal.net';

cookie('fs-hf-user','%7B%22displayName%22%3A%22Person%20Name%22%2C%22id%22%3A%22'+userId+'%22%7D');
cookie('fssessionid',fssessionid);
```
```js

var templeLink = document.querySelector('.nav-item.temple'); 
var alertTypes = ['namesReady','namesReady-permissionRequired'];
var type = 'bool';
    
loadNotificationBadges(templeLink, alertTypes, type);

```

## API

### loadNotificationBadges(element, alertTypes, type);

  Params:
  - element (object): DOM element to append badge to. Needs to be a DOM object. 
  - alertTypes (Array): array of alertType names you want to look for in alertservice summary
  - type (String): (Optional) 'bool' if you just want a star or 'number' if you want the actual count retruned.

   

## License

  MIT