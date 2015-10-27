var iCat = ICAT, Model;
iCat.util.getView = function(cfg){ return cfg; };

iCat.loader.require('mvclib, /src/js/view', function(){
	test('test', function(){deepEqual(true, true);});
	
	View.changeColor({
		currentTarget:'#qunit-header',
		preventDefault:function(){}
	});

	iCat.loader.include('bootstrap', function(){
		View.widgetShow();
	});
});