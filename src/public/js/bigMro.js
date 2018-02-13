$(function(){
    $(".shade").hover(function(){
        $(".move").show();
        $(".bimg").show();
        },function(){
        $(".move").hide();
        $(".bimg").hide();
            });
    $(".shade").mousemove(function(e){
        var l=e.clientX;
        var t=e.clientY;

        var _top=t-$("#box").offset().top-$(".move").height()/2+"px";
        var _left=l-$("#box").offset().left-$(".move").width()/2+"px";
        
        //不让从上面和下面出去
        if(parseInt(_top)<0){
            _top=0+'px';
            }else if(parseInt(_top)>parseInt($("#box").height()-$(".move").height())){
                _top=parseInt($("#box").height()-$(".move").height())+"px";
                }
                
        //不让从两边出去
        if(parseInt(_left)<0){
            _left=0+"px";
            }else if(parseInt(_left)>parseInt($("#box").width()-$(".move").width())){_left=parseInt($("#box").width()-$(".move").width())+'px';}
        
        $(".move").css({top:_top,left:_left});
        
        //小图可滑动的比例
        var hd_x=parseInt(_left)/parseInt($("#box").width()-$(".move").width());
        var hd_y=parseInt(_top)/parseInt($("#box").height()-$(".move").height());
        
        //大图对应的top left
        var bm_left=($(".bimg img").width()-$(".bimg").width())*hd_x;
        var bm_top=($(".bimg img").height()-$(".bimg").height())*hd_y;
        $(".bimg img").css({top:-bm_top,left:-bm_left});
        
        });  

 var imgs=$("#bottomBox img");
     for(var i=0;i<imgs.length;i++){
      var t=$(imgs[i]);
      t.mouseover(function(){
      $(".simg img").attr("src", this.src);
      $(".bimg img").attr("src", this.src);
 });
}

});
