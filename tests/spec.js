describe("Testing bootstrapMacVendor", function () {
  describe("Mac address vendor found", function() {
    it("Show popover with mac vendor name", function (done) {
      $('#mac_vendor_found').trigger('mouseover');

      chai.assert.equal($(".popover").is(":visible"), true);
      chai.assert.equal($("h3.popover-title").html(), '<b>Producent</b>');
      chai.assert.equal($("div.popover-content").html(), 'Hewlett-Packard Company');

      $('#mac_vendor_found').trigger('mouseout');
      setTimeout(done, 150);
    });
  });

  describe("Mac address vendor not found", function() {
    it("Show popover with default noData message", function (done) {
      $('#mac_vendor_not_found').trigger('mouseover');

      chai.assert.equal($(".popover").is(":visible"), true);
      chai.assert.equal($("h3.popover-title").html(), '<b>Producent</b>');
      chai.assert.equal($("div.popover-content").html(), '- brak danych -');

      $('#mac_vendor_not_found').trigger('mouseout');
      setTimeout(done, 150);
    });
  });
});