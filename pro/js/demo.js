// 生成hot商品
var data = {"code":0,"data":[{"href":"http://www.mi.com/hongmi3s/","imgSrc":"//i3.mifile.cn/a4/cms_14714174043152_pIFZz.jpg"},{"href":"http://www.mi.com/note3/pro/","imgSrc":"//i3.mifile.cn/a4/cms_1471312943084_IaMBd.jpg"},{"href":"http://www.mi.com/mimax/","imgSrc":"//i3.mifile.cn/a4/cms_14714902150589_bIuKc.jpg"},{"href":"http://www.mi.com/redmipro/","imgSrc":"//i3.mifile.cn/a4/cms_14713130022153_oEtIM.jpg"},{"href":"http://www.mi.com/hongmi3x/","imgSrc":"//i3.mifile.cn/a4/cms_14714174273893_phFJr.jpg"},{"href":"http://www.mi.com/hezi3s/","imgSrc":"//i3.mifile.cn/a4/cms_14712692142358_IkJSP.jpg"},{"href":"http://www.mi.com/miwifi3c/","imgSrc":"//i3.mifile.cn/a4/cms_14712692235847_GraJi.jpg"},{"href":"http://www.mi.com/mibicycle/","imgSrc":"//i3.mifile.cn/a4/cms_14714192998743_NWgai.jpg"},{"href":"http://www.mi.com/shouhuan2/","imgSrc":"//i3.mifile.cn/a4/cms_14712692416984_yvahr.jpg"},{"href":"http://www.mi.com/water/","imgSrc":"//i3.mifile.cn/a4/cms_14712692520522_IThDy.jpg"},{"href":"http://www.mi.com/air2/","imgSrc":"//i3.mifile.cn/a4/cms_14712692647959_WDiZE.jpg"},{"href":"http://www.mi.com/xiaoyi/","imgSrc":"//i3.mifile.cn/a4/cms_14712693109837_gznwh.jpg"},{"href":"http://www.mi.com/dianfanbao/","imgSrc":"//i3.mifile.cn/a4/cms_14712692760297_hOPja.jpg"},{"href":"http://www.mi.com/mjsmartlamp/","imgSrc":"//i3.mifile.cn/a4/cms_14712692848748_tpwOe.jpg"},{"href":"http://www.mi.com/mituwatch/","imgSrc":"//i3.mifile.cn/a4/cms_1471270107139_zQiBS.jpg"},{"href":"//www.mi.com/water2/","imgSrc":"http://i3.mifile.cn/a4/31b331c7-454c-4bde-8064-068b80ce0ce2"},{"href":"//www.mi.com/dianyuan10000/","imgSrc":"http://i3.mifile.cn/a4/54581b2c-f88d-4415-9754-af83116346bd"},{"href":"//www.mi.com/capsuleearphone/","imgSrc":"http://i3.mifile.cn/a4/f7da6234-7159-414a-a2ea-8832af89b4f1"},{"href":"//list.mi.com/30","imgSrc":"http://i3.mifile.cn/a4/aa163c95-2890-4227-967c-a05ccec6c4a9"},{"href":"//www.mi.com/powerstrip/","imgSrc":"http://i3.mifile.cn/a4/363032e6-b043-4854-a8cc-8909df918f02"},{"href":"//list.mi.com/22","imgSrc":"http://i3.mifile.cn/a4/ff2a2f99-2c69-4472-acc1-e16322ee79ba"},{"href":"//list.mi.com/23","imgSrc":"http://i3.mifile.cn/a4/c2b64ac9-0b29-4158-a4ab-66aca1720916"}],"message":"success"}
	_data = data.data;
	createHot(_data);
function createHot(){
	for( var i = 0;i < 15; i++){
		$(".hot-ul").append("<li>"
							+"	<a href='"+ _data[i].href +"'>"
							+"		<img src='http://"+ _data[i].imgSrc +"'>"
							+"	</a>"
							+"</li>");
	};
};
// go top
$(window).scroll(function(){
	scrollY > 100 ? $(".fixed").css("display","block") : $(".fixed").css("display","none");
});
$(".fixed").click(function(){
	$("body").animate({scrollTop:"0px"},500);
});

function createBannerImg(){
	for(var i=0;i<5;i++){
		$(".banner").append("<a class='imgs'><img src='../image/banner-"+(i+1)+".jpg' /></a>");
		$(".banner1").find(".dots").append("<a class='dot'></a>");
		index = i;
	};
};
createBannerImg();
// banner 初始化
var	$index = $(".dot"),
	_index,
	a = 0;
