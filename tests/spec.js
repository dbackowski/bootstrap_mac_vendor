describe("Testing bootstrapMacVendor", function () {
  describe("Mac address vendor found", function() {
    it("Show popover with mac vendor name", function (done) {
      $('#mac_vendor_found').trigger('mouseover');

      setTimeout(function() {
        chai.assert.equal($(".popover").is(":visible"), true);
        chai.assert.equal($("h3.popover-title").html(), '<b>Producent</b>');
        chai.assert.equal($("div.popover-content").html(), 'Hewlett Packard');

        done();
      }, 100);

      $('#mac_vendor_found').trigger('mouseout');
    });
  });

  describe("Mac address vendor not found", function() {
    it("Show popover with default noData message", function (done) {
      $('#mac_vendor_not_found').trigger('mouseover');

      setTimeout(function() {
        chai.assert.equal($(".popover").is(":visible"), true);
        chai.assert.equal($("h3.popover-title").html(), '<b>Producent</b>');
        chai.assert.equal($("div.popover-content").html(), '- brak danych -');
        done();
      }, 100);

      $('#mac_vendor_not_found').trigger('mouseout');
    });
  });
});