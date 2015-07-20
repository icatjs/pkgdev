<!--backbone template-->
<%if(o.displayType==1){%>
	<span class="J_handleBtn"><!-- data-toggle="modal" data-target="#myModal"-->
		<i title="<%-o.btnText%>" class="fa fa-bookmark"></i>
		<!--<b title="<%-o.btnText%>">click me...</b>-->
	</span>

	<!--{xxx-->
	<div class="modal fade" id="myModal"role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title" id="myModalLabel">Modal title</h4>
				</div>
				<div class="modal-body J_toolWidget">
				...
				</div>
			</div>
		</div>
	</div>
	<!--xxx}-->
<%}else if(o.displayType==2){%>
	<span class="J_handleBtn">
		<b title="<%-o.btnText%>">click me...</b>
	</span>
<%}else{%>
<div class="panel">
	<h3>变色魔方：<b class="text-muted">多次点击模块 会改变颜色</b></h3>
	<%_.each(o.results, function(item){%>
	<span class="item"><%-item.name%></span>
	<%})%>
</div>
<%}%>