$(".banner a:eq(0)").find("img").css("display","block");
$(".dots .dot:eq("+ a +")").addClass("current");
// 点点切换
$(".dots .dot").mouseover(function(){
	for( var i = 0;i<$index.length;i++){
		$(this).addClass("current").siblings().removeClass("current");
		var _index = $(this).index();
	}
	$(".banner a:eq("+ _index + ")").find("img").fadeIn(500).parent().siblings().find("img").fadeOut(500);
	$(".dots .dot:eq("+ _index + ")").addClass("current").siblings().removeClass("current");
	a =_index;
});
// 向右切换
$(".banner1 .banner-r").click(function(){
	a >=4 ? a = 0 : ++a;
	$(".banner a:eq("+ a +")").find("img").fadeIn(500).parent().siblings().find("img").fadeOut(500);
	$(".dots .dot:eq("+ a + ")").addClass("current").siblings().removeClass("current");
}).mouseenter(function(){
	clearInterval(time);
}).mouseleave(function(){
	time = setInterval(timer,2000);
});
// 向左切换
$(".banner1 .banner-l").click(function(){
	a <= 0 ? a = 4 : a--;
	$(".banner a:eq("+ a +")").find("img").fadeIn(500).parent().siblings().find("img").fadeOut(500);
	$(".dots .dot:eq("+ a + ")").addClass("current").siblings().removeClass("current");
}).mouseenter(function(){
	clearInterval(time);
}).mouseleave(function(){
	time = setInterval(timer,2000);
});
// 定时轮播
var timer = function(){
	a++;
	a == 5 ? $(".dots .dot:eq(0)").mouseover() : $(".dots .dot:eq("+ a +")").mouseover();
}
	time = setInterval(timer,2000);
$(".banner").mouseenter(function(){
	clearInterval(time);
}).mouseleave(function(){
	time = setInterval(timer,2000);
});

// store smart
var data = {"code":0,"data":[{"href":"//item.mi.com/1161200059.html","imgSrc":"//i3.mifile.cn/a4/T1rQAgB7Av1RXrhCrK.jpg","title":"小米路由器3","desc":"四天线设计，更安全更稳定","price":"149","flag":"免邮费"},{"href":"//www.mi.com/mibicycle/","imgSrc":"//i3.mifile.cn/a4/2b69b930-a2fd-4d09-a46a-8690cb79f764","title":"电助力折叠自行车","desc":"力矩传感电助力，让城市出行轻松有趣","price":"2999","flag":"新品"},{"href":"//www.mi.com/mitu/","imgSrc":"//i1.mifile.cn/a1/pms_1464615180.86261317!220x220.jpg","title":"米兔智能故事机","desc":"能说会道，宝宝的好玩伴","price":"199","flag":"新品"},{"href":"//www.mi.com/water2/","imgSrc":"//i3.mifile.cn/a4/T1zTK_Bbhv1RXrhCrK.jpg","title":"小米净水器 厨下式","desc":"RO反渗透直出纯净水，包邮包安装","price":"1999","flag":""},{"href":"//www.mi.com/ihealth/","imgSrc":"//i1.mifile.cn/a1/T17FCQByWv1RXrhCrK!220x220.jpg","title":"iHealth智能血压计（蓝牙版）","desc":"送给父母的健康礼物 测血压仅需1步","price":"149","flag":"     享8折 "},{"href":"//www.mi.com/dianfanbao/","imgSrc":"//i1.mifile.cn/a1/T1OVC_ByY_1RXrhCrK!220x220.jpg","title":"米家压力IH电饭煲","desc":"智能烹饪，3L 容量","price":"999","flag":""},{"href":"//item.mi.com/1163200015.html","imgSrc":"//i1.mifile.cn/a1/pms_1470730028.12443689!220x220.jpg","title":"全系智能套装限时款","desc":"开启你的智能生活","price":"292","flag":"     享9折 "},{"href":"//list.mi.com/accessories/tag?id=guangganban","imgSrc":"//i1.mifile.cn/a1/T1HcAQBgDT1RXrhCrK!220x220.jpg","title":"小米手环 光感版","desc":"实时监测心率，科学运动","price":"99","flag":""}],"message":"success"};
	_data = data.data;
	createSmart(_data);
