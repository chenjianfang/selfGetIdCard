function Init(){
	this.clickEvent();
	this.currentValue="";
	this.valueArry=[];
	this.intvalue;
	this.timecount=90;
	this.timeRun();
	if(document.body.attachEvent){
		document.body.attachEvent("touchstart",function(){})
	}else{
		document.body.addEventListener("touchstart",function(){});
	}
}
Init.prototype.clickEvent = function(){
	var that = this;
	var $cardnumber = $(".cardnumber");
	$(".numberCard").click(function(e){
		that.clickGetValue(e);
	});
	$(".delete").click(function(){ //删除 pop()
		that.valueArry.pop();
		$cardnumber.val(that.valueArry.join(""));
	});
	$(".clear").click(function(){
		that.valueArry=[];
		$cardnumber.val(that.valueArry.join(""));
	});
	$("#post").click(function(){
		$cardnumber.focus();
	});
	/*返回主页*/
	$(".gotoHome").click(function(){
		self.location.href="home.html";
	});
	$(".cardbutton").click(function(){  //流程开始
		var carderValue = $cardnumber.val();
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		var carder = carderValue.match(reg);
		/*如果身份证信息输入正确*/
		if(carder){
			$("#idNumberGet").hide();
			$(".gotoHome").hide();
			$(".checkPage").show();
			var checksucc = setTimeout(function(){
				$(".checkPage p").html("身份检测中，请稍后...");
				$(".tipImg-a").hide();
				$(".tipImg-b").show();
			},1000);
			var checkfail = setTimeout(function(){
				$(".checkPage p").html("身份信息检测未通过！请到前台办理！");
				$(".tipImg-b").hide();
				$(".tipImg-c").show();
				$(".gotoHome").show();
			},3000);
			var faceMessage = setTimeout(function(){
				$(".checkPage").hide();
				$(".face-message").show();
			},5000);
			var photoId = setTimeout(function(){
				$(".face-message").hide();
				$(".photoId").show();
			},7000);
			/*下面写接口 上面的只是模拟*/
			var houtai = false; //接口，如果判断正确，立即执行if里面的
			if(houtai){
				clearTimeout(checksucc);
			};

		}else{  /*身份信息输入不正确*/
			alert('不通过');
		}
	});
}
Init.prototype.clickGetValue = function(e){
	if(this.valueArry.length <18){
		this.valueArry.push(e.target.innerHTML);
		$(".cardnumber").val(this.valueArry.join(""));
	}else{
		alert("长度过长");
	}
}	
/*设置时间倒计时*/
Init.prototype.timeRun = function(){
	var that = this;
	$(".time .count").html(this.timecount);
	var timego = setTimeout(function(){
		that.timeRun();
	},1000);
	if (this.timecount == 0){
		clearTimeout(timego);
	}
	this.timecount--;
}