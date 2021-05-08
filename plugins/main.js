$(function() {
    'use strict';

    //載入header跟footer
    // $("#header").load("../common/header.html");
    // $("#footer").load("../common/footer.html");

    //取得目前網頁檔案名稱
    //var nowPageName = document.location.href.match(/[^\/]+$/)[0].split('.').slice(0)[0];
    var nowPageName = $('body').attr('id');
    var oldTranslationBtnName = '';

    //初始化WOW
    new WOW().init();

    // 作品集分類選單
    $(window).on('load', function() {

        //首頁專用
        $('.main-slider').addClass('animate-in');

        //目前頁面選單套用CSS
        $('li[name="' + nowPageName + '"]').addClass("active");

        //移除讀取顯示
        $('.preloader').remove();

        var $portfolio_selectors = $('.portfolio-filter >li>a');

        if ($portfolio_selectors.length) {

            var $portfolio = $('.portfolio-items');
            $portfolio.isotope({
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });

            $portfolio.on('arrangeComplete', function(event, filteredItems) {
                console.log('arrangeComplete with ' + filteredItems.length + ' items');
            });

            $portfolio_selectors.on('click', function() {
                $portfolio_selectors.removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $portfolio.isotope({ filter: selector });
                return false;
            });
        }

    });

    //技能進度條
    $.each($('div.progress-bar'), function() {
        $(this).css('width', $(this).attr('data-transition') + '%');
    });

    //-------------------translation-------------------
    i18next
        .use(i18nextXHRBackend)
        .use(i18nextBrowserLanguageDetector)
        .init({
            fallbackLng: 'jp',
            debug: true,
            backend: {
                loadPath: 'js/translate/{{lng}}/translation.json',
            }
        }, function(err, t) {
            updateContent();

            //目前語言按鈕套用CSS
            SetTranslationBtn();
        });

    function updateContent() {
        SetTranslationBtn();


        switch(nowPageName){
            case 'index':
                $("#in-short").text(i18next.t('in-short', { what: 'i18next' }));
                $("#art-in-short").text(i18next.t('art-in-short', { what: 'i18next' }));
                $("#program-in-short").text(i18next.t('program-in-short', { what: 'i18next' }));
                $("#web-in-short").text(i18next.t('web-in-short', { what: 'i18next' }));
                break;
            case 'aboutus':
                $("#about-title").text(i18next.t('about-title', { what: 'i18next' }));
                $("#contact-info").text(i18next.t('contact-info', { what: 'i18next' }));
                break;
            case 'gallery':
                $("#gallery-title").text(i18next.t('gallery-title', { what: 'i18next' }));
                break;
            case 'program':
                $("#program-title").text(i18next.t('program-title', { what: 'i18next' }));
                $(".plan-text").text(i18next.t('plan-text', { what: 'i18next' }));
                $(".program-text").text(i18next.t('program-text', { what: 'i18next' }));
                $(".art-text").text(i18next.t('art-text', { what: 'i18next' }));
                $(".server-text").text(i18next.t('server-text', { what: 'i18next' }));
                $(".client-text").text(i18next.t('client-text', { what: 'i18next' }));
                $(".architecture-text").text(i18next.t('architecture-text', { what: 'i18next' }));
                $(".character-control-text").text(i18next.t('character-control-text', { what: 'i18next' }));
                $(".character-design-text").text(i18next.t('character-design-text', { what: 'i18next' }));
                $("#jungleAdventure-story").text(i18next.t('jungleAdventure-story', { what: 'i18next' }));
                $("#dream-story").text(i18next.t('dream-story', { what: 'i18next' }));
                $("#cartonWar-story").text(i18next.t('cartonWar-story', { what: 'i18next' }));
                $("#dreamland-story").text(i18next.t('dreamland-story', { what: 'i18next' }));
                $("#twoC-story").text(i18next.t('twoC-story', { what: 'i18next' }));
                $("#born-story").text(i18next.t('born-story', { what: 'i18next' }));
                $("#graverobber-story").text(i18next.t('graverobber-story', { what: 'i18next' }));
                break;
            case 'other':
                $("#web-title").text(i18next.t('web-title', { what: 'i18next' }));
                //簡介
                $("#web-project-1-1").text(i18next.t('web-project-1-1', { what: 'i18next' }));
                $("#web-project-1-2").text(i18next.t('web-project-1-2', { what: 'i18next' }));
                $("#web-project-1-3").text(i18next.t('web-project-1-3', { what: 'i18next' }));
                $("#web-project-1-4").text(i18next.t('web-project-1-4', { what: 'i18next' }));
                $("#web-project-1-5").text(i18next.t('web-project-1-5', { what: 'i18next' }));
                $("#web-project-1-6").text(i18next.t('web-project-1-6', { what: 'i18next' }));
                $("#web-project-1-7").text(i18next.t('web-project-1-7', { what: 'i18next' }));
                $("#web-project-2-1").text(i18next.t('web-project-2-1', { what: 'i18next' }));
                $("#web-project-2-2").text(i18next.t('web-project-2-2', { what: 'i18next' }));
                $("#web-project-2-3").text(i18next.t('web-project-2-3', { what: 'i18next' }));
                $("#web-project-2-4").text(i18next.t('web-project-2-4', { what: 'i18next' }));
                $("#web-project-2-5").text(i18next.t('web-project-2-5', { what: 'i18next' }));
                $("#web-project-2-6").text(i18next.t('web-project-2-6', { what: 'i18next' }));
                $("#web-project-2-7").text(i18next.t('web-project-2-7', { what: 'i18next' }));
                $("#web-project-3-1").text(i18next.t('web-project-3-1', { what: 'i18next' }));
                $("#web-project-3-2").text(i18next.t('web-project-3-2', { what: 'i18next' }));
                $("#web-project-3-3").text(i18next.t('web-project-3-3', { what: 'i18next' }));
                $("#web-project-3-4").text(i18next.t('web-project-3-4', { what: 'i18next' }));
                $("#web-project-3-5").text(i18next.t('web-project-3-5', { what: 'i18next' }));
                $("#web-project-3-6").text(i18next.t('web-project-3-6', { what: 'i18next' }));
                $("#web-project-3-7").text(i18next.t('web-project-3-7', { what: 'i18next' }));

                //title
                $("#web-project-title-1-1").text(i18next.t('web-project-title-1-1', { what: 'i18next' }));
                $("#web-project-title-1-2").text(i18next.t('web-project-title-1-2', { what: 'i18next' }));
                $("#web-project-title-1-3").text(i18next.t('web-project-title-1-3', { what: 'i18next' }));
                $("#web-project-title-1-4").text(i18next.t('web-project-title-1-4', { what: 'i18next' }));
                $("#web-project-title-1-5").text(i18next.t('web-project-title-1-5', { what: 'i18next' }));
                $("#web-project-title-1-6").text(i18next.t('web-project-title-1-6', { what: 'i18next' }));
                $("#web-project-title-1-7").text(i18next.t('web-project-title-1-7', { what: 'i18next' }));
                $("#web-project-title-2-1").text(i18next.t('web-project-title-2-1', { what: 'i18next' }));
                $("#web-project-title-2-2").text(i18next.t('web-project-title-2-2', { what: 'i18next' }));
                $("#web-project-title-2-3").text(i18next.t('web-project-title-2-3', { what: 'i18next' }));
                $("#web-project-title-2-4").text(i18next.t('web-project-title-2-4', { what: 'i18next' }));
                $("#web-project-title-2-5").text(i18next.t('web-project-title-2-5', { what: 'i18next' }));
                $("#web-project-title-2-6").text(i18next.t('web-project-title-2-6', { what: 'i18next' }));
                $("#web-project-title-2-7").text(i18next.t('web-project-title-2-7', { what: 'i18next' }));
                $("#web-project-title-3-1").text(i18next.t('web-project-title-3-1', { what: 'i18next' }));
                $("#web-project-title-3-2").text(i18next.t('web-project-title-3-2', { what: 'i18next' }));
                $("#web-project-title-3-3").text(i18next.t('web-project-title-3-3', { what: 'i18next' }));
                $("#web-project-title-3-4").text(i18next.t('web-project-title-3-4', { what: 'i18next' }));
                $("#web-project-title-3-5").text(i18next.t('web-project-title-3-5', { what: 'i18next' }));
                $("#web-project-title-3-6").text(i18next.t('web-project-title-3-6', { what: 'i18next' }));
                $("#web-project-title-3-7").text(i18next.t('web-project-title-3-7', { what: 'i18next' }));
                break;
        }
    }

    function changeLng(lng) {
        i18next.changeLanguage(lng);
    }

    i18next.on('languageChanged', () => {
        updateContent();
    });

    function SetTranslationBtn(){
        $('button[name="'+ oldTranslationBtnName +'"]').removeClass("active");
        $('button[name="'+ i18next.languages[0] +'"]').addClass("active");
        oldTranslationBtnName = i18next.languages[0];
    }
    //-------------------translation-------------------


});
