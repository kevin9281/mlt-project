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
			id:7,img_url:"http://127.0.0.1:3001/img/7.jpg",title:'小黄人抱枕靠枕 午休必备',price:'199.00'
		}
	];
	res.send(slide);
})