function Home(){
	this.option();
}
Home.prototype.option = function(){
	$(".left").click(function(){
		self.location.href="idcard.html"
	});
	$(".right").click(function(){
		self.location.href="idcard.html"
	});
}