var Model = iCat.util.getModel({
	asyncfunc: function(fn){
		var that = this,
			api = that.get('api') || {},
			argus = that.get('afArgus');
		if(api.testUrl){
			that.getData(api.testUrl, argus, function(data){
				fn && fn(data);
			});
		} else {
			fn && fn(that.get('MergeData'));
		}
	}
	// This(↑) is an example only, please change the source code to yours...
	// your code...
});