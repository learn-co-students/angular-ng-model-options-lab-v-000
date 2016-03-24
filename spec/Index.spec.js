var path = require('path');

describe('Debounce', function() {
	browser.get('http://localhost:8080');

	var div = element(by.css('div[ng-controller]'));
	var input = element(by.css('input'));

	it('should update on blur immediately', function() {
		input.click();
		setTimeout(function () {
			element(by.css('body')).click();

			expect(div.getText()).toEqual('test');
		}, 20);

		input.sendKeys('test');
	});

	it('should not update on typing', function(done) {
		input.click();
		input.sendKeys('test');

		var d = protractor.promise.defer();
		setTimeout(function() {
			d.fulfill(div.getText());
			done();
		}, 20);

		expect(d).toEqual('test');
	});
});
