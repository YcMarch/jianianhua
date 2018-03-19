
//全局滚动条
function scroll(ele){
	$(document).find(ele).mCustomScrollbar({
        horizontalScroll: false,
        advanced: {
            updateOnContentResize: true,
            updateOnBrowserResize: true,
            autoExpandHorizontalScroll: true
        }
    });
}


$(function(){

    //css clear style
    $('.partner .partul li:nth-child(4n),.journals .jour li:nth-child(4n)').css('margin-right','0px');
    $('.main-user .message .mess li:nth-child(1),.main-user .replyul li:first,.policyBox .licy-left .cooper li:nth-child(1)').css('padding-top','0px');
    $('.main-user .message .mess li:last-child').css('border','0px');

    //头部——各地农业嘉年华下拉
    var _sel = true;
    $('.headR .sel').click(function(event){
        if(_sel){
            $(this).addClass('active');
            $('.headR .select').slideDown(400);
            _sel = false;
        }else{
            $(this).removeClass('active');
            $('.headR .select').slideUp(400);
            _sel = true;
        }
        event.stopPropagation();
    });
    $(document).click(function(){
        $('.headR .sel').removeClass('active');
        $('.headR .select').slideUp(400);
        _sel = true;  
    });


    //头部——微信二维码
    var _chat = true;
    $('.header .headfx .weixin').click(function(event){
        if(_chat){
            $('.header .headfx .weixin .chat').fadeIn(600);
            _chat = false;
        }else{
            $('.header .headfx .weixin .chat').fadeOut(600);
            _chat = true;
        }
        event.stopPropagation();
    });
    $(document).click(function(){
        $('.header .headfx .weixin .chat').fadeOut(600);
        _chat = true;  
    });


    //底部——合作单位
    var _ner = true;
    $('.footer .partner .hezuo').click(function(event){
        if(_ner){
            $('.footer .partfried').fadeIn(600);
            _ner = false;
        }else{
            $('.footer .partfried').fadeOut(600);
            _ner = true;
        }
        event.stopPropagation();
    });
    $(document).click(function(){
        $('.footer .partfried').fadeOut(600);
        _ner = true;  
    });


    //登录
    $('.dlTab1 a').click(function(){
        var _this = $(this),_index = _this.index();
        _this.addClass('active').siblings('a').removeClass("active");
        $('.dllist').eq(_index).show().siblings('.dllist').hide();
    });
    $('.dlTab1 a').eq(0).click();

    //注册
    $('.dlTab2 a').click(function(){
        var _this = $(this),_index = _this.index();
        _this.addClass('active').siblings('a').removeClass("active");
        $('.register').eq(_index).show().siblings('.register').hide();
    });
    $('.dlTab2 a').eq(0).click();

    //个人会员注册-使用协议
    $('.register2 li .checkboxBtn .read a').click(function(){
        $('.registerAlpha,.registerOne').fadeIn(600);
    });
    $('.registerIndex .llow-bg .close,.registerAlpha').click(function(){
        $('.registerAlpha,.registerOne').fadeOut(600);
    });

    //个人会员注册-阅读并同意“使用协议”
    $('.register2 li .next-Btn').click(function(){
        $('.registerAlpha,.registerTwo').fadeIn(600);
    });
    $('.registerIndex .llow-bg .close,.registerAlpha').click(function(){
        $('.registerTwo').fadeOut(600);
    });

    //企业会员-实名认证-弹窗
    $('.register3 li .next-Btn').click(function(){
        $('.registerAlpha,.registerThree').fadeIn(600);
    });
    $('.registerIndex .llow-bg .close,.registerAlpha').click(function(){
        $('.registerThree').fadeOut(600);
    });


    //个人会员中心——评论管理
    $('.main-user .replyul li .replyone .replyBtn .huifu').click(function(){
        $(this).parents('li').find('.comments').slideDown(600);
    });
    $('.main-user .replyul li .comments .deBtn .cancel').click(function(){
        $(this).parents('li').find('.comments').slideUp(600);
    });

    //删除评论
    $('.replyul li .replyone .replyBtn .delete').click(function(){
        $('.deleteAlpha,.deleteBox').fadeIn(600);
    });
    $('.deleteBox .cancel').click(function(){
        $('.deleteAlpha,.deleteBox').fadeOut(600);
    });

    //企业会员中心－企业主页状态下拉
    var _state = true;
    $('.registration .reg-right .qiyeTab1 .state p').click(function(event){
        if(_state){
            $(this).addClass('active');
            $(this).next().slideDown(400);
            _state = false;
        }else{
            $(this).removeClass('active');
            $(this).next().slideUp(400);
            _state = true;
        }
        event.stopPropagation();
    });
    $(document).click(function(){
        $('.registration .reg-right .qiyeTab1 .state p').removeClass('active');
        $('.registration .reg-right .qiyeTab1 .state .st_nume').slideUp(400);
        _state = true;  
    });


    //企业会员中心－企业主页 (产品活动中心发布)下拉
    if($('.registration .reg-right .proSelect').size()>0){
       $('.registration .reg-right .proSelect').each(function(){
        var _this=$(this);
        _this.attr('data-open','false');
    });
    $('.registration .reg-right .proSelect').bind('click',function(event){
            var _this=$(this),_dataOpen=_this.attr('data-open');    
            if(_dataOpen=='false'){
                $('.registration .reg-right .proSelect .lect-menu').slideUp(400);
                $('.registration .reg-right .proSelect').attr('data-open','false');
                $('.lect-menu',_this).slideDown(400);
                _this.attr('data-open','true');
            }else{
                $('.lect-menu',_this).slideUp(400);
                _this.attr('data-open','false');
            }
             event.stopPropagation();
        });
    }
    $('.registration .reg-right .proSelect .lect-menu a').click(function(){
        $(this).parents('.proSelect').find('.enter').text($(this).text());
    });
    $(document).click(function(){
        $('.registration .reg-right .proSelect .lect-menu').slideUp(400);
        _sele = true;  
    });


    //企业会员中心－基本中心
    $('.registration .reg-right .regTab3_file .inputul li .btns').click(function(){
        $('.basicAlpha,.basicBoxter').fadeIn(600);
    });
    $('.basicAlpha').click(function(){
        $('.basicAlpha,.basicBoxter').fadeOut(600);
    });

    //企业会员中心 —企业主页 (联系我们)
    $('.registration .reg-right .fabu-on').click(function(){
        $('.basicAlpha,.verification-code').fadeIn(600);
    });
    $('.basicAlpha,.verification-code .fication1 .close').click(function(){
        $('.basicAlpha,.verification-code').fadeOut(600);
    });

    $('.verification-code .tijiao').click(function(){
        $('.verification-code').fadeOut(600);
        $('.basicBoxter').fadeIn(600);
    });
    $('.basicAlpha').click(function(){
        $('.basicAlpha,.basicBoxter').fadeOut(600);
    });
});
	















	












	




