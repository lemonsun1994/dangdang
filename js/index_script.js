window.onload = function(){
	function $(y){return document.getElementById(y);}
  /*关闭广告*/
  $("close_ad").onclick = function(){$("ad").style.display = "none";}
	/*动态生成图片号码*/
    var num = document.createElement("ul");
    num.setAttribute("class", "fr num");
    $("scroll").appendChild(num);
    var lis = $("pic").children;
    for (var i = 0; i < lis.length; i++) {
        var liss = document.createElement("li");
        liss.innerHTML = i+1;
        num.appendChild(liss);
      };
    /*图片轮播*/
    var num1 = 0;
    var timer1 = null;
    var temp = num1;
    var keychild = num.children;
    lis[0].style.zIndex = "2";
    keychild[0].style.backgroundColor = "#FA8654";
    timer1 = setInterval(func1, 1000);
    function func1(){
      if(num1 != temp) num1 = temp;
      num1++;
      num1 > 5 ? num1 = 0 : num1;
      for (var j = 0; j < lis.length; j++) {
          lis[j].style.zIndex = "1";
          keychild[j].style.backgroundColor = "#EFEFF0";
      };
      lis[num1].style.zIndex = "2";
      keychild[num1].style.backgroundColor = "#FA8654";
      temp = num1;
    }
    $("pic").onmouseover = function(){
      clearInterval(timer1);
    }
    $("pic").onmouseout = function(){
      clearInterval(timer1);
      timer1 = setInterval(func1,1000);
    }
    for (var i = 0; i < keychild.length; i++) {
      keychild[i].index = i;
      keychild[i].onmouseover = function(){
        clearInterval(timer1);
        for (var j = 0; j < keychild.length; j++) {
          lis[j].style.zIndex = "1";
          keychild[j].style.backgroundColor = "#EFEFF0";
        };
        lis[this.index].style.zIndex = "2";
        keychild[this.index].style.backgroundColor = "#FA8654";
        temp = this.index;
      }
      keychild[i].onmouseout = function(){
        clearInterval(timer1);
        timer1 = setInterval(func1,1000);
      }
    }
  /*书讯自动无缝滚动*/
  var num2 = 0;
  var timer2 = null;
  timer2 = setInterval(autoplay, 50);
  function autoplay(){
    num2--;
    num2 <= -260 ? num2 = 0 : num2;
    $("gundong").style.top = num2 +"px";
  }
  $("massage_scroll").onmouseover = function(){
    clearInterval(timer2);
  }
  $("massage_scroll").onmouseout = function(){
    timer2 = setInterval(autoplay, 50);
  }

}

 /*tab栏切换——JQuery*/
$(document).ready(function() {
  //切换图片
  $(".more ul > li").mouseenter(function() {
    $(this).addClass('more-selected').siblings().removeClass('more-selected');
    $(".book-show")
             .eq($(this).index())
             .addClass('show-selected')
             .siblings()
             .removeClass('show-selected');
  });

  //部分刷新切换产品页
  $("#pro_fiction").click(function(){
      htmlobj=$.ajax({url:"./%E4%BA%A7%E5%93%81%E9%A1%B5.html",async:false});
      $(".dd-refresh").html(htmlobj.responseText);
  });
});