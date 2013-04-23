
# alertserviceBadges

  receives alertservice summary from alertserviceCaller component and creates a badge.

## Installation

    $ component install tylergraf/alertserviceBadges


## Example

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