function createSmart(_data){
	for( var i = 0;i < _data.length; i++){
		$(".first-bd").find("ul").append("<li class='item'>"
											+"	<div class='imgs'>"
											+"		<a href='http:"+ _data[i].href +"'><img src='http:"+ _data[i].imgSrc +"'></a>"
											+"	</div>"
											+"	<a class='title'>"+ _data[i].title +"</a>"
											+"	<p class='desc'>"+ _data[i].desc +"</p>"
											+"	<p class='price'>"+ _data[i].price +"元</p>"
											+"	<div class='flag'>"+ _data[i].flag +"</div>"
											+"</li>");
	};
};
// 免邮费新品享八折
var num= [0,1,2,4,6],
	color = ["#ffac13","#83c44e","#83c44e","#e53935","#e53935"];
for(var i=0;i<5;i++){
	$(".store-list").find("ul").find(".flag").eq(num[i]).css("background",color[i]);
}

// 搭配里面的li
var data = {"code":0,"data":[{"href":"//item.mi.com/1160900029.html","imgSrc":"//i2.mifile.cn/a1/T1eSZgBjVT1RXrhCrK.jpg?width=150&height=150","title":"  小米移动电源10000mAh 高配版  ","price":"149","rank":"2万人评价"},{"href":"//item.mi.com/1161200010.html","imgSrc":"//i2.mifile.cn/a1/T1ycK_BjYv1RXrhCrK.jpg?width=150&height=150","title":"  小米圈铁耳机  ","price":"99","rank":"1.3万人评价"},{"href":"//item.mi.com/1151900011.html","imgSrc":"//i2.mifile.cn/a1/T12HJvByEv1RXrhCrK.jpg?width=150&height=150","title":"  小米移动电源10000mAh  ","price":"79","rank":"19.1万人评价"},{"href":"//item.mi.com/1151400001.html","imgSrc":"//i2.mifile.cn/a1/pms_1463579883.27084326.jpg?width=150&height=150","title":"  小米插线板  ","price":"49","rank":"24.7万人评价"},{"href":"//item.mi.com/1161200004.html","imgSrc":"//i2.mifile.cn/a1/T1WxYvB_xv1RXrhCrK.jpg?width=150&height=150","title":"  小米活塞耳机 基础版  ","price":"29","rank":"5.4万人评价"},{"href":"//item.mi.com/1154300036.html","imgSrc":"//i2.mifile.cn/a1/T1F5K_BjVv1RXrhCrK.jpg?width=150&height=150","title":"  小米小钢炮蓝牙音箱2  ","price":"129","rank":"1.2万人评价"},{"href":"//item.mi.com/1154400043.html","imgSrc":"//i2.mifile.cn/a1/T142A_BXEv1RXrhCrK.jpg?width=150&height=150","title":"  小米车载充电器  ","price":"49","rank":"3万人评价"},{"href":"//item.mi.com/1161800005.html","imgSrc":"//i2.mifile.cn/a1/T15hZ_BsDv1RXrhCrK.jpg?width=80&height=80","title":"小米小钢炮蓝牙音箱 青春版 象牙白","price":"99","rank":""},{"href":"//list.mi.com/dapei","title":"","price":"","rank":""},{"href":"//www.mi.com/huosai2/","imgSrc":"//i3.mifile.cn/a4/T1..W_Bvxv1RXrhCrK.jpg","title":"小米活塞耳机 基础版","price":"29","rank":"5.3万人评价"},{"href":"//www.mi.com/quantie/","imgSrc":"//i1.mifile.cn/a1/T1ycK_BjYv1RXrhCrK!220x220.jpg","title":"小米圈铁耳机","price":"99","rank":"1.3万人评价"},{"href":"//item.mi.com/1161800009.html","imgSrc":"//i1.mifile.cn/a1/T1SkV_BCd_1RXrhCrK!220x220.jpg","title":"小米胶囊耳机","price":"69","rank":"1.1万人评价"},{"href":"//www.mi.com/bluetooth-headset/","imgSrc":"//i1.mifile.cn/a1/T190DvB4dv1RXrhCrK!220x220.jpg","title":"小米蓝牙耳机","price":"79","rank":"8.8万人评价"},{"href":"//www.mi.com/yinxiang/","imgSrc":"//i1.mifile.cn/a1/T1Tfd_BjAv1RXrhCrK!220x220.jpg","title":"小米小钢炮蓝牙音箱2","price":"129","rank":"1.1万人评价"},{"href":"//www.mi.com/littleaudio/","imgSrc":"//i1.mifile.cn/a1/T1LqYgBCWv1RXrhCrK!220x220.jpg","title":"小米随身蓝牙音箱","price":"69","rank":"7392人评价"},{"href":"//www.mi.com/pocketaudio/","imgSrc":"//i1.mifile.cn/a1/T1yf__BjAT1RXrhCrK!220x220.jpg","title":"小米蓝牙音箱","price":"199","rank":"1.8万人评价"},{"href":"//www.mi.com/speaker/","imgSrc":"//i1.mifile.cn/a1/T15hZ_BsDv1RXrhCrK!220x220.jpg","title":"小米小钢炮蓝牙音箱 青春版","price":"99","rank":""},{"href":"//list.mi.com/17","title":"","price":"","rank":""},{"href":"//www.mi.com/dianyuan5000/","imgSrc":"//i3.mifile.cn/a4/T1AcE_Bghv1RXrhCrK.jpg","title":"移动电源5000mAh","price":"49","rank":"8.7万人评价"},{"href":"//www.mi.com/dianyuan10000/","imgSrc":"//i1.mifile.cn/a1/T12HJvByEv1RXrhCrK!220x220.jpg","title":"移动电源10000mAh","price":"79","rank":"19.1万人评价"},{"href":"//www.mi.com/dianyuan10000/pro/","imgSrc":"//i1.mifile.cn/a1/T1eSZgBjVT1RXrhCrK!220x220.jpg","title":"移动电源10000mAh 高配版","price":"149","rank":"2万人评价"},{"href":"//item.mi.com/1154400042.html","imgSrc":"//i3.mifile.cn/a4/T1x8J_BgEv1RXrhCrK.jpg","title":"移动电源20000mAh","price":"149","rank":"4.7万人评价"},{"href":"//item.mi.com/1152000009.html","imgSrc":"//i1.mifile.cn/a1/T1vSDQB4_T1RXrhCrK!220x220.jpg","title":"10000mAh小米移动电源保护套","price":"19.9","rank":"2万人评价"},{"href":"//www.mi.com/powerstrip/","imgSrc":"//i3.mifile.cn/a4/T1jMbjB5Jv1RXrhCrK.jpg","title":"小米插线板（3孔位+USB）","price":"49","rank":"24.6万人评价"},{"href":"//www.mi.com/chongdianqi4kou/","imgSrc":"//i1.mifile.cn/a1/T1vFEjBbWT1RXrhCrK!220x220.jpg","title":"小米USB充电器（4口）","price":"69","rank":"6884人评价"},{"href":"//item.mi.com/1154500022.html","imgSrc":"//i3.mifile.cn/a4/T1Ihd_BTCv1RXrhCrK.jpg","title":"小米插线板 5孔位","price":"39","rank":""},{"href":"//list.mi.com/11","title":"","price":"","rank":""},{"href":"//item.mi.com/1134900527.html","imgSrc":"//i1.mifile.cn/a1/T1sRhTBsYT1RXrhCrK!220x220.jpg","title":"SanDisk 16GB存储卡（Class4）","price":"26.9","rank":"7.9万人评价"},{"href":"//item.mi.com/1153300072.html","imgSrc":"//i1.mifile.cn/a1/T1ipAvB_ZT1RXrhCrK!220x220.jpg","title":"原装快充套装","price":"58","rank":"0人评价"},{"href":"//item.mi.com/1154300033.html","imgSrc":"//i1.mifile.cn/a1/T1xxVTBghv1RXrhCrK!220x220.jpg","title":"彩虹5号电池（10粒装）","price":"9.9","rank":"6.8万人评价"},{"href":"//item.mi.com/1155000010.html","imgSrc":"//i1.mifile.cn/a1/T178EjBjVT1RXrhCrK!220x220.jpg","title":"彩虹7号电池（10粒装）","price":"9.9","rank":"3.9万人评价"},{"href":"//item.mi.com/1151400067.html","imgSrc":"//i1.mifile.cn/a1/T16XAgB5dT1RXrhCrK!220x220.jpg","title":"CR2032纽扣电池","price":"9","rank":"1.3万人评价"},{"href":"//www.mi.com/recharger/","imgSrc":"//i3.mifile.cn/a4/T1gVCgBjDv1RXrhCrK.jpg","title":"紫5镍氢充电电池","price":"49","rank":"2317人评价"},{"href":"//item.mi.com/1154400043.html","imgSrc":"//i1.mifile.cn/a1/T142A_BXEv1RXrhCrK!220x220.jpg","title":"小米车载充电器","price":"49","rank":"2.9万人评价"},{"href":"//item.mi.com/1152400014.html","imgSrc":"//i1.mifile.cn/a1/T1_lKvBKZT1RXrhCrK!220x220.jpg","title":"红米2/红米2A能量套装","price":"69","rank":""},{"href":"//list.mi.com/135","title":"","price":"","rank":""}],"message":"success"};
// 左侧图片
var	__data = {"code":0,"data":[{"href":"//www.mi.com/dianyuan10000/","imgSrc":"http://i3.mifile.cn/a4/809aed51-f9b9-482e-a249-93d44225439e"},{"href":"//www.mi.com/capsuleearphone/","imgSrc":"http://i3.mifile.cn/a4/ffe46b8a-6c97-4b92-a053-da243df50e23"},{"href":"//list.mi.com/30","imgSrc":"http://i3.mifile.cn/a4/aa163c95-2890-4227-967c-a05ccec6c4a9"},{"href":"//www.mi.com/powerstrip/","imgSrc":"http://i3.mifile.cn/a4/363032e6-b043-4854-a8cc-8909df918f02"},{"href":"//list.mi.com/22","imgSrc":"http://i3.mifile.cn/a4/ff2a2f99-2c69-4472-acc1-e16322ee79ba"},{"href":"//list.mi.com/23","imgSrc":"http://i3.mifile.cn/a4/45cd5495-d939-4e9d-b98d-b349551c8df0"}],"message":"success"};
	_data = data.data;
	___data = __data.data;
	createMatch();
