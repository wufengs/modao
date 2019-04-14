/**
* @author frank
* @version 0.0.1(2019-04-13)
*/

$(function(){
	// 初始化
	zwgk_init();
	// 监听
	// myHandel();
	
	// 初始化
	function zwgk_init(){
		
	}
	// 处理
	function myHandel(){
		// 消息点击
		$("#sa_list").on("click",".news-list",function(ele){
			var id = $(this).attr("data-id");
			//跳转页面
			window.location.href = 'sa_detail.html?id='+id;
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


