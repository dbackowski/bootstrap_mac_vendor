# bootstrapMacVendor [![Build Status](https://travis-ci.org/dbackowski/bootstrap_mac_vendor.svg?branch=master)](https://travis-ci.org/dbackowski/bootstrap_mac_vendor)

jQuery (requires bootstrap) plugin to show vendor of mac address.

## Example Usage

```html
<span class="mac_vendor">00:0A:CD:00:CC:F8</span>
```

```javascript
$('.mac_vendor').bootstrapMacVendor();
```

Move mouse over mac address and popover with vendor data will appear:

![screenshot](https://i.imgur.com/LY79VyR.png)

```html
<span>
  00:15:60:B1:AB:CB
  <i class="icon-info-sign mac_vendor" data-mac="00:15:60:B1:AB:CB"></i>
</span>
```

```javascript
$('.mac_vendor').bootstrapMacVendor({ mac: function(event) { 
                                             return $(event).data('mac'); 
                                           } 
});
```

![screenshot](https://i.imgur.com/K0tIt58.png)

## Options

* title - popover title (default: 'Producent')
* noData - no data found message (default: '- brak danych -')
* mac - mac source function (default: $(this).html();)