window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
$(function(){
	//alert($(window).height());
	//--首页整屏滚动(复杂特效)
	//--顶部位置固定
	if($('#pageHead').length>0){
		$(window).scroll(function(){
			if($(window).scrollTop()>75){
				$('.headDiv').addClass('on');
				}else{
					$('.headDiv').removeClass('on');
					}
			})
		}
	//--顶部按钮
	//--顶部导航
	//--首页case(复杂特效)
	if($('.indexPart2').length>0){
	  $('.indexPart2').find('.list').slick({
			  dots: false,
			  infinite: true,
			  autoplay:true,
			  arrows: true,
			  speed: 500,
			  slidesToShow: 1,
			  slidesToScroll: 1
		  });
	  $('.indexPart2').find('li').hover(
		 function(){
			 $(this).addClass('on');
			 },
		 function(){
			 $(this).removeClass('on');
			 }
	  )
	}
	//--底部新闻
	//--
	$('.listHover').find('li').hover(
	   function(){
		   $(this).addClass('on');
		   },
	   function(){
		   $(this).removeClass('on');
		   }
	)
	//--首页网站建设(复杂特效)
	//$('.indexPart3').find('.imgList').find('li:first').fadeIn(300);
	$('.indexPart3').find('.box:first').show();
	$('.indexPart3').find('.btn').find('a').each(function(i){
	$(this).hover(
	   function(){
		   $('.indexPart3').find('.btn').find('a').removeClass('on');
		   $(this).addClass('on');
		   $('.indexPart3').find('.imgList').find('li').stop(true,true).fadeOut(500);
		   $('.indexPart3').find('.imgList').find('li').eq(i).stop(true,true).fadeIn(500);
		   $('.indexPart3').find('.box').hide();
		   $('.indexPart3').find('.box').eq(i).show();
		   },
	   function(){}
	)
	})
	//--首页关于我们(复杂特效)
	$('.footDiv').find('.list2').find('li:odd').addClass('liOdd');
	//--首页右侧按钮
	$('.sideBar').find('.close').toggle(
	   function(){
		   $(this).addClass('on');
		   $('.sideBar').addClass('on');
		   },
	   function(){
		   $(this).removeClass('on');
		   $('.sideBar').removeClass('on');
		   }
	)
	$('.sideBar').find('.guanbi').toggle(
	   function(){
		   $(this).addClass('on');
		   $('.sideBar').addClass('on');
		   },
	   function(){
		   $(this).removeClass('on');
		   $('.sideBar').removeClass('on');
		   }
	)
	$('.sideBar').find('.li_01').find('a').click(function(){
		$.fn.fullpage.moveSectionUp();
		})
	$('.sideBar').find('.li_05').find('a').click(function(){
		$.fn.fullpage.moveSectionDown();
		})
	//--网站规划
	//--网站建设图标
	//--网站建设轮播图
	//--服务客户
	//--移动终端应用
	//--服务页面视差效果(复杂特效)
	//--解决方案(复杂特效)
	//--解决方案右侧按钮
	//--
	$('.tabContentDiv').find('.tabContent:first').show();
	$('.tab').each(function(i){
		$(this).find('li').each(function(ii){
			$(this).hover(
			function(){
				$('.tab').eq(i).find('li').removeClass('liNow');
				$(this).addClass('liNow');
				$('.tabContentDiv').eq(i).find('.tabContent').hide();
				$('.tabContentDiv').eq(i).find('.tabContent').eq(ii).fadeIn(300);
				},
			function(){}	
				)
			})
		})
	//--案例(复杂特效)
	//--分页按钮
	//--新闻列表
	//--关于我们时间轴(复杂特效)
	$('.about_03').find('.time').find('.slick').each(function(i){
		$(this).find('div').click(function(){
			$('.about_03').find('.time').find('.slick').find('div').removeClass('on');
			$(this).addClass('on');
			$('.about_03').find('.list').hide();
			$('.about_03').find('.list').eq(i).fadeIn(300);
			})
		})



	//关于我们阳光公益弹出
	$('.about_n_03 .huodong ul').find('.aaa').each(function(i){
		$(this).click(function(){
			$('.story').eq(i).fadeIn(300);
			})
		})
	$('.close1').click(function(){
		$('.story').fadeOut(300);
		})
		

$(function(){
	SolutionFun();
	$(window).resize(function(){
		SolutionFun();
		})
	})
function SolutionFun(){
	$('.aboutSide').height($(window).height()-69);
	if($(window).height()>690){
		$('.Solution_07').css('top',$(window).height()-690);
		}else{
			$('.Solution_07').css('top',0);
			}
	}
$('.about_n_01 .about_us').find('.nr').each(function(i){
		$(this).mCustomScrollbar({
			theme:"dark-thin"
			})
		})

	})