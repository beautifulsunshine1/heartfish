// JavaScript Document
var babyObj=function()
{
	this.x;
	this.y;
	this.angle;
	this.babyEye=new Image();
	this.babyBody=new Image();
	this.babyTail=new Image();
	this.babyTailTimer=0;//计时器
	this.babyTailCount=0;//目前执行到哪一帧了
	this.babyEyeTimer=0;
	this.babyEyeCount=0;
	this.babyEyeInterval=1000;//当前的图片需要持续多长时间
	this.babyBodyTimer=0;
	this.babyBodyCount=0;
}
babyObj.prototype.init=function()
{
	this.x=canWidth*0.5-50;
	this.y=canHeight*0.5+50;
	this.angle=0;
	this.babyBody.src="./src/babyFade0.png";
}
babyObj.prototype.draw=function()
{
	this.x=lerpDistance(mom.x,this.x,0.98);
	this.y=lerpDistance(mom.y,this.y,0.98);
	var deltaY=mom.y-this.y;
	var deltaX=mom.x-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(beta,this.angle,0.6);
	//baby tail count小鱼尾巴循环
	this.babyTailTimer+=50;//deltaTime是相邻两帧的时间间隔
	if(this.babyTailTimer>50)
	{
		this.babyTailCount=(this.babyTailCount+1)%8;
		this.babyTailTimer%=50;
	}
	//babyEye
	this.babyEyeTimer+=50;
	if(this.babyEyeTimer>this.babyEyeInterval)
	{
		this.babyEyeCount=(this.babyEyeCount+1)%2;
		this.babyEyeTimer%=this.babyEyeInterval;
		if(this.babyEyeCount==0)
		{
			this.babyEyeInterval=Math.random()*1500+2000;
		}else
		{
			this.babyEyeInterval=200;
		}
	}
	//babyBody
	this.babyBodyTimer+=30;
	if(this.babyBodyTimer>300)
	{
		this.babyBodyCount=this.babyBodyCount+1;
		this.babyBodyTimer%=300;
		if(this.babyBodyCount>19)
		{
			this.babyBodyCount=19;
			//gameover
			data.gameOver=true;
		}
	}
	
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	//
	
	var babyTailCount=this.babyTailCount;
	ctx1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width*0.5+23,-babyTail[babyTailCount].height*0.5);
	var babyBodyCount=this.babyBodyCount;
	ctx1.drawImage(babyBody[babyBodyCount],-babyBody[babyBodyCount].width*0.5,-babyBody[babyBodyCount].height*0.5);
	var babyEyeCount=this.babyEyeCount;
	ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width*0.5,-babyEye[babyEyeCount].height*0.5);
	ctx1.restore();
}