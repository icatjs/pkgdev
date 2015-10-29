var iCat = ICAT, Model;
var path = iCat.util.getCurPath();
iCat.util.getView = function(cfg){ return cfg; };

iCat.loader.require(['mvclib', path+'/../src/js/view'], function(){
	test('test', function(){deepEqual(true, true);});
	
	View.changeColor({
		currentTarget:'#qunit-header',
		preventDefault:function(){}
	});

	iCat.loader.include('bootstrap', function(){
		View.widgetShow();
	});
});