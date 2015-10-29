var iCat = ICAT;
var path = iCat.util.getCurPath();
iCat.util.getModel = function(cfg){ return cfg; };

iCat.loader.require(['mvclib', path+'/../src/js/model'], function(){
	test('test', function(){
		deepEqual(Model.getColor('abc'), 'red');
	});
});