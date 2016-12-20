function activeTab(tmp_li_obj){
	cPDF_banner_LiWidth=$("#cPDF_banner").children("ul").children("li").eq(0).width();
	
		$("#cPDF_banner").find('.'+tmp_li_obj).css('left',0);
		if(tmp_li_obj=='sign_up_tab'){
			$("#cPDF_banner").children("ul").children(".get_start_tab").css("left",'-'+cPDF_banner_LiWidth+'px');
			$("#cPDF_banner").children("ul").children(".settings_tab").css("left",cPDF_banner_LiWidth+'px');
		}else if(tmp_li_obj=='settings_tab'){
			$("#cPDF_banner").children("ul").children(".sign_up_tab").css("left",'-'+cPDF_banner_LiWidth+'px');
			$("#cPDF_banner").children("ul").children(".get_start_tab").css("left",cPDF_banner_LiWidth+'px');
		}else if(tmp_li_obj=='get_start_tab'){
			$("#cPDF_banner").children("ul").children(".settings_tab").css("left",'-'+cPDF_banner_LiWidth+'px');
			$("#cPDF_banner").children("ul").children(".sign_up_tab").css("left",cPDF_banner_LiWidth+'px');
		}else{
			$("#cPDF_banner").children("ul").children("li").not('.'+tmp_li_obj).eq(0).css("left",'-'+cPDF_banner_LiWidth+'px');
			$("#cPDF_banner").children("ul").children("li").not('.'+tmp_li_obj).eq(1).css("left",cPDF_banner_LiWidth+'px');
		}
			
}	
$(function(){

	var cPDF_banner_boxWidth=$("#cPDF_banner").width();
	var cPDF_banner_boxHeight=$("#cPDF_banner").height();
	var cPDF_banner_LiWidth=$("#cPDF_banner").children("ul").children("li").eq(0).width();//获取幻灯片Li的宽度
	var cPDF_banner_liNubr=$("#cPDF_banner").find('li').length;//获取幻灯片Li的数量
	//var cPDF_banner_Speed=8000;//滚动速度
	var cPDF_banner_Tab_Contne="";//初始化tab按钮
	var cPDF_banner_Last_NextHeight=$("#cPDF_banner_Last").height();//获取按钮高度
	//tab 条宽度
	var cPDF_banner_Tab_AWidth=(1/cPDF_banner_liNubr)*100;
	var cPDF_banner_TabWidth=$("#cPDF_banner_Tab").width();//tab的宽度
	var cPDF_bannerWidth=$("#cPDF_banner").width();//cPDF_banner的宽度
	$("#cPDF_banner_Tab").css("left",(cPDF_bannerWidth-cPDF_banner_TabWidth)*0.5);//cPDF_banner_Tab定位
	$("#cPDF_banner_Last").css("top",(cPDF_banner_boxHeight-cPDF_banner_Last_NextHeight)*0.5);
	$("#cPDF_banner_Next").css("top",(cPDF_banner_boxHeight-cPDF_banner_Last_NextHeight)*0.5);
	$("#prevL").css("left",-cPDF_banner_LiWidth);
	$("#prevR").css("right",-cPDF_banner_LiWidth);

	for(var i=0;i<parseInt(cPDF_banner_liNubr);i++){
		//$("#cPDF_banner").children("ul").children("li").eq(i).css("left",(i-1)*cPDF_banner_LiWidth);
		
		if(i==1){
			cPDF_banner_Tab_Contne=cPDF_banner_Tab_Contne+"<a class='"+"TabOn' id='"+"TabOn"+i+"' style='width:"+cPDF_banner_Tab_AWidth+"%'></a>";
			}else{
				cPDF_banner_Tab_Contne=cPDF_banner_Tab_Contne+"<a id='TabOn"+i+"' style='width:"+cPDF_banner_Tab_AWidth+"%'></a>";
				}
		}
	$("#cPDF_banner_Tab").html(cPDF_banner_Tab_Contne);
	
	//var Slide_Run = setInterval(Slide_Next,cPDF_banner_Speed)
	function initPic(){
		
		if(parseInt($("#cPDF_banner").find(".sign_up_tab").css("left"))==0){
			$('#cPDF_banner_Last').css('display','none');
			$('#cPDF_banner_Next').css('display','block');
		}else if(parseInt($("#cPDF_banner").find(".get_start_tab").css("left"))==0){
			$('#cPDF_banner_Last').css('display','block');
			$('#cPDF_banner_Next').css('display','none');
		}else{
			$('#cPDF_banner_Last').css('display','block');
			$('#cPDF_banner_Next').css('display','block');
		}
	}
	initPic();
	function Slide_Next(){
		for(var k=0;k<parseInt(cPDF_banner_liNubr);k++){
			if(parseInt($("#cPDF_banner").children("ul").children("li").eq(k).css("left"))==-cPDF_banner_LiWidth)
			{
				
				var cPDF_banner_liSeat=0;//位置参数归零
				for(var j=0;j<parseInt(cPDF_banner_liNubr);j++){
					if(parseInt($("#cPDF_banner").children("ul").children("li").eq(j).css("left"))==-cPDF_banner_LiWidth){
						
						$("#cPDF_banner").children("ul").children("li").eq(j).css("left",cPDF_banner_LiWidth*(cPDF_banner_liNubr-2));

						}else{
							
						cPDF_banner_liSeat=parseInt($("#cPDF_banner").children("ul").children("li").eq(j).css("left"))-cPDF_banner_LiWidth;
						$("#cPDF_banner").children("ul").children("li").eq(j).animate({left:cPDF_banner_liSeat},"slow",function(){initPic()});

						}
					}
					
				}
			}
	}
	
	function Slide_Last(){
		for(var k=0;k<parseInt(cPDF_banner_liNubr);k++){
			if(parseInt($("#cPDF_banner").children("ul").children("li").eq(k).css("left"))==0)
			{
				
				var cPDF_banner_liSeat=0;//位置参数归零
				for(var j=0;j<parseInt(cPDF_banner_liNubr);j++){
					if(parseInt($("#cPDF_banner").children("ul").children("li").eq(j).css("left"))==cPDF_banner_LiWidth*(cPDF_banner_liNubr-2)){
						
						$("#cPDF_banner").children("ul").children("li").eq(j).css("left",-cPDF_banner_LiWidth);
						
						}else{
							
						cPDF_banner_liSeat=parseInt($("#cPDF_banner").children("ul").children("li").eq(j).css("left"))+cPDF_banner_LiWidth;
						$("#cPDF_banner").children("ul").children("li").eq(j).animate({left:cPDF_banner_liSeat},"slow",function(){initPic()});
						
						}
					}
					
				}
			}
	}
	
	setInterval(function(){
		for(var n=0;n<parseInt(cPDF_banner_liNubr);n++){
			if(parseInt($("#cPDF_banner").children("ul").children("li").eq(n).css("left"))==0){
				if((n-1)<0){
					$("#TabOn"+(cPDF_banner_liNubr-1)).removeClass("TabOn");
					$("#TabOn"+(n+1)).removeClass("TabOn");
					$("#TabOn"+n).addClass("TabOn");
					}else {
						$("#TabOn0").removeClass("TabOn");
						$("#TabOn"+(n-1)).removeClass("TabOn");
						$("#TabOn"+(n+1)).removeClass("TabOn");
						$("#TabOn"+n).addClass("TabOn");
							}
				}
			}
		},1)
	
	$("#cPDF_banner_Next").click(Slide_Next);
	$("#cPDF_banner_Last").click(Slide_Last);
	//$("#cPDF_banner_box").mouseenter(function(){clearInterval(Slide_Run)});
	//$("#cPDF_banner_box").mouseleave(function(){Slide_Run = setInterval(Slide_Next,cPDF_banner_Speed)})

	
})		