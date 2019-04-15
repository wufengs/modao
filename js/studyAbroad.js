/**
* @author frank
* @version 0.0.0(2019-03-25)
*/

$(function(){
	// 初始化
	sa_init();
	// 监听
	myHandel();
	
	// 初始化
	function sa_init(){
		$.ajax({
			//url: 'json/studyAbroad.json',
			url: 'json/studyAbroad.json',
			type: 'GET',
			data: null,
			dataType: 'json',
			success: function(resp){
				console.dir(resp.data)
				if(resp.data){
					if(resp.data.list1){
						var sa_list1_ele = $("#sa_list1");
						var sa_list1_str = "";
						var sa_list1_length = 6;
						// 控制最多显示6个信息
						if(resp.data.list1.length < sa_list1_length){
							sa_list1_length = resp.data.list1.length;
						}
						for(var i=0;i<sa_list1_length;i++){
							sa_list1_str += ''
							+'<li class="mylist-item" data-id="'+resp.data.list2[i].id+'">'
							+'	<div class="mylist-title">'+resp.data.list1[i].title+'</div>'
							+'	<div class="mylist-date">'+resp.data.list1[i].date+'</div>'
							+'</li>';
						}
						sa_list1_ele.empty();
						sa_list1_ele.append(sa_list1_str);
					}
					if(resp.data.list2){
						var sa_list2_ele = $("#sa_list2");
						var sa_list2_str = "";
						var sa_list2_length = 6;
						// 控制最多显示6个信息
						if(resp.data.list2.length < sa_list2_length){
							sa_list2_length = resp.data.list2.length;
						}
						for(var i=0;i<sa_list2_length;i++){
							sa_list2_str += ''
							+'<li class="mylist-item" data-id="'+resp.data.list2[i].id+'">'
							+'	<div class="mylist-title">'+resp.data.list2[i].title+'</div>'
							+'	<div class="mylist-date">'+resp.data.list2[i].date+'</div>'
							+'</li>';
						}
						sa_list2_ele.empty();
						sa_list2_ele.append(sa_list2_str);
					}
					if(resp.data.list3){
						var sa_list3_ele = $("#sa_list3");
						var sa_list3_str = "";
						var sa_list3_length = 6;
						// 控制最多显示6个信息
						if(resp.data.list3.length < sa_list3_length){
							sa_list3_length = resp.data.list3.length;
						}
						for(var i=0;i<sa_list3_length;i++){
							sa_list3_str += ''
							+'<li class="mylist-item" data-id="'+resp.data.list2[i].id+'">'
							+'	<div class="mylist-title">'+resp.data.list3[i].title+'</div>'
							+'	<div class="mylist-date">'+resp.data.list3[i].date+'</div>'
							+'</li>';
						}
						sa_list3_ele.empty();
						sa_list3_ele.append(sa_list3_str);
					}
					if(resp.data.list4){
						var sa_list4_ele = $("#sa_list4");
						var sa_list4_str = "";
						var sa_list4_length = 6;
						// 控制最多显示6个信息
						if(resp.data.list4.length < sa_list4_length){
							sa_list4_length = resp.data.list4.length;
						}
						for(var i=0;i<sa_list4_length;i++){
							sa_list4_str += ''
							+'<li class="mylist-item" data-id="'+resp.data.list2[i].id+'">'
							+'	<div class="mylist-title">'+resp.data.list4[i].title+'</div>'
							+'	<div class="mylist-date">'+resp.data.list4[i].date+'</div>'
							+'</li>';
						}
						sa_list4_ele.empty();
						sa_list4_ele.append(sa_list4_str);
					}
				}
			},
			error: function(err){
				console.log(err);
			}
		});
	}
	// 处理
	function myHandel(){
		// 消息标题点击
		$("#studyAbroad").on("click",".tag",function(ele){
			var id = $(this).attr("data-id");
			//跳转页面
			if(id){
				window.location.href = 'sa_list.html?id='+id;
			}else{
				console.log("html页面设置的id有问题，请联系管理员");
			}
		});
		// 消息点击
		$("#studyAbroad").on("click",".mylist-item",function(ele){
			var id = $(this).attr("data-id");
			//跳转页面
			if(id){
				window.location.href = 'sa_detail.html?id='+id;
			}else{
				console.log("没有消息的id，请联系管理员");
			}
		});
	}
	
	
	
});


