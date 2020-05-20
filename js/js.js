$(document).ready(function () {
    $('.tab-content>div:not(":first-of-type")').hide();/*прячет*/

    $('.tab-menu li').each(function (i) { /*each-напоминает цикл for*/
        $(this).attr('data-tab', 'tab' + i);
    });
    $('.tab-content>div').each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });
    $('.tab-menu li').on('click', function () {
        let dataTab = $(this).data('tab'),
            getTab = $(this).closest('.tab');

        getTab.find('.tab-menu li').removeClass('active');/*удаление класса*/
        $(this).addClass('active');

        getTab.find('.tab-content>div').hide();/*прячет*/
        getTab.find('.tab-content>div[data-tab=' + dataTab + ']').show();/*добавляет элемент*/

    });
    $('.content_toggle').click(function () {
        $('.content_block').slideToggle(300);/*Отображение или скрытие соответствующих элементов с помощью скользящего движения.*/
        return false;
    });
    $('.reg').on("click", function () {
        $('#getStart').toggleClass('bounceIn animated');
    });

    /*код выполняется в зависимости от перемещения по сайту*/
    var waypoint = new Waypoint({
        element: document.getElementById('e1st'),
        handler: function (direction) {
            if (direction == "down") {
                $("nav").attr("id", "sticky")/*добавляется стиль на id*/
            } else {
                $("nav").removeAttr("id");/*удаляется стиль*/
            }
        },
        offset: 60
    });

    $('.slider-content>div:not(":first-of-type")').hide();/*прячет*/

    $('.slider-menu li').each(function (i) { /*each-напоминает цикл for*/
        $(this).attr('data-slider', 'slider' + i);
    });
    $('.slider-content>div').each(function (i) {
        $(this).attr('data-slider', 'slider' + i);
    });
    $('.slider-menu li').on('click', function () {
        let dataTab = $(this).data('slider'),
            getTab = $(this).closest('.slider');

        getTab.find('.slider-menu li').removeClass('active');/*удаление класса*/
        $(this).addClass('active');

        getTab.find('.slider-content>div').hide();/*прячет*/
        getTab.find('.slider-content>div[data-slider=' + dataTab + ']').show();/*добавляет элемент*/

    });
    /******облака*********/
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();

        $('.left-mountain').css({
            left: - scroll / 30 + "%",
            bottom: - scroll / 80 + "%",
            width: 100 + scroll / 50 + "%",
            height: 60 + scroll / 35 + "%",
        })

        $('.right-mountain').css({
            right: - scroll / 40 + "%",
            bottom: - scroll / 80 + "%",
            width: 100 + scroll / 50 + "%",
            height: 60 + scroll / 35 + "%",
        })

        $('.text').css({
            top: -scroll / 17 + "%",
        })
    });

});

