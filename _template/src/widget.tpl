<!--Define the macro-->
<define name="list">
	<%_.each(o.results, function(item){%>
	<span class="item"><%-item.name%></span>
	<%})%>
</define>

<!--backbone template-->
<%if(o.displayType==1){%>
	<%if(o.__toolRender__){%>
		<span class="J_handleBtn"><!-- data-toggle="modal" data-target="#myModal"-->
			<i title="<%-o.btnText%>" class="fa <%-o.cla? o.cla : 'fa-bookmark'%>"></i>
			<!--<b title="<%-o.btnText%>">click me...</b>-->
		</span>
	<%}else{%>
		<div class="modal fade" id="<%-o.modalId? o.modalId : 'myModal'%>" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" id="myModalLabel">Modal title</h4>
					</div>
					<div class="modal-body">
						<div class="panel" lazy-load-wrap="list"><%-o.micro.list()%></div>
					</div>
				</div>
			</div>
		</div>
	<%}%>
<%}else if(o.displayType==2){%>
	<%if(o.__toolRender__){%>
	<span class="J_handleBtn">
		<b title="<%-o.btnText%>">click me...</b>
	</span>
	<%}else{%>
	<div class="panel"><%-o.micro.list()%></div>
	<%}%>
<%}else{%>
<div class="panel">
	<h3><%-o.md_title? o.md_title : '变色魔方'%>：
		<b class="text-muted"><%-o.md_desc? o.md_desc : '多次点击模块 会改变颜色'%></b></h3>
	<%-o.micro.list()%>
</div>
<%}%>

