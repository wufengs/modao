/**
* @author frank
* @version 0.0.0(2019-03-25)
*/

$(function(){
	// 初始化
	sa_detail_init();
	
	// 初始化
	function sa_detail_init(){
		var id = GetQueryString("id");
		// 获取消息详情
		$.ajax({
			url: 'json/sa_detail.json',
			type: 'GET',
			data: {
				id: id
			},
			dataType: 'json',
			success: function(resp){
				if(resp.data){
					//类别
					var sa_typee = "为什么留学天津";
					var sa_bg = "bg-blue";
					if(resp.data.type==1 || resp.data.type=="1"){
						sa_typee = "为什么留学天津";
						sa_bg = "bg-blue";
					}else if(resp.data.type==2 || resp.data.type=="2"){
						sa_typee = "留学生活";
						sa_bg = "bg-orange";
					}else if(resp.data.type==3 || resp.data.type=="3"){
						sa_typee = "校友活动";
						sa_bg = "bg-green";
					}else if(resp.data.type==4 || resp.data.type=="4"){
						sa_typee = "体验天津";
						sa_bg = "bg-yellow";
					}
					$("#sa_typee").html(sa_typee);
					$("#sa_typee").addClass(sa_bg);
					$("#sa_line").addClass(sa_bg);
					//标题
					$("#sa_detail_title").html(resp.data.title);
					//日期
					$("#sa_detail_date").html(resp.data.date);
					//内容
					$("#sa_detail_content").html(resp.data.content);
				}
			},
			error: function(err){
				console.log(err);
			}
		});
	}
	
	// 获取地址栏参数
	function GetQueryString(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r!=null)return  unescape(r[2]);
		return null;
	}
	
});


