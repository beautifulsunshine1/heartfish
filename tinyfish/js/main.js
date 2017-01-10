// JavaScript Document
var can1;
var can2;
var ctx1;
var ctx2;
var canWidth;
var canHeight;
var lastTime;
var deltaTime;//两帧间隔时间差
var bgPic=new Image();
var ane;
var fruit;
var mom;
var mx;
var my;//定义鼠标位置,大鱼的坐标会随鼠标位置的改变而变化
var babyTail=[];
var babyEye=[];
var babyBody=[];
var momTail=[];
var momEye=[];
var momBodyOrange=[];
var momBodyBlue=[];
var data;
var wave;//圈圈特效
var halo;
var dust;//漂浮物
var dustPic=[];
document.body.onload=game;
function game(){
	init();
	gameloop()
	lastTime=Date.now();
	deltaTime=0;
}
function init(){//获得canvas context
   can1=document.getElementById("canvas1");//fishes,dust,UI,circle
   can2=document.getElementById("canvas2");//background,ane,fruit
   ctx1=can1.getContext('2d');
   ctx2=can2.getContext('2d');
   can1.addEventListener('mousemove',onMouseMove,false);//添加鼠标监听
   bgPic.src="./src/background.jpg";
   canWidth=can1.width;
   canHeight=can1.height;
   ane=new aneObj();
   ane.init();
   fruit=new fruitObj();
   fruit.init();
   mom=new momObj();
   mom.init();
   baby=new babyObj();
   baby.init();
   mx=canWidth*0.5;
   my=canHeight*0.5;
   for(var i=0;i<8;i++)
   {
	   babyTail[i]=new Image();
	   babyTail[i].src="./src/babyTail"+i+".png";
   }
   for(var i=0;i<2;i++)
   {
	   babyEye[i]=new Image();
	   babyEye[i].src="./src/babyEye"+i+".png";
   }
   for(var i=0;i<20;i++)
	{
		babyBody[i]=new Image();
		babyBody[i].src="./src/babyFade"+i+".png";
	}
	//mom
  for(var i=0;i<8;i++)
  {
	  momTail[i]=new Image();
	  momTail[i].src="./src/bigTail"+i+".png";
  }
  for(var i=0;i<2;i++)
  {
	  momEye[i]=new Image();
	  momEye[i].src="./src/bigEye"+i+".png";
  }
  data=new dataObj();
  for(var i=0;i<8;i++)
  {
	  momBodyOrange[i]=new Image();
	  momBodyBlue[i]=new Image();
	  momBodyOrange[i].src="./src/bigSwim"+i+".png";
	  momBodyBlue[i].src="./src/bigSwimBlue"+i+".png";  
	  
  }
  ctx1.font="30px Verdana";
  ctx1.textAlign="center";
  wave=new waveObj();
  wave.init();
  halo=new haloObj();
  halo.init();
  for(var i=0;i<7;i++)
  {
	  dustPic[i]=new Image();
	  dustPic[i].src="./src/dust"+i+".png";
  }
  dust=new dustObj();
  dust.init();
  
   
}
function gameloop(){//每一帧
  window.requestAnimFrame(gameloop);//间隔多长时间绘制下一帧，比定时器更科学，但是时间间隔是不确定的
  var now=Date.now();
  lastTime=now;
  deltaTime=now-lastTime;
  if(deltaTime>40)deltaTime=40;
  drawBackground();
  ane.draw();
  fruit.draw();
  fruitMonitor()
  ctx1.clearRect(0,0,canWidth,canHeight);
  mom.draw();
  momFruitsCollision();
  momBabyCollision(); 
  baby.draw();
  data.draw();
  wave.draw();
  halo.draw();
  dust.draw();
}
function onMouseMove(e){
	if(!data.gameOver)
	{
		if(e.offSetX||e.layerX)
	 {
		mx=e.offSetX==undefined?e.layerX:e.offSetX;
		my=e.offSetY==undefined?e.layerY:e.offSetY;//获取鼠标位置
	  }
	}
	
}