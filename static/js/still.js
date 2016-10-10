// JavaScript Document

$(document).ready(function(){	   
		var onChange = function ($this, status) {	
			if(status) {
				
				$this.addClass('cur-1');
				if($this.length > 1) {
				
				}else{
					$(".tubi li ol").prepend("<li data-id='"+$this.attr("data-id")+"'><a href='javascript:;'>"+$this.text()+"<span>X</span></a></li>");
				}
				
			}else{
				$this.removeClass('cur-1');
				if($this.length > 1) {
					
				}else{
					$(".tubi li[data-id='"+$this.attr("data-id")+"']").remove();
				}
			}
		};
			

		//点击事件
		$(".middle-middle .middle-text a").bind("click", function () {
			var all = $(".middle-middle .middle-text a");
			if($(this).attr("data-id") == 0) {
				
			}else{
				if($(this).hasClass("cur-1")) {
                    onChange($(this), 0);
					
				}else{
					$(".tubi li ol").removeClass('on');
                    onChange($(this), 1);
				}
				var v = $(this).attr('data-id');             
				var a = $("#skill").val();                
				var a_arra= a.split(',');                   
				var allv ;         
				var b = $.inArray(v , a_arra );
				if( b>=0 ){
					a_arra.splice(b,1); 
					allv = a_arra.join(","); 	
				}else{          
					if(a){
						allv = a+","+v;                      
					} else {
						allv = v;                                      
					}
				}
				$("#skill").attr('value', allv );
			}
		});
		$(".still .middle-on-2 .middle-top .kong ul li ").bind("click", function () {
			var data_id = $(this).attr("data-ip");
			$(".still .middle-on-2 .middle-middle .web ").addClass('display-none');
			$(".still .middle-on-2 .middle-top .kong ul li a b").css("background","url(../static/images/ph-12.png) no-repeat");
        	$(".still .middle-on-2 .middle-middle .web[data-ip = '"+data_id+"']").removeClass('display-none');
			$(".still .middle-on-2 .middle-top .kong ul li[data-ip = '"+data_id+"'] a b").css("background","url(../static/images/ph-10.png) no-repeat");
		});
		//点击下面生成的标签就删除
		$(document).on("click", "ul.width-1 li ol li", function () {
			//获取当前点击元素对应的A元素
			var id = $(this).attr("data-id");
			var a = $(".middle-middle .middle-text a[data-id='"+id+"']")
			onChange(a, 0);
			$(".middle-top ul.tubi li ol li[data-id='"+id+"']").remove();
			var v = $(this).attr('data-id');             
			var a = $("#skill").val();                
			var a_arra= a.split(',');                   
			var allv ;         
			var b = $.inArray(v , a_arra );
			if( b>=0 ){
				a_arra.splice(b,1); 
				allv = a_arra.join(","); 	
			}else{          
				if(a){
					allv = a+","+v;                      
				} else {
					allv = v;                                      
				}
			}
			$("#skill").attr('value', allv );
		});
		$(".middle-bottom a").bind("click", function () {
			var $this = $("#from");
			var check = true;
			function jquing(data){ 
				if(data.result == 0){
					
				}else{
					window.location.href = data.url;
				}
			}
			if(check){
				$.ajax({ 
					type:$this.attr("method"), 
					url:$this.attr("action"), 
					data:$this.closest("form").serialize(),
					dataType: "json",
					success:jquing
				})
			}
		})
});