var $ul = $(".second-floor .second-bd").find(".store-list").find(".ul"),
	$li = $(".second-floor .more").find("li");
	$ul.append(createMatch(0));
function page(){
	$li.mouseover(function(){
		$ul.empty();
		$ul.append(createMatch($(this).index()));
		$li.eq($(this).index()).addClass("current").siblings().removeClass("current");
	})
};
page();
// 搭配img
function createMatchImg(){
	for( var j=0;j<2;j++){
		$(".second-bd").find(".img").find("ul").append("<li>"
														+"	<a href='http:"+ ___data[j].href +"'>"
														+"		<img src='"+ ___data[j].imgSrc +"' />"
														+"	</a>"
														+"</li>");
	};
};
createMatchImg();
function createMatch(preNum){
	for(var j=0+preNum*9;j<9+preNum*9;j++){
		if(j%9 == 7){$ul.append("<li class='item item-s'>"
								+"	<a class='img'><img src='http:"+ _data[j].imgSrc +"'></a>"
								+"	<a class='title'>"+ _data[j].title +"</a>"
								+"	<p class='price'>"+ _data[j].price +"元</p>"
								+"</li>");
		}else if(j%9 == 8){$ul.append("<li class='item item-s'>"
									+"	<a class='img'><img src='../image/more.png'></a>"
									+"	<a class='more'>浏览更多"
									+"		<p class='desc'>热门</p>"
									+"	</a>"
									+"</li>");
		}else{$ul.append("<li class='item clearfloat'>"
						+"		<div class='imgs'>"
						+"			<a href='http:"+ _data[j].href +"'>"
						+"				<img src='http:"+ _data[j].imgSrc +"'>"
						+"			</a>"
						+"		</div>"
						+"		<a class='title'>"+ _data[j].title +"</a>"
						+"		<p class='price'>"+ _data[j].price +"元</p>"
						+"		<p class='rank'>"+ _data[j].rank +"</p>"
						+"	</li>");
		}
	}
};

