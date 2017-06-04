$(document).ready(function() {
  //网站导航“我的当当”下拉树形菜单特效
  $(".my-dd").hover(function() {//鼠标移来时
            $(this).children("ul").stop().slideDown();
          }, function() {//鼠标移走时
            $(this).children("ul").stop().slideUp();
          });
  //部分刷新切换产品页
  $("#shouye1").click(function(){
      htmlobj=$.ajax({url:"./首页1.html",async:false});
      $(".dd-refresh").html(htmlobj.responseText);
  });
  //部分刷新切换购物车
  $("#gouwuche1").click(function(){
      htmlobj=$.ajax({url:"./购物车页面.html",async:false});
      $(".dd-refresh").html(htmlobj.responseText);
  });
  /*跳转登录页面*/
  $("#denglu").click(function(){
     window.location.href = "登录页.html";
  });
  /*跳转注册页面*/
  $("#zhuce").click(function(){
     window.location.href = "注册页.html";
  });
  /*跳转购物车页面*/
  $("#gouwuche").click(function(){
     window.location.href = "购物车页面.html";
  });
});