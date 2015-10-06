var fs = require('fs');
var httpreq = require('httpreq');
var path = require('path');

var vendors = {};
var organizations = [];

httpreq.get('http://standards-oui.ieee.org/oui.txt', function (err, res) {
  if (err) console.log(err);

  if (res.statusCode == 200) {
    var search_line = /([0-9A-F]+)\s+\(base 16\)\s+(.+)/g;

    res.body.split(/\n/).forEach(function(line) {
      var match = search_line.exec(line);

      if (match != null) {
        if (organizations.indexOf(match[2]) >= 0) {
          organizationId = organizations.indexOf(match[2]);
        } else {
          organizations.push(match[2]);
          organizationId = organizations.length - 1;
        }

        vendors[match[1]] = organizationId;
      }
    });

    fs.readFile(path.join(__dirname, 'bootstrap_mac_vendor.js.tpl'), 'utf8', function (err, data) {
      if (err) console.log(err);

      var result = data.replace(/\{\{organizations\}\}/g, JSON.stringify(organizations, null, '\t')).replace(/\{\{vendors\}\}/g, JSON.stringify(vendors, null, '\t'));

      fs.writeFile(path.join(__dirname, '../src/bootstrap_mac_vendor.js'), result, 'utf8', function (err) {
         if (err) console.log(err);
      });
    });
  } else {
    console.log('File not found !!!');
  }
});
