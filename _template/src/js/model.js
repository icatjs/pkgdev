	var Model = iCat.util.getModel({
		asyncfunc: function(fn){
			var that = this,
				api = that.get('api') || {},
				argus = that.get('ajaxargus');
			if(api.testUrl){
				that.getData(api.testUrl, argus, function(data){
					fn && fn(data);
				});
			} else {
				fn && fn(that.get('MergeData'));
			}
		},

		getColor: function(text){
			var colors = ['red', 'blue', 'green', 'yellow', 'gray', 'brown'],
				index = Math.floor(Math.random()*6),
				color = colors[index];
			if(this.sendMessage){
				this.sendMessage('testMsg', {
					text: text, color: color
				});
			}
			return color;
		},

		protocols: {
			getReply: function(msg){
				console.log(msg);
				//this.set('changeData', msg);
			}
		}
		// This(↑) is an example only, please change the source code to yours...
		// your code...
	});