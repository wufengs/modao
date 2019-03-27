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
		if(id==1 || id=="1"){
			//为什么留学天津
		}else if(id==2 || id=="2"){
			//留学生活
		}else if(id==3 || id=="3"){
			//校友活动
		}else if(id==4 || id=="4"){
			//体验天津
		}
		// 获取消息详情
		$.ajax({
			url: 'json/sa_detail.json',
			type: 'GET',
			data: {
				id: id
			},
			dataType: 'json',
			success: function(resp){
				if(resp.data && resp.data.length>0){
					console.log(resp.data);
					// 把详情页内容填充
					$("#sa_detail").empty().html(resp.data);
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


