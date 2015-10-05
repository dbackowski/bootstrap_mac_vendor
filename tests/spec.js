describe("Testing bootstrapMacVendor", function () {
  describe("Mac address vendor found", function() {
    it("Show popover with mac vendor name", function (done) {

      var evObj = new CustomEvent('mouseover');
      evObj.initEvent('mouseover', true, false);
      document.getElementById('mac_vendor_found').dispatchEvent(evObj);

      chai.assert.equal($(".popover").is(":visible"), true);
      chai.assert.equal($("h3.popover-title").html(), '<b>Producent</b>');
      chai.assert.equal($("div.popover-content").html(), 'Hewlett-Packard Company');

      var evObj = new CustomEvent('mouseout');
      evObj.initEvent('mouseout', true, false);
      document.getElementById('mac_vendor_found').dispatchEvent(evObj);

      setTimeout(done, 150);
    });
  });

  describe("Mac address vendor not found", function() {
    it("Show popover with default noData message", function (done) {
      var evObj = new CustomEvent('mouseover');
      evObj.initEvent('mouseover', true, false);
      document.getElementById('mac_vendor_not_found').dispatchEvent(evObj);

      chai.assert.equal($(".popover").is(":visible"), true);
      chai.assert.equal($("h3.popover-title").html(), '<b>Producent</b>');
      chai.assert.equal($("div.popover-content").html(), '- brak danych -');

      var evObj = new CustomEvent('mouseout');
      evObj.initEvent('mouseout', true, false);
      document.getElementById('mac_vendor_not_found').dispatchEvent(evObj);

      setTimeout(done, 150);
    });
  });
});