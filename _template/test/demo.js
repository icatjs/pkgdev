(function(iCat){
	var path = iCat.util.getCurPath() + '/..';
	iCat.loader.config({
		alias: {
			'<%=name%>': path + '/index.js'
		}
	});

	iCat.loader.require('jquery, underscore, backbone, <%=name%>', function(){
		var v = new iCat.widget.<%=name%>({
			el: '.J_widgetBox',
			//style: false, // Don't use the default
			//dcname: 'test', // --way1: chunk-data render
			events: {
				'click.insert .item': 'insert'
				//,'click.cc .item': 'insert'
			},
			mconfig: {
				//api: {testUrl: 'test/data.json'}, // --way2: ajax-data render
				//afArgus: {a:1, b:2},
				MergeData: { // --way3: user-data render
					results: [
						{name:1}, {name:2}, {name:3},
						{name:4}, {name:5}, {name:6}
					]
				}
			},

			insert: function(e){
				$('.J_otherWrap').empty().append(
					$(e.currentTarget).clone()
				);
			}
		});
	});
})(ICAT);