// 内容
var data1 = {"code":0,"data":[{"href":"http://www.duokan.com/book/115222","name":"哈利·波特与魔法石","desc":"哈利波特来了！","price":"","imgSrc":"//i3.mifile.cn/a4/8e3584b6-3169-41c6-9356-939ec79aac2b"},{"href":"http://www.duokan.com/special/7812","name":"特价专区","desc":"精选畅销好书，特价促销，天天更新，天天特价！","price":"限时优惠","imgSrc":"//i3.mifile.cn/a4/T1dlVgBbbT1RXrhCrK.jpg"},{"href":"http://www.duokan.com/list/9-1","name":"杂志专区","desc":"纸媒杂志＋互联网杂志，你想看的这都有！","price":"同步新刊上线","imgSrc":"//i3.mifile.cn/a4/T1R3WgBjKT1RXrhCrK.jpg"},{"name":"","desc":"","price":""},{"href":"http://zhuti.xiaomi.com/detail/4ecf4ebb-7cba-4142-96aa-6b8deb2426ef","name":"新世纪福音战士OL","desc":"EVA手游正版授权，同名主题，高能来袭！","price":"免费","imgSrc":"//i3.mifile.cn/a4/7d47dde1-60fb-4ff3-8fa1-364cfc452457"},{"href":"http://zhuti.xiaomi.com/detail/d6277519-ca46-420c-ab09-060f6d293f94","name":"世界就在这里","desc":"“青春的世界里，每一刻都要用尽全力欢呼”","price":"免费","imgSrc":"//i3.mifile.cn/a4/b2c8ca37-4ba8-4af8-b87e-91847980a278"},{"href":"http://zhuti.xiaomi.com/detail/13df18d4-e52c-4a61-82e3-97014f21bd77","name":"不悔剑三","desc":"精品剑网三同人主题 浪漫武侠 共闯天涯","price":"3米币","imgSrc":"//i3.mifile.cn/a4/10af68f9-3012-48bb-85b1-ad3b0646dfdb"},{"name":"","desc":"","price":""},{"href":"http://ljm.mi.com/?channel=meng_1084_1_android","name":"老九门","desc":"九门恩怨，盗墓笔记前传上线","price":"免费","imgSrc":"//i3.mifile.cn/a4/6032cb36-587f-4366-89ef-aefed2546552"},{"href":"http://game.xiaomi.com/miyou/index.html","name":"米柚手游模拟器","desc":"在电脑上玩遍小米所有手游","price":"免费","imgSrc":"//i3.mifile.cn/a4/T1czW_BXCv1R4cSCrK.png"},{"href":"http://game.xiaomi.com/app-appdetail--app_id__581412.html","name":"剑侠情缘","desc":"玩剑侠情缘手游，领666壕礼！！","price":"免费","imgSrc":"//i3.mifile.cn/a4/010948ae-bd48-49c6-af12-4ec8c4a0c829"},{"name":"","desc":"","price":""},{"href":"http://app.mi.com/subject/168797","name":"2015年度应用","desc":"2015年度应用","price":"免费","imgSrc":"//i3.mifile.cn/a4/T1YyJgBCYv1R4cSCrK.png"},{"href":"http://app.mi.com/subject/168798","name":"2015年度游戏","desc":"2015年度游戏","price":"免费","imgSrc":"//i3.mifile.cn/a4/T1eaxgB4Ev1R4cSCrK.png"},{"href":"http://app.mi.com/subject/167924","name":"小米应用","desc":"小米出品 必属精品","price":"免费","imgSrc":"//i3.mifile.cn/a4/T15VZvB5Kv1R4cSCrK.png"},{"name":"","desc":"","price":""}],"message":"success"};
	_data1 = data1.data;
	for(var i = 0;i<3;i++){
		$(".content .item-list").append("<li>"
										+"	<a class='name'>"+ _data1[i].name +"</a>"
										+"	<a class='desc'>"+ _data1[i].desc +"</a>"
										+"	<a class='price'>"+ _data1[i].price +"</a>"
										+"	<a class='img' href='"+ _data1[i].href +"'>"
										+"		<img src='http:"+ _data1[i].imgSrc +"'>"
										+"	</a>"
										+"</li>");
	}
var $ul1 = $(".content .content-item .item-list"),
	$pages = $(".content .content-item .pages");
	var l = 296,
		r = -296,
		indexr = 0;
	$(".content .content-item .btn").find(".right").click(function(){
		indexr = indexr < 2 ? ++indexr : 0;
		$ul1.animate({left : r*indexr +"px"},300);
		$pages.find(".dot").eq(indexr).addClass("current").siblings().removeClass("current");
	});
	$(".content .content-item .btn").find(".left").click(function(){
		indexr =indexr > 0 ? --indexr : 2 ;
		$ul1.animate({left : r*indexr +"px"},300);
		$pages.find(".dot").eq(indexr).addClass("current").siblings().removeClass("current");
	});
// 不可狂击选中
$('body').bind("selectstart",function(){ return false;});
// input内容
$(".header-search .search").focus(function(){
	$(".search-words").css("display","none");
}).blur(function(){
	if($(".header-search .search").val() == ""){
		$(".search-words").css("display","block");
	}else{
		$(".search-words").css("display","none");
	}
});
