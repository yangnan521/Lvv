var express = require('express');
var router = express.Router();
var goodslistsdb = require("../db/goodlistsdb");


router.get('/', function(req, res, next) {
    //1、接收前端传来的数据（goodsid）
    const goodsid = req.query.goodsid;

    //1、链接数据库，查询所有的商品
    goodslistsdb.find({"goodsid":goodsid},function (data) {
       //2、用查询到的数据渲染模板，并响应给前端
        res.render("goodsdetail",{"title":"商品详情","goodsdetail":data[0]})

    });
});

module.exports = router;
