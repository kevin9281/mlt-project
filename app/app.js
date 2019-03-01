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
			id:1,img_url:"http://127.0.0.1:3001/img/1.jpg"
		},
		{
			id:2,img_url:"http://127.0.0.1:3001/img/2.jpg"
		},
		{
			id:3,img_url:"http://127.0.0.1:3001/img/3.jpg"
		},
		{
			id:4,img_url:"http://127.0.0.1:3001/img/4.jpg"
		},
		{
			id:5,img_url:"http://127.0.0.1:3001/img/5.jpg"
		},
		{
			id:6,img_url:"http://127.0.0.1:3001/img/6.jpg"
		},
		{
			id:7,img_url:"http://127.0.0.1:3001/img/7.jpg"
		}
	];
	res.send(slide);
})