var iCat = ICAT;
iCat.util.getModel = function(cfg){ return cfg; };

iCat.loader.require('mvclib, /src/js/model', function(){
	test('test', function(){
		deepEqual(Model.getColor('abc'), 'red');
	});
});