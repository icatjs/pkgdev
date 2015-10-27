	var View = iCat.util.getView({
		widgetName: '<%=name%>',
		model: Model, //from model.js
		el: '.J_widgetWrap',
		tpl: '<%=template%>', //This is fixed, don't modify!
		style: '<%=css%>', //This is fixed, don't modify!
		events: {
			'click.cc .item': 'changeColor',
			'1@click.showWidget .J_handleBtn': 'widgetShow'
		},
		changeColor: function(e){
			e.preventDefault();
			var me = $(e.currentTarget),
				color = this.model? this.model.getColor(me.html()) : 'gray';
			me.css('background', color);
		},

		widgetShow: function(){
			var md = this.model? this.model.get('MergeData') : {};
			$('#'+(md.modalId || 'myModal')).modal('show');
		}
		// This(↑) is an example only, please modify the source code to yours...
		// your code...
	});