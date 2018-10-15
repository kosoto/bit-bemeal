"use strict"
var junghoon = junghoon || {};

junghoon.board = (()=>{
	var comment =x=>{
		// 코멘트 화면짜기
	};
	return{comment:comment};
})();
junghoon.member = {
		add : () => {
			$.getScript($.script()+'/ui/j_add.js', ()=>{
				$('header').remove();
				$('#content').empty().append(
					$('<div/>').addClass('add').html(addUI())
				);
				$('#join_submit_btn').click(e=>{
					alert('join_submit_btn');
				});
				$('#join_to_login').click(e=>{
					alert('안녕 안녕 안녕로봇');	
					junghoon.member.login();
				})
			})
		},
		login : () => {
			$.getScript($.script()+'/ui/j_login.js', ()=>{
				$('header').remove();
				$('#content').empty().append(
					$(loginUI())
				);
				$('#login_to_join').click(e=>{
						alert('잘가 잘가 잘가로봇');
						junghoon.member.add();
					})
				$('#login_submit_btn').click(e=>{
					alert('aa');
					$('#info').html(
							'<li><a href="#" id="logout">로그아웃</a></li>'
							+'<li><a href="#" id="mypage">마이페이지</a></li>'
					); 
					$('#logout').click(e=>{
					bemeal.main.init();
					});
					$('#mypage').click(e=>{
					alert('마이페이지 클릭');
						junghoon.service.mypage();
					});
				})
			});
		}
};

junghoon.service = {
		boards : x=>{
			$('#header').remove();
			$('#content').empty();
			$.getJSON($.ctx()+"/boards/"+x,d=>{
				$.getScript($.script()+"/compo.js",()=>{
					ui.tbl({
						type : "default",
						id : "table",
						head : "게시판",
						body : "오픈게시판... 누구든지 사용가능",
						table : " table-bordered",
						list : ['No','제목','내용','글쓴이','작성일','조회수']
					})
					.appendTo('#content');
					
					$.each(d.list,function(){
						console.log(this.regdate);
						$('<tr/>')
						.append(
							$('<th scope="row"/>').html(this.bno).attr('width','5%'),
							$('<td/>').html(this.title).attr('width','10%'),	
							$('<td/>').html(this.content).attr('width','50%')
							.click(e=>{
								console.log("this.bno:"+this.bno);
								kst.service.readPage({bno:this.bno,type:'open'});
							}),	
							$('<td/>').html(this.writer).attr('width','10%'),
							$('<td/>').html(this.regdate).attr('width','10%'),
							$('<td/>').html(this.viewcnt).attr('width','5%')	
						)
						.appendTo($('tbody'));
					});
					ui.page(d.page).appendTo($('#content'));
					$.each($('#page li'),(x,y)=>{
						let a = $('<a/>').addClass("page-link").attr({href:"#"});
						if(x==0){
							a.text("◀")
							.click(e=>{
								e.preventDefault();
								if((d.page.existPrev)) kst.service.boards((x+d.page.prevBlock));
							})
						}else if(x==$('.pagination li').length-1){
							a.text("▶")
							.click(e=>{
								e.preventDefault();
								if((d.page.existNext)) kst.service.boards((x+d.page.prevBlock));
							})
						}else{
							a.text((x+d.page.prevBlock))
							.click(e=>{
								e.preventDefault();
								kst.service.boards((x+d.page.prevBlock));
							})
						}
						a.appendTo(y);
					});
					
				})
			});
		},
		mypage : x => {
			alert('mp');
			$.getScript($.script()+'/ui/j_mbrupdate.js', ()=>{
					$('#content').empty().append(
						$('<div/>').addClass('memberModify').html(modifyUI())	
					);
				})
			
		}
}