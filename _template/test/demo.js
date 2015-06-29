(function(iCat){
	var path = iCat.util.getCurPath() + '/..';
	iCat.loader.config({
		alias: {
			'testwidget': [
				path + '/style/index.css',
				path + '/index.js'
			]
		}
	});

	iCat.loader.require('jquery, underscore, backbone, testwidget', function(){
		var v = new iCat.widget.testwidget({ //testwidget(WIDGETNAME)需要手动改写，改成你当前的widget
			el: '.J_widgetBox',
			events: {
				'click.insert .item': 'insert'
				//,'click.cc .item': 'insert'
			},
			mconfig: {
				//api: {testUrl: 'test/data.json'},
				//syncfunArgus: {a:1, b:2},
				MergeData: {
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