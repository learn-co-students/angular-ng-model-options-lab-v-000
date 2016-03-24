var path = require('path');

describe('Debounce', function() {
	browser.get('http://localhost:8080');

	var div = element(by.css('div[ng-controller]'));
	var input = element(by.css('input'));
	var attrs = input.getAttribute('ng-model-options');

	it('should update on blur immediately', function() {
		expect(attrs).toContain('\'blur\': 0');
	});

	it('should update after not typing for 500ms', function() {
		expect(attrs).toContain('\'default\': 500');
	});

	it('should have an updateOn property', function() {
		expect(attrs).toContain('updateOn');
	});
});
