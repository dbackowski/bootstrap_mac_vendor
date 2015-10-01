(function($) {
  var methods = {
    initialize: function(options) {
      options = options || {};
      options.title = options.title || 'Producent';
      options.noData = options.noData || '- brak danych -';

      var element = this;

      this.organizations = {{organizations}};
      this.vendors = {{vendors}};

      var mac_vendor_info = function(mac) {
        mac = mac.replace(/:/g,'').replace(/\-/g,'').replace(/\./g,'').slice(0,6).toUpperCase();
        return this.organizations[this.vendors[mac]];
      }.bind(this);

      $(element).on('mouseover', function(event) {
        var mac;

        if (typeof options.mac === "function") {
          mac = options.mac(event.target);
        } else {
          mac = $(this).html();
        }

        var vendor_info = mac_vendor_info(mac) || options.noData;

        $(event.target).popover({
          'content' : vendor_info,
          'title' : '<b>' + options.title + '</b>',
          'html' : true,
          'placement' : 'right',
          'container' : 'body',
          'trigger' : 'manual'
        });

        $(event.target).popover('show');
      });

      $(element).on('mouseout', function(event) {
        $(event.target).popover('destroy');
      });
    },

    destroy: function() {
      this.off();
      $(this).popover('destroy');
    }
  };

  jQuery.fn.bootstrapMacVendor = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, [].slice.call(arguments, 1));
    } else {
      return methods.initialize.apply(this, arguments);
    }
  };
})(window.jQuery);