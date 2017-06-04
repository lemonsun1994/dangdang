var CITYS = { "请选择省/城市":["请选择城市/地区"],
"北京": ["东城区","西城区","朝阳区","海淀区","宣武区","丰台区","怀柔","延庆","房山","通州"], 
"上海": ["浦东","浦西"], 
"天津": ["河东区", "河北区","河西区","南开区","红桥区","和平区","津南区","滨海新区","静海区","宁武区","蓟州区","东丽区","西青区","宝坻区"], 
"重庆": ["重庆", "涪陵", "江津", "巫山"], 
"河北": ["石家庄", "张家口", "承德", "秦皇岛", "唐山", "廊坊", "保定", "沧州", "衡水", "邢台", "邯郸", "张北", "蔚县", "丰宁", "围场", "怀来", "遵化", "青龙", "坝县", "乐亭", "饶阳", "黄骅", "南宫"], 
"山西": ["太原", "大同", "朔州", "阳泉", "长治", "晋城", "忻州", "晋中", "临汾", "运城", "吕梁", "右玉", "河曲", "五台山", "五寨", "兴县", "原平", "离石", "榆社", "隰县", "介休", "候马", "阳城"], 
"内蒙古": ["呼和浩特", "包头", "乌海", "赤峰", "通辽", "呼伦贝尔", "鄂尔多斯", "乌兰察布", "巴彦淖尔", "兴安盟", "锡林郭勒盟", "阿拉善盟", "额尔古纳右旗", "图里河", "满州里", "海拉尔", "小二沟", "新巴尔虎右旗", "新巴尔虎左旗", "博克图", "扎兰屯", "科前旗阿尔山", "索轮", "乌兰浩特", "东乌珠穆沁旗", "额济纳旗", "拐子湖", "巴音毛道", "阿拉善右旗", "二连浩特", "那仁宝力格", "满都拉", "阿巴嘎旗", "苏尼特左旗", "海力素", "朱日和", "乌拉特中旗", "百灵庙", "四子王旗", "化德", "集宁", "吉兰太", "临河", "鄂托克旗", "东胜", "伊金霍洛旗", "阿拉善左旗", "西乌珠穆沁旗", "扎鲁特旗", "巴林左旗", "锡林浩特", "林西", "开鲁", "多伦", "翁牛特旗", "宝国图"], 
"辽宁": ["沈阳", "朝阳", "阜新", "铁岭", "抚顺", "本溪", "辽阳", "鞍山", "丹东", "大连", "营口", "盘锦", "锦州", "葫芦岛", "彰武", "开原", "清原", "叶柏寿", "新民", "黑山", "章党", "桓仁", "绥中", "兴城", "岫岩", "宽甸", "瓦房店", "庄河"], 
"吉林": ["长春", "白城", "松原", "吉林", "四平", "辽源", "通化", "白山", "延吉", "乾安", "前郭尔罗斯", "通榆", "长岭", "三岔河", "双辽", "蛟河", "敦化", "汪清", "梅河口", "桦甸", "靖宇", "东岗", "松江", "临江", "集安", "长白"], 
"黑龙江": ["哈尔滨", "齐齐哈尔", "黑河", "大庆", "伊春", "鹤岗", "佳木斯", "双鸭山", "七台河", "鸡西", "牡丹江", "绥化", "大兴安岭", "漠河", "塔河", "新林", "呼玛", "嫩江", "孙吴", "北安", "克山", "富裕", "海伦", "明水", "富锦", "泰来", "安达", "铁力", "依兰", "宝清", "肇州", "通河", "尚志", "虎林", "绥芬河"], 
"江苏": ["南京", "徐州", "连云港", "宿迁", "淮安", "盐城", "扬州", "泰州", "南通", "镇江", "常州", "无锡", "苏州", "赣榆", "盱眙", "淮阴", "射阳", "高邮", "东台", "吕泗", "溧阳", "吴县东山"], 
"浙江": ["杭州", "湖州", "嘉兴", "舟山", "宁波", "绍兴", "衢州", "金华", "台州", "温州", "丽水", "平湖", "慈溪", "嵊泗", "定海", "嵊县", "鄞县", "龙泉", "洪家", "玉环"], 
"安徽": ["合肥", "宿州", "淮北", "阜阳", "亳州", "蚌埠", "淮南", "滁州", "马鞍山", "芜湖", "铜陵", "安庆", "黄山", "六安", "巢湖", "池州", "宣城", "砀山", "宿县", "寿县", "霍山", "桐城", "芜湖县", "宁国", "屯溪"],
"福建": ["福州", "南平", "三明", "莆田", "泉州", "厦门", "漳州", "龙岩", "宁德", "邵武", "武夷山市", "浦城", "建瓯", "福鼎", "泰宁", "长汀", "上杭", "永安", "屏南", "平潭", "崇武", "东山"], 
"江西": ["南昌", "九江", "景德镇", "鹰潭", "新余", "萍乡", "赣州", "上饶", "抚州", "宜春", "吉安", "修水", "宁冈", "遂川", "庐山", "波阳", "樟树", "贵溪", "玉山", "南城", "广昌", "寻乌"], 
"山东": ["济南", "聊城", "德州", "东营", "淄博", "潍坊", "烟台", "威海", "青岛", "日照", "临沂", "枣庄", "济宁", "泰安", "莱芜", "滨州", "菏泽", "惠民县", "羊角沟", "长岛", "龙口", "成山头", "朝城", "泰山", "沂源", "莱阳", "海阳", "石岛", "兖州", "莒县"], 
"河南": ["郑州", "三门峡", "洛阳", "焦作", "新乡", "鹤壁", "安阳", "濮阳", "开封", "商丘", "许昌", "漯河", "平顶山", "南阳", "信阳", "周口", "驻马店", "济源", "卢氏", "孟津", "栾川", "西峡", "宝丰", "西华", "固始"], 
"湖北": ["武汉", "十堰", "襄樊", "荆门", "孝感", "黄冈", "鄂州", "黄石", "咸宁", "荆州", "宜昌", "随州", "仙桃", "天门", "潜江", "神农架", "恩施", "郧西", "房县", "老河口", "枣阳", "巴东", "钟祥", "广水", "麻城", "五峰", "来风", "嘉鱼", "英山"], 
"湖南": ["长沙", "张家界", "常德", "益阳", "岳阳", "株洲", "湘潭", "衡阳", "郴州", "永州", "邵阳", "怀化", "娄底", "吉首", "桑植", "石门", "南县", "沅陵", "安化", "沅江", "平江", "芷江", "双峰", "南岳", "通道", "武冈", "零陵", "常宁", "道县"], 
"广东": ["广州", "清远", "韶关", "河源", "梅州", "潮州", "汕头", "揭阳", "汕尾", "惠州", "东莞", "深圳", "珠海", "中山", "江门", "佛山", "肇庆", "云浮", "阳江", "茂名", "湛江", "南雄", "连县", "佛冈", "连平", "广宁", "增城", "五华", "惠来", "南澳", "信宜", "罗定", "台山", "电白", "徐闻"], 
"广西": ["南宁", "桂林", "柳州", "梧州", "贵港", "玉林", "钦州", "北海", "防城港", "崇左", "百色", "河池", "来宾", "贺州", "融安", "凤山", "都安", "蒙山", "那坡", "靖西", "平果", "桂平", "龙州", "灵山", "东兴", "涠洲岛"], 
"海南": ["海口", "三亚", "文昌", "琼海", "万宁", "东方", "澄迈", "定安", "儋县", "琼中", "陵水", "西沙", "昌江", "乐东", "白沙", "临高"], 
"四川": ["成都", "广元", "绵阳", "德阳", "南充", "广安", "遂宁", "内江", "乐山", "自贡", "泸州", "宜宾", "攀枝花", "巴中", "达川", "资阳", "眉山", "雅安", "阿坝", "甘孜", "西昌", "石渠", "若尔盖", "德格", "色达", "道孚", "马尔康", "红原", "小金", "松潘", "都江堰", "平武", "巴塘", "新龙", "理塘", "稻城", "康定", "峨眉山", "木里", "九龙", "越西", "昭觉", "雷波", "盐源", "会理", "万源", "阆中", "奉节", "梁平", "万县市", "叙永", "酉阳"], 
"贵州": ["贵阳", "六盘水", "遵义", "安顺", "毕节", "铜仁", "凯里", "都匀", "兴义", "威宁", "盘县", "桐梓", "习水", "湄潭", "思南", "黔西", "三穗", "兴仁", "望谟", "罗甸", "独山", "榕江"], 
"云南": ["昆明", "曲靖", "玉溪", "保山", "昭通", "丽江", "思茅", "临沧", "德宏", "怒江", "迪庆", "大理", "楚雄", "红河", "文山州", "德钦", "贡山", "中甸", "维西", "华坪", "会泽", "腾冲", "元谋", "沾益", "瑞丽", "景东", "泸西", "耿马", "澜沧", "景洪", "元江", "勐腊", "江城", "蒙自", "屏边", "广南", "勐海"], 
"西藏": ["拉萨", "那曲", "昌都", "林芝", "山南", "日喀则", "阿里", "狮泉河", "改则", "班戈", "安多", "普兰", "申扎", "当雄", "拉孜", "尼木", "泽当", "聂拉木", "定日", "江孜", "错那", "隆子", "帕里", "索县", "丁青", "嘉黎", "洛隆", "波密", "左贡", "察隅"], 
"陕西": ["西安", "延安", "铜川", "渭南", "咸阳", "宝鸡", "汉中", "榆林", "安康", "商洛", "定边", "吴旗", "横山", "绥德", "长武", "洛川", "武功", "华山", "略阳", "佛坪", "镇安", "石泉"], 
"甘肃": ["兰州", "嘉峪关", "金昌", "白银", "天水", "武威", "酒泉", "张掖", "庆阳", "安西", "陇南", "临夏", "甘南", "马鬃山", "敦煌", "玉门镇", "金塔", "高台", "山丹", "永昌", "民勤", "景泰", "靖远", "榆中", "临洮", "环县", "平凉", "西峰镇", "玛曲", "夏河合作", "岷县", "定西"], 
"青海": ["西宁", "海东", "海北", "海南", "黄南", "果洛", "玉树", "海西", "茫崖", "冷湖", "祁连", "大柴旦", "德令哈", "刚察", "门源", "格尔木", "都兰", "共和县", "贵德", "民和", "兴海", "同德", "同仁", "杂多", "曲麻莱", "玛多", "清水河", "达日", "河南", "久治", "囊谦", "班玛"], 
"宁夏": ["银川", "石嘴山", "吴忠", "固原", "中卫", "惠农", "陶乐", "中宁", "盐池", "海源", "同心", "西吉"], 
"新疆": ["乌鲁木齐", "克拉玛依", "石河子", "阿拉尔", "喀什", "阿克苏", "和田", "吐鲁番", "哈密", "克孜勒", "博尔塔拉", "昌吉", "库尔勒", "伊犁", "塔城", "阿勒泰", "哈巴河", "吉木乃", "福海", "富蕴", "和布克赛尔", "青河", "阿拉山口", "托里", "北塔山", "温泉", "精河", "乌苏", "蔡家湖", "奇台", "昭苏", "巴仑台", "达板城", "七角井", "库米什", "巴音布鲁克", "焉耆", "拜城", "轮台", "库车", "吐尔尕特", "乌恰", "阿合奇", "巴楚", "柯坪", "铁干里克", "若羌", "塔什库尔干", "莎车", "皮山", "民丰", "且末", "于田", "巴里坤", "伊吾", "伊宁"], 
"香港": ["香港"], 
"澳门": ["澳门"], 
"台湾": ["台北", "台中", "高雄"] };
$(document).ready(function() {
  /*购物车页面*/
  var num = 1; 
  $(".cart-title > img").click(function(){ 
  	/*箭头旋转*/ 
     $(".cart-title > img").rotate(180*num);
     num = ~num; 
     /*商品显示与隐藏*/
     if(num == 1)
	 	$(".cart-content").stop().slideDown();
	 else
	 	$(".cart-content").stop().slideUp();
  }); 
  
  /*购物车划价*/
  function setTotal() {  
      var s1 = 0; //总积分 
      var s2 = 0; //商品总额
      var s3 = 0;//原应付总金额
      var s4 = 0; //共节省总金额
      $(".bought .bought-trade").each(function() {  
          var q = $(this).find('.quantity input').val();  
          var c = $(this).find('li[class*=credit]').text(); 
          var p = $(this).find('.paid span').text();
          var o = $(this).find('.original span').text();
          if(parseInt(q)==""||undefined||null||isNaN(q)||isNaN(parseInt(q))){  
              q=0;  
          }  
          s1 += parseInt(q) * parseFloat(c);  
          s2 += parseInt(q) * parseFloat(p); 
          s3 += parseInt(q) * parseFloat(o); 
      });  
      $("#total_credit").html(s1); 
      $("#total_paid").html("￥"+s2.toFixed(2));  
      s4 = s3-s2;
      $("#total_original").html("￥"+s4.toFixed(2));
  }  
  setTotal();  
  /*商品数量变动后价格变动*/
  $(".quantity input").blur(function(){setTotal();});
  /*删除商品，并变动价格*/
  $("#delete a").click(function(){
    $("#mask").css('display', 'block');
    $("#box1").css('display', 'block');
    $(this).parent().parent().addClass('commodity-del');
    $(this).parent().parent().siblings().removeClass('commodity-del');
  });
  $("#fff").click(function(){
    $("#mask").css('display', 'none');
    $("#box1").css('display', 'none');
  });
  $("#ttt").click(function(){
    $("#mask").css('display', 'none');
    $("#box1").css('display', 'none');
    $(".commodity-del").remove();
    setTotal();
  });
  $("#box1 button").hover(function() {//鼠标移来时
         $(this).css("background","#BDBDBD");
       }, function() {//鼠标移走时
         $(this).css("background","#EAEAEA");
       });



  /*注册页*/
  var ret1 = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  var ret2 = /^[a-zA-Z0-9_]{4,20}$/;
  var ret3 = /^[a-zA-Z0-9_]{6,20}$/;
  /*按键变换(注册页)*/
  $("#register_icon1").hover(function() {//鼠标移来时
         $(this).css("background","url(./images/register_btn_over.gif)");
       }, function() {//鼠标移走时
         $(this).css("background","url(./images/register_btn_out.gif)");
       });
  /*邮箱验证*/
  $("#email_input").focus(function(){
     if(!ret1.test($(this).val())){
        $(this).css("background","#EFFFD2");/*背景颜色变换*/
        $("#email_att").removeClass()/*提示语出现*/
                       .addClass('email-att')
                       .html("此邮箱将是您登录当当网的账号，并将用来接收验证邮件");
     }
  });
  $("#email_input").blur(function(){
     var str1 = $("#email_input").val();
     if(ret1.test(str1)){
       $("#email_att").removeClass().addClass('bingo').html("");
     }
     else if(str1 == ""){
       $(this).css("background","#FEF3C1");
       $("#email_att").removeClass().addClass('name-att').html("电子邮件为必填项，请输入email地址！");
     }
     else{
       $(this).css("background","#FEF3C1");
       $("#email_att").removeClass().addClass('name-att').html("电子邮件格式不正确，请重新输入！");
     }
  });
  /*昵称验证*/
  $("#name_input").focus(function(){
      if(!ret2.test($(this).val())){
        $(this).css("background","#EFFFD2");/*背景颜色变换*/
        $("#name_att").removeClass()/*提示语出现*/
                      .addClass('email-att')
                      .html("昵称请用大小写英文字母、数字组成，长度为4-20字符");
      }
  });
  $("#name_input").blur(function(){
     var str2 = $("#name_input").val();
     if(ret2.test(str2)){
       $("#name_att").removeClass().addClass('bingo').html("");
     }
     else if(str2 == ""){
       $(this).css("background","#FEF3C1");
       $("#name_att").removeClass().addClass('name-att').html("昵称为必填项，请输入您的昵称！");
     }
     else{
       $(this).css("background","#FEF3C1");
       $("#name_att").removeClass().addClass('name-att')
                     .html("昵称格式错误，请用大小写英文字母、数字，长度4-20字符");
     }
  });
  /*密码验证*/
  $("#password_input").focus(function(){
      if(!ret3.test($(this).val())) {
         $(this).css("background","#EFFFD2");/*背景颜色变换*/
         $("#password_att").removeClass()/*提示语出现*/
                           .addClass('email-att')
                           .html("密码请用大小写英文字母、数字组成，长度为6-20字符");
      }
  });
  $("#password_input").blur(function(){
     var str3 = $("#password_input").val();
     if(ret3.test(str3)){
       $("#password_att").removeClass().addClass('bingo').html("");
     }
     else if(str3 == ""){
       $(this).css("background","#FEF3C1");
       $("#password_att").removeClass().addClass('name-att').html("密码为必填项，请输入您的密码！");
     }
     else{
       $(this).css("background","#FEF3C1");
       $("#password_att").removeClass().addClass('name-att')
                         .html("密码格式错误，请用大小写英文字母、数字，长度6-20字符");
     }
  });
  /*重复密码验证*/
  $("#password_input1").focus(function(){
     if($("#password_att1").prop("className")!="bingo"){
         $(this).css("background","#EFFFD2");/*背景颜色变换*/
         $("#password_att1").removeClass()/*提示语出现*/
                            .addClass('email-att')
                            .html("请再次输入密码~~");
     }
  }); 
  $("#password_input1").blur(function(){
    var str3 = $("#password_input").val();
    var str4 = $("#password_input1").val();
    if(str4 == ""){
       $(this).css("background","#FEF3C1");
       $("#password_att1").removeClass().addClass('name-att').html("请再次输入您的密码！");
     }
     else if(str4 != str3){
      $(this).css("background","#FEF3C1");
      $("#password_att1").removeClass().addClass('name-att').html("两次输入密码不一致，请重新输入！");
    }
    else
      $("#password_att1").removeClass().addClass('bingo').html("");
  });
  /*提交*/
  $("#register_icon1").click(function() {
    var str1 = $("#email_input").val();
    var str2 = $("#name_input").val();
    var str3 = $("#password_input").val();
    var str4 = $("#password_input1").val();
    if ((str1 == "")||(str2 == "")||(str3 == "")||(str4 == "")) {
       alert("请先完成注册表单！");
    }
    else{
      window.location.href = "当当图书网.html";
    }
  });
  /*省市选择*/
  //初始化所有的省的数据
  $.each(CITYS,function(key, value){
    var $option = $("<option></option>");
    $option.text(key);//获取当前省的名字
    $("#province").append($option);
  });
  //当省的数据发生改变的时候执行 加载市的数据
  $("#province").on("change",function(){
    //拿到当前省的名字
    var pro = $("#province option:selected").text();
    //清空原有的city数据
    $("#city").empty();
    //根据省名，拿到所有的城市，然后根据城市创建option添加到cityselect中
    $.each(CITYS[pro],function(i, value){
      $("#city").append("<option>"+ value +"</option>");
    });
  });
  //初始化城市数据,触发#province的change属性
  $("#province").triggerHandler('change');



  /*登录页面跳转注册页面*/
  $("#login_icon2").click(function(){
     window.location.href = "注册页.html";
  });
  /*跳转首页页面*/
  $("#shouye").click(function(){
     window.location.href = "当当图书网.html";
  });
});




window.onload = function(){
  function $(y){return document.getElementById(y);}
  /*按键变换(登录页面)*/
  $("login_icon1").onmousedown = function(event){
    var event = event || window.event;
    $("login_icon1").style.backgroundPosition = (-78) +"px"+" "+(-30)+"px";
  }
  $("login_icon1").onmouseup = function(event){
    var event = event || window.event;
    $("login_icon1").style.backgroundPosition = (0) +"px"+" "+(-30)+"px";
  }
  $("login_icon2").onmousedown = function(event){
    var event = event || window.event;
    $("login_icon2").style.backgroundPosition = (-144) +"px"+" "+(-3)+"px";
  }
  $("login_icon2").onmouseup = function(event){
    var event = event || window.event;
    $("login_icon2").style.backgroundPosition = (0) +"px"+" "+(-3)+"px";
  }
}