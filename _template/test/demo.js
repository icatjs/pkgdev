(function(iCat){
	var path = iCat.util.getCurPath() + '/..';
	iCat.loader.config({
		alias: {
			'WIDGETNAME': [
				path + '/style/index.css',
				path + '/index.js'
			]
		}
	});

	iCat.loader.require('jquery, underscore, backbone, WIDGETNAME', function(){
		var v = new iCat.widget.WIDGETNAME({ //WIDGETNAME需要手动改写，改成你当前的widget
			el: '.box',
			//tagName: 'p',
			//tpl: 'test2',

			evts: {
				'click.insert i': 'insert'
				//'click.i i': 'insert'
			},

			insert: function(){
				this.$el.appendTo($('.J_testWrap'));
			}
		});
	});
})(ICAT);