

	
function Alert(str,Btnstr,T){ //第一个参数：提示内容；第个二参数：按钮内容；  第三个参数：点击按钮回调函数;
		
	var Mack=$('<div>').attr('id','Mack').insertBefore($('body'));
		
	var MackDig=$('<div>').attr('class','MackDig');
	
	var MackDigCon=$('<div>').attr('class','MackDigCon').html(str).appendTo(MackDig);
	
		
	var MackDigBtn=$('<div>').attr('class','MackDigBtn').html(Btnstr).appendTo(MackDig);
		
	
	
	
	MackDig.appendTo(Mack).css('margin-top',-MackDig.innerHeight()/2)
	MackDigBtn.on('click',function(ev){
			
		Mack.remove();
		
		if(T!=null){
			
			return  T();
		}
		
		ev.stopPropagation();
	});
	
}
	

function Dig(str){   // 提示按钮的弹窗
	
	
		$('#Dig').remove();
		var Div=$('<div>').attr('id','Dig').html(str).appendTo($('body'));
		Div.css('margin-top',-Div.innerHeight()/2)
		Div.animate({opacity:0},2000,function(){
			
			
			Div.remove();
			
			
		})
		
		

}


function  loading(str,Id){
	
	var LoadingMack=$('<div>').attr('id',Id).attr('class','LoadingMack').appendTo($('body'));
	var Loading=$('<div>').attr('class','Loading').appendTo(LoadingMack);
	var Loading_img=$('<img>').attr('src','loading.gif').appendTo(Loading);
	var Loading_p=$('<p>').css('font-size','20px').html(str.substr(0,3)).appendTo(Loading);
}
	
	
	
	
	
function AlertTwo(str,BtnFirstr,BtnSecStr,FirFunc,SecFunc){
		
	var Mack=$('<div>').attr('id','Mack').insertBefore($('body'));
		
	var MackDig=$('<div>').attr('class','MackDig');
		
	var MackDigCon=$('<div>').attr('class','MackDigCon').html(str).appendTo(MackDig);
		
	var MackDigBtn=$('<div>').attr('class','MackDigBtn').appendTo(MackDig)
	var MackDigBtn_Fir=$('<div>').attr('class','MackDigBtn_btn').css('border-right','1px solid #e2e2e2').html(BtnFirstr).appendTo(MackDigBtn);
	var MackDigBtn_Sec=$('<div>').attr('class','MackDigBtn_btn').html(BtnSecStr).appendTo(MackDigBtn);
	MackDig.appendTo(Mack).css('margin-top',-MackDig.innerHeight()/2)
	MackDigBtn_Fir.on('click',function(ev){
			
		Mack.remove();
		if(FirFunc!=null){
			
			return  FirFunc();
		}
		ev.stopPropagation();
	});
	MackDigBtn_Sec.on('click',function(ev){
			
		Mack.remove();
		if(SecFunc!=null){
			
			return SecFunc();
		}
		ev.stopPropagation();
	});
	
}	
	
	
	
	
	
	

