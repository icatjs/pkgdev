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
		var colors = ['red', 'blue', 'green', 'yellow', 'gray', 'brown'],
			index = Math.floor(Math.random()*6);
		$(e.currentTarget).css('background', colors[index]);
	},

	widgetShow: function(){
		var model = this.model,
			md = model.get('MergeData');
		$('#'+(md.modalId? md.modalId : 'myModal')).modal('show');
		//this.model.set('api', {testUrl: 'test/data.json'});
		
		this.model.set('MergeData', {
			results: [
				{name:1}, {name:2}, {name:3},
				{name:4}, {name:5}, {name:6}
			]
		});

		/*var argus = (this.mconfig || {}).afArgus || {},
			margus = this.model.get('afArgus');

		if(margus){
			this.model.clear({silent:true});
			this.model.set('api', {testUrl: 'test/data.json'});
		} else {
			this.model.set('afArgus', argus);
			this.model.clear({silent:true});
			this.model.set({
				afArgus: argus,
				MergeData: {a:2},
				api: {testUrl: 'test/data.json'}
			});
		}*/
	}
	// This(↑) is an example only, please modify the source code to yours...
	// your code...
});