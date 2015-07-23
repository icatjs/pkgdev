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
				
				iCat.loader.require('underscore, backbone, <%=name%>', 'normal'); //默认实例化区块形态的view
			},

			//---style1
			normal: function(){ 
				this.oWidget = new iCat.widget.<%=name%>({
					el: '.J_widgetBox',
					//style: false,
					//dcname: 'test', // --way1: chunk-data render
					events: {
						'click.insert .item': 'insert'
						//,'click.cc .item': 'insert'
						, '2@click .J_handleBtn': ''
					},
					mconfig: {
						//api: {testUrl: 'test/data.json'}, // --way2: ajax-data render
						//afArgus: {a:1, b:2},
						MergeData: { // --way3: user-data render
							btnText: 'what are you 弄啥类',
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
				});
			},

			//---style2
			tool: function(){
				var w = this.oWidget.copy({
					el: '.J_toolWidget',
					menu: '[data-widgetBtn="demo-pop"]',
					events: {
						'1@click.me .J_handleBtn': function(e){ console.log(e.currentTarget); }
					},
					displayType: 1
				});
				return w;
			},

			//---style3
			tab: function(){
				var w = this.oWidget.copy({
					el: '.J_tabWidget',
					menu: '[data-widgetBtn="demo-tab"]',
					displayType: 2
				});
				return w;
			},

			selectStyle: function(e){
				var me = $(e.currentTarget), val = me.val(),
					toolView = $('.J_toolWidget').getCurrentView(),
					tabView = $('.J_tabWidget').getCurrentView();

				$('.J_testBox').hide().eq(val).show();

				if(val==1 && !toolView){ //切换到tool形态，如果从未实例化view，执行实例化
					this.tool();
				}

				if(val==2 && !tabView){ //切换到tab形态，如果从未实例化view，执行实例化
					this.tab();
				}
			},

			tabSwitch: function(e){
				var me = $(e.currentTarget),
					index = $('.J_tabBox li').index(me);
				me.addClass('selected').siblings('li').removeClass('selected');
				$('.J_tabBox .item').eq(index).show().siblings('.item').hide();

				if(me.attr('data-widgetBtn')){
					var view = me.getCurrentView();
					if(view) view.model.set('api', {testUrl:'test/data.json'});
				}
			}
		};
	});

	Demo.init();
})(ICAT);