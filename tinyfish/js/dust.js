// JavaScript Document
var dustObj=function()
{
	this.x=[];
	this.y=[];
	this.amp=[];
	this.NO=[];
	this.alpha;
}
dustObj.prototype.num=30;
dustObj.prototype.init=function()
{
	for(var i=0;i<this.num;i++)
	{
		this.x[i]=Math.random()*canWidth;
		this.y[i]=Math.random()*canHeight;
		this.amp[i]=20+Math.random()*25;//摆动角度
		this.NO[i]=Math.floor(Math.random()*7);//哪张图片
	}
	this.alpha=0;//正弦函数的初始角度
}
dustObj.prototype.draw=function()
{
	this.alpha+=16*0.0008;
	var l=Math.sin(this.alpha);
	for(var i=0;i<this.num;i++)
	{
		var no=this.NO[i];
		ctx1.drawImage(dustPic[no],this.x[i]+this.amp[i]*l,this.y[i]);
	}
}