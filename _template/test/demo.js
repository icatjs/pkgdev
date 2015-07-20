(function(iCat){
	var path = iCat.util.getCurPath() + '/..';
	iCat.loader.config({
		alias: {
			'<%=name%>': path + '/index.js'
		}
	});

	iCat.app('Demo', function(){
		return {
			init: function(){
				iCat.util.bindEvent({
					'change.select .J_selectStyle select': 'selectStyle',
					'click.tab .J_tabBox li': 'tabSwitch'
				});
				
				iCat.loader.require('underscore, backbone, <%=name%>', 'demoIt');
			},

			selectStyle: function(e){
				var me = $(e.currentTarget), val = me.val(),
					widget = this.oWidget, handle = widget.$parasitifer;

				$('.J_testBox').hide().eq(val).show();
				
				//widget.remove();
				widget.$el.empty();
				widget.stopListening();
				if(handle){
					handle.empty();
					if(handle.attr('icat-widget')=='demo-tab'){
						handle.closest('.J_tabBox').find('li:eq(0)').trigger('click');
					}
				} else {
					widget.$el.html('loading...Render me first');
				}

				this.oWidget = widget.copy({
					el: val==0? '.J_widgetBox' : val==1? '.J_toolWidget' : '.J_tabWidget',
					displayType: val
				});
				/*this.demoIt({
					el: val==0? '.J_widgetBox' : val==1? '.J_toolWidget' : '.J_tabWidget',
					displayType: val
				});*/

				if(val==2 && $('.J_tabBox [icat-widget]').hasClass('selected')){
					this.oWidget.model.set('api', {testUrl:'test/data.json'});
				}
			},

			tabSwitch: function(e){
				var me = $(e.currentTarget),
					index = $('.J_tabBox li').index(me);
				me.addClass('selected').siblings('li').removeClass('selected');
				$('.J_tabBox .item').eq(index).show().siblings('.item').hide();

				if(me.attr('icat-widget')){
					var view = $('.J_tabWidget').getCurrentView();
					if(view) view.model.set('api', {testUrl:'test/data.json'});
				}
			},

			demoIt: function(cfg){
				this.oWidget = new iCat.widget.<%=name%>(_.extend({
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
							btnText: 'what are you ÅªÉ¶Àà',
							results: [
								{name:1}, {name:2}, {name:3}
							]
						}
					},

					insert: function(e){
						$('.J_otherWrap .copy').empty().append(
							$(e.currentTarget).clone()
						);
					}
				}, cfg));
			}
		};
	});

	Demo.init();
})(ICAT);