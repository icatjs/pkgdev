var View = iCat.util.getView({
	model: Model, //new Model
	el: '',
	tpl: '<%=template%>',
	evts: {}, //delays bindEvent for loadPage, same as events
	// your code...
});
return View;