// JavaScript Document
var momObj=function()//鱼妈妈
{
	this.x;
	this.y;
	this.angle;
	this.bigEye=new Image();
	this.bigTail=new Image();
	this.momTailTimer=0;
	this.momTailCount=0;
	this.momEyeTimer=0;
	this.momEyeCount=0;
	this.momEyeInterval=1000;
	this.momBodyCount=0;
}
momObj.prototype.init=function()
{
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0; 
}
momObj.prototype.draw=function()
{   //大鱼的坐标
    this.x=lerpDistance(mx,this.x,0.99);
	this.y=lerpDistance(my,this.y,0.99);
	//Math.atan2(y,x),大鱼的角度
	var deltaY=my-this.y;
	var deltaX=mx-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(beta,this.angle,0.6);
	//tail
	this.momTailTimer+=10;
	if(this.momTailTimer>50)
	{
		this.momTailCount=(this.momTailCount+1)%8;
		this.momTailTimer%=50;
	}
	//Eye
	this.momEyeTimer+=50;
	if(this.momEyeTimer>this.momEyeInterval)
	{
		this.momEyeCount=(this.momEyeCount+1)%2;
		this.momEyeTimer%=this.momEyeInterval;
		if(this.momEyeCount==0)
		{
			this.momEyeInterval=Math.random()*1500+2000;
		}else
		{
			this.momEyeInterval=200;
		}
	}
    ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	var momTailCount=this.momTailCount;
	ctx1.drawImage(momTail[momTailCount],-momTail[momTailCount].width*0.5+30,-momTail[momTailCount].height*0.5);
	var momBodyCount=this.momBodyCount;
	if(data.double==1)//吃到黄色果实
	{
		ctx1.drawImage(momBodyOrange[momBodyCount],-momBodyOrange[momBodyCount].width*0.5,-momBodyOrange[momBodyCount].height*0.5);
	}else//蓝色
	{
		ctx1.drawImage(momBodyBlue[momBodyCount],-momBodyBlue[momBodyCount].width*0.5,-momBodyOrange[momBodyCount].height*0.5);
	}
	
	var momEyeCount=this.momEyeCount;
	ctx1.drawImage(momEye[momEyeCount],-momEye[momEyeCount].width*0.5,-momEye[momEyeCount].height*0.5);
	
	
	ctx1.restore();
}