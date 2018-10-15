"use strict"
var yoonho = yoonho || {};
		
yoonho.service=(()=>{
	var list =x=>{
		
	};
	var retrieve = x=>{
		$.getScript($.script()+'/ui/y_item_detail_modal.js',()=>{
			$.magnificPopup.open({
				closeBtnInside:true,
				closeOnContentClick:false,
				alignTop: false,
				fixedBgPos: true,
				fixedContentPos:false,
				items:{src:
					y_item_detail_modalUI()
				},
				midClick:true,
				overflowY:'auto',
				removalDelay:'0',
				type:'inline'
				}); 
			$('.btn').on('click',function(){
				alert($('#code').val());
			});
			return false;

		});
	};
	return {
		list:list,
		retrieve:retrieve
	};
})();


/*var setContentView=()=>{
	$.getScript($.script()+'/ui/y_item_detail.js',()=>{
		$('#content').append(y_item_detailUI());
	})
}
*/

/*		$('<div/>').attr({id:"item_wrap"}).addClass('wrap').appendTo($('#content'));
$('<div/>').attr({id:"item_wrap_2"}).addClass('container-fluid text-center').appendTo($('#item_wrap'));
$('<div/>').attr({id:"item_wrap_3"}).addClass('row content').appendTo($('#item_wrap_2'));
$('<div/>').attr({id:"item_wrap_4"}).addClass('col-sm-9 text-left').appendTo($('#item_wrap_3'));
$('<div/>').attr({id:"item_wrap_5"}).addClass('container').appendTo($('#item_wrap_4'));
$('<img src="${context}/resources/img/yoonho/maehwa_chicken.jpg" width="1130" height="1150" />').addClass('img-rounded').appendTo($('#item_wrap_5'));
$('<h1/>').html('하이하이').appendTo($('#item_wrap_5'));
$('<p/>').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ').appendTo($('#item_wrap_5'));
$('<h3/>').html('test').appendTo($('#item_wrap_5'));

$('<div/>').attr({id:"item_wrap_6"}).addClass('container mt-3').appendTo($('#item_wrap_5'));
$('<h2/>').html('Media Object').appendTo($('#item_wrap_6'));
$('<p/>').html('Create a media object with the .media and .media-body classes:').appendTo($('#item_wrap_6'));
$('<div/>').attr({id:"item_wrap_7"}).addClass('media border p-3').appendTo($('#item_wrap_6'));
$('<img src="${context}/resources/img/yoonho/img_avatar3.png" alt="John Doe" style="width:60px;"/>').addClass('mr-3 mt-3 rounded-circle').appendTo($('#item_wrap_7'));
$('<div/>').attr({id:"item_wrap_8"}).addClass('media-body').appendTo($('#item_wrap_7'));
$('<h4/>').attr({id:"item_wrap_9"}).html('John Doe').appendTo($('#item_wrap_8'));
$('<small/>').attr({id:"item_wrap_10"}).appendTo($('#item_wrap_9'));
$('<i/>').attr({id:"item_wrap_11"}).html('Posted on February 19, 2016').appendTo($('#item_wrap_10'));
$('<p/>').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.').appendTo($('#item_wrap_8'))

$('<div/>').attr({id:"item_wrap_4_1"}).addClass('col-sm-3 sidenav').appendTo($('#item_wrap_3'));
$('<div/>').attr({id:"item_wrap_5_1"}).addClass('well well-lg').appendTo($('#item_wrap_4_1'));
$('<p/>').html('Hawaiian Steak Dosirak').appendTo($('#item_wrap_5_1'));
$('<p/>').html('(square type)').appendTo($('#item_wrap_5_1'));

$('<div/>').attr({id:"item_wrap_5_2_1"})
$('<div/>').attr({id:"item_wrap_5_2"}).addClass('well well-lg').appendTo($('#item_wrap_4_1'));
$('<a href="#"/>').attr({id:"item_wrap_6_2"}).appendTo($('#item_wrap_5_2'));
$('<span/>').addClass('glyphicon glyphicon-star').appendTo($('#item_wrap_6_2'));
$('<p/>').attr({id:"item_wrap_6_3"}).appendTo($('#item_wrap_5_2'));
$('<span/>').addClass('glyphicon glyphicon-star').appendTo($('#item_wrap_6_3'));
$('<span/>').addClass('glyphicon glyphicon-star').appendTo($('#item_wrap_6_3'));
$('<span/>').addClass('glyphicon glyphicon-star').appendTo($('#item_wrap_6_3'));
$('<span/>').addClass('glyphicon glyphicon-star').appendTo($('#item_wrap_6_3'));
$('<span/>').addClass('glyphicon glyphicon-star').appendTo($('#item_wrap_6_3'));*/

