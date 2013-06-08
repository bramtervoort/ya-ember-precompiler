var page = require('webpage').create();
page.open('test.htm', function () {
	setTimeout(function () {
		var text = page.evaluate( function () {
			return $("#testresult").text();
		} );
		
		phantom.exit(text.trim() == 'other' ? 0 : -1);
	}, 5)
});