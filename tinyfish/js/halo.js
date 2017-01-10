// JavaScript Document
var haloObj=function()
{
	this.x=[];
	this.y=[];
	this.alive=[];//是否在执行任务
	this.r=[];
}
haloObj.prototype.num=10;
haloObj.prototype.init=function()
{
	for(var i=0;i<this.num;i++)
	{
		this.alive[i]=false;//所有物体都是可以用的
		this.r[i]=0;
	}
}
haloObj.prototype.draw=function()
{   
    ctx1.save();
	ctx1.lineWidth=2;
	ctx1.shadowBlur=10;
	ctx1.shadowColor="rgba(203,91,0,1)";
	for(var i=0;i<this.num;i++)
	{
		if(this.alive[i])
		{
			//draw
			//绘制圆圈
			this.r[i]+=16*0.08;
			if(this.r[i]>50)
			{
				this.alive[i]=false;
				break;//跳出本次循环,执行下一次循环
			}
			var alpha=1-this.r[i]/50;//颜色和半径成反比
	
			ctx1.beginPath();
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctx1.strokeStyle="rgba(203,91,0,"+alpha+")";
			ctx1.stroke();
			ctx1.closePath();
		}
	}
	ctx1.restore();
}
haloObj.prototype.born=function(x,y)
{
	for(var i=0;i<this.num;i++)
	{
		if(!this.alive[i])
		{
			//born
			this.alive[i]=true;
			this.r[i]=10;
			this.x[i]=x;
			this.y[i]=y;//圆圈的位置
			return;//找到一个就跳出循环
		}
	}
}
