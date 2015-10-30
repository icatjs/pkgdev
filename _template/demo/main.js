(function(iCat){
	iCat.loader.config({
		vars: {
			path: iCat.util.getCurPath()
		},
		alias: {
			'<%=name%>': '{path}/../index',
			'mockdata': '{path}/mockdata'
		}
	});

	iCat.app('Demo', function(){
		//events
		iCat.util.bindEvent({
			'change.select .J_selectStyle select': 'selectStyle',
			'click.tab .J_tabBox li': 'tabSwitch'
		});

		//kanban
		iCat.widget('Kanban', function(){
			var kb = iCat.util.getView({
				el: '.J_otherWrap .copy',
				tpl: 'J_kanban',
				preventFirstRender: true,
				mconfig: {
					'@testMsg': function(data){
						console.log(data);
						this.set('MergeData', data);
						this.sendMessage('getReply', 'Render something on me');
					}
				}
			});
			return kb;
		});

		return {
			init: function(){
				//controller
				new (iCat.util.getController())();

				new iCat.widget.Kanban; //被通信的widget
				iCat.loader.require('mock, mockdata, <%=name%>', 'normal'); //默认实例化区块形态的view
			},

			//---style1
			normal: function(){
				this.oWidget = new iCat.widget.<%=name%>({
					el: '.J_widgetBox',
					//style: false,
					events: {
						'click.alertMe .item': 'alertMe'
						//,'click.cc .item': 'insert'
						//, '2@click .J_handleBtn': ''
					},
					mconfig: {
						//dcname: 'test', // --way1: chunk-data render
						//api: {testUrl: 'test/data.json'}, // --way2: ajax-data render
						//params: {a:1, b:2},
						MergeData: Mock.mock(Demo.mockdata.init) // --way3: user-data render
					},

					alertMe: function(e){
						console.log($(e.currentTarget).html());
					}
				});
			},

			//---style2
			tool: function(){
				Mock.mock('/data/mytest', Demo.mockdata.popAjax);
				var w = this.oWidget.copy({
					el: '.J_toolWidget',
					menu: '[data-widgetBtn="demo-pop"]',
					events: {
						'1@click.me .J_handleBtn': function(e){ console.log(e.currentTarget); }
					},
					displayType: 1,
					mconfig: {
						params: {dataType:'json'},
						api: {testUrl: '/data/mytest'}
					}
				});
				return w;
			},

			//---style3
			tab: function(){
				Mock.mock('/data/mytest', Demo.mockdata.tabAjax);
				var w = this.oWidget.copy({
					el: '.J_tabWidget',
					menu: '[data-widgetBtn="demo-tab"]',
					displayType: 2,
					mconfig: {
						params: {dataType:'json'}
					}
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
					if(view) view.model.set('api', {testUrl:'/data/mytest'});
				}
			}
		};
	});

	Demo.init();
})(ICAT);