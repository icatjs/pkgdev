<!--backbone template-->
<div class="panel">
	<!-- <span class="item">1</span>
	<span class="item">2</span>
	<span class="item">3</span>
	<span class="item">4</span>
	<span class="item">5</span>
	<span class="item">6</span> -->
	<h3>变色魔方：<b class="text-muted">多次点击模块 会改变颜色</b></h3>
	<%_.each(o.results, function(item){%>
	<span class="item"><%-item.name%></span>
	<%})%>
</div>