// JavaScript Document
//大鱼和果实碰撞
//判断大鱼和果实的距离
function momFruitsCollision()
{
	if(!data.gameOver)
	{
		for(var i=0;i<fruit.num;i++)
	  {
		if(fruit.alive[i])
		{
			var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);   
			if(l<900)
			{
				//fruit被吃掉
				fruit.dead(i);
				data.fruitNum++;
				mom.momBodyCount++;
				if(mom.momBodyCount>7)
				{
					mom.momBodyCount=7;
				}
				if(fruit.fruitType[i]=="blue")//blue色果实分数加倍
				{
					data.double=2;
				}
				wave.born(fruit.x[i],fruit.y[i]);
			}
		}
	}
  }
	
}
//大鱼碰撞小鱼
function momBabyCollision()
{
	if(data.fruitNum>0&&!data.gameOver)
	{
		var l=calLength2(mom.x,mom.y,baby.x,baby.y);
	    if(l<900)
			{
				//baby recover
				baby.babyBodyCount=0;
				mom.momBodyCount=0;
				//更新分数
				data.addScore();
				halo.born(baby.x,baby.y);;
			}
	}
	
	
}