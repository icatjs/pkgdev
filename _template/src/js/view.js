var View = iCat.util.getView({
	model: Model, //from model.js
	el: '.J_widgetWrap',
	tpl: '<%=template%>', //This is fixed, don't change!
	evts: {
		'click.cc .item': 'changeColor'
	},
	changeColor: function(e){
		e.preventDefault();
		var colors = ['red', 'blue', 'green', 'yellow', 'gray', 'brown'],
			index = Math.floor(Math.random()*6);
		$(e.currentTarget).css('background', colors[index]);
	}
	// This(↑) is an example only, please change the source code to yours...
	// your code...
});