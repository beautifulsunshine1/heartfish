// JavaScript Document
var fruitObj=function(){
	this.alive=[];
	this.x=[];
	this.y=[];
	this.aneNo=[];
	this.l=[];
	this.spd=[];//每个果实的速度
	this.fruitType=[];
	this.orange=new Image();
	this.blue=new Image();
}
fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
	for(var i=0;i<this.num;i++)
	{
		this.alive[i]=false;//果实处于休眠状态
		this.x[i]=0;
		this.y[i]=0;
		this.aneNo[i]=0;
		this.l[i]=0;
		this.spd[i]=Math.random()*0.1+0.1;
		this.fruitType[i]=[];
	}
	this.orange.src="./src/fruit.png";
	this.blue.src="./src/blue.png";
}
fruitObj.prototype.draw=function(){//画果实
   for(var i=0;i<this.num;i++)
	{
		 //find an ane,grow,fly up
		 if(this.alive[i])
		 {
			 if(this.fruitType[i]=="blue")
				{
					var pic=this.blue;
				}else
				{
					var pic=this.orange;
				}
			 if(this.l[i]<=14)//果实的半径
			 {
				var NO=this.aneNo[i];
				this.x[i]=ane.headx[NO];
				this.y[i]=ane.heady[NO];
				this.l[i]+=this.spd[i]; 
			 }else
			 {
				 this.y[i]-=7*this.spd[i];
			 }
			  ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);	
			
			 if(this.y[i]<10)
			 {
				 this.alive[i]=false;
			 }
		 }
	}
     
}
fruitObj.prototype.born=function(i){
	this.aneNo[i]=Math.floor(Math.random()*ane.num);//果实的坐标
	this.l[i]=0;
	this.alive[i]=true;
	var ran=Math.random();
	if(ran<0.2)
	{
	this.fruitType[i]="blue";
	}else
	{
	this.fruitType[i]="orange";	
	}
}
fruitObj.prototype.dead=function(i){
	this.alive[i]=false;
}
function fruitMonitor(){
	var num=0;
	for(var i=0;i<fruit.num;i++)
	{
	   if(fruit.alive[i])num++;
	}
	if(num<15)
	{
		sendFruit();
		return;
	}
}
function sendFruit()
{
	for(var i=0;i<fruit.num;i++)
	{
		if(!fruit.alive[i])
		{
			fruit.born(i);
			return;
		}
	}
}


