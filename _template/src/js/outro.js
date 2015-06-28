	// Export the widget object for `Node.js` or `seajs/requirejs`
	if(typeof exports!=='undefined'){
		if(typeof module!=='undefined' && module.exports){
			exports = module.exports = View;
		}
		exports['<%=name%>'] = View;
	}
	else {
		iCat.widget('<%=name%>', function(){ return View; });
	}

	if(typeof define==='function'){
		if(define.amd){
			define('<%=name%>', [], function(){ return iCat.widget['<%=name%>']; });
		}
		else if(define.cmd) {
			define(function(require, exports, module){ module.exports = iCat.widget['<%=name%>']; });
		}
	}
})(this);