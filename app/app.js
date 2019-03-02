const express = require("express");
const pool = require("./pool");
var app = express();
app.listen(3001,function(){
	console.log(`服务器创建成功!`);
});
app.use(express.static("public"));

//功能一 : 轮播图
//http://127.0.0.1:3001/imglist
app.get("/imglist",(req,res)=>{
	var list = [
	{
		id:1,img_url:"http://127.0.0.1:3001/img/big1.jpg"
	},
	{
		id:2,img_url:"http://127.0.0.1:3001/img/big2.jpg"
	}
 ];
 res.send(list);
});


//功能二 : 楼层图片
//http://127.0.0.1:3001/Floors
app.get("/Floors",(req,res)=>{
	var Floor = [
	{
		id:1,img_url:"http://127.0.0.1:3001/img/1L.png"
	},
	{
		id:2,img_url:"http://127.0.0.1:3001/img/2L.png"
	},
	{
		id:3,img_url:"http://127.0.0.1:3001/img/3L.png"
	},
	{
		id:4,img_url:"http://127.0.0.1:3001/img/4L.png"
	}
 ];
 res.send(Floor);
});

//功能三: 滑动1L的图片
//http://127.0.0.1:3001/slides
app.get("/slides",(req,res)=>{
	var slide = [
		{
			id:1,img_url:"http://127.0.0.1:3001/img/1.jpg",title:'可伸缩电能光剑',price:'89.00'
		},
		{
			id:2,img_url:"http://127.0.0.1:3001/img/2.jpg",title:'万代 1/72 反抗军战机',price:'108.00'
		},
		{
			id:3,img_url:"http://127.0.0.1:3001/img/3.jpg",title:'万代 钛战机',price:'108.00'
		},
		{
			id:4,img_url:"http://127.0.0.1:3001/img/4.jpg",title:'反抗军战机模型',price:'239.00'
		},
		{
			id:5,img_url:"http://127.0.0.1:3001/img/5.jpg",title:'小大圣布偶',price:'55.00'
		},
		{
			id:6,img_url:"http://127.0.0.1:3001/img/6.jpg",title:'罗宾15周年抱枕',price:'73.00'
		},
		{
			id:7,img_url:"http://127.0.0.1:3001/img/7.png",title:'小黄人抱枕靠枕 午休必备',price:'199.00'
		}
	];
	res.send(slide);
});

/* 2L 显示图片 */
app.get("/times",(req,res)=>{
	var time = [
		{id:1,img_url:"http://127.0.0.1:3001/img/21.jpg",title:'HT 蝙蝠侠&蝙蝠车Q',price:'440.00'},
		{id:2,img_url:"http://127.0.0.1:3001/img/22.jpg",title:'GEM桂小太郎手办',price:'650.00'}
	];
	res.send(time);
});
app.get("/worths",(req,res)=>{
	var worth = [
		{id:1,img_url:"http://127.0.0.1:3001/img/221.jpg",title:'战狼2军事风格多功能',price:'258.90'},
		{id:1,img_url:"http://127.0.0.1:3001/img/222.jpg",title:'Alter 绀菊 手办',price:'710.00'},
		{id:1,img_url:"http://127.0.0.1:3001/img/223.jpg",title:'秋山澪Stronger手办',price:'630.00'},
		{id:1,img_url:"http://127.0.0.1:3001/img/224.jpg",title:'岛村卯月良笑社手办',price:'665.90'},
		{id:1,img_url:"http://127.0.0.1:3001/img/225.jpg",title:'寿屋 凉风青叶',price:'494.00'},
		{id:1,img_url:"http://127.0.0.1:3001/img/226.jpg",title:'莉薇·柯莱特',price:'675.00'}
	];
	res.send(worth);
});

/* 3l 滑动 */
	app.get("/Fillings",(req,res)=>{
		var Filling = [
			{id:1,img_url:"http://127.0.0.1:3001/img/31.jpg",title:'Stronger 魔法少女智乃 手办',price:'699.00'},
			{id:2,img_url:"http://127.0.0.1:3001/img/32.jpg",title:'GSC Saber&摩托车 手办',price:'777.00'},
			{id:3,img_url:"http://127.0.0.1:3001/img/33.jpg",title:'GSC Saber&摩托车 手办',price:'799.00'},
			{id:4,img_url:"http://127.0.0.1:3001/img/34.jpg",title:'初音未来橙色MaxFactory手办',price:'799.00'},
			{id:5,img_url:"http://127.0.0.1:3001/img/35.jpg",title:'初音未来橙色MaxFactory手办',price:'780.00'}
		];
		res.send(Filling);
	})

/* 4l */
	app.get("/Kits",(req,res)=>{
		var Kit = [
			{id:1,img_url:"http://127.0.0.1:3001/img/321.jpg",title:'漫骆驼官方出品 少司',price:'628.00'},
			{id:2,img_url:"http://127.0.0.1:3001/img/322.jpg",title:'myethos 逸仙手办',price:'648.00'}
		];
		res.send(Kit);
	});
	app.get("/Garages",(req,res)=>{
		var Garage = [
			{id:1,img_url:"http://127.0.0.1:3001/img/41.jpg",title:'镜音连',price:'688.00'},
			{id:2,img_url:"http://127.0.0.1:3001/img/42.jpg",title:'镜音铃',price:'679.00'},
			{id:3,img_url:"http://127.0.0.1:3001/img/43.jpg",title:'忍野忍草帽SEGA景品',price:'85.00'},
			{id:4,img_url:"http://127.0.0.1:3001/img/44.jpg",title:'GSC 初音未来黏土人',price:'169.00'},
			{id:5,img_url:"http://127.0.0.1:3001/img/45.jpg",title:'站立版Saber新娘版SEGA景品',price:'95.00'}
		];
		res.send(Garage);
	});