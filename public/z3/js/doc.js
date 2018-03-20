$(function() {

    // 二级导航列表
    var subMenuList = [];
    var clickStatus = false;
    // 分析h标签，创建二级导航
    function createSubMenu() {
        var $content = $('#content');
        var $h2 = $content.children('h2');

        var $menu = $('<ul class="sub-menu"></ul>');
        var list  = [];

        $.each($h2, function(i, label) {
            var $label = $(label);
            var title  = $label.attr("id");
            var top    = $label.offset().top;

            subMenuList.push({
                top: top
            });
            list.push('<li><a data-idx="'+ i +'" class="sidebar-link" data-scroll href="#'+ title +'">'+ title +'</li>');
        });
        $menu.html(list.join(''));
        $('#sub-menu-container').append($menu);

        $menu.on('click', '.sidebar-link',function(e) {
            clickStatus = true;
            var $this = $(this);
            $menu.find('.sidebar-link.current').removeClass('current');
            $this.addClass('current');
        });
    }

    createSubMenu();

    smoothScroll.init({
        callback: function (anchor, toggle ) {
            setTimeout(function() {
                clickStatus = false;
            }, 200);
            var hash = $(toggle).attr('href');
            changeIframeHash(hash);
            // console.log(anchor, toggle);
        }
    });

    var $iframe = $('#phone-iframe');

    var oldHash = '';

    function changeIframeHash(hash) {
        if (!$iframe) {
            return;
        }
        if (!/^#[a-zA-Z0-9]+$/.test(hash)) {
            hash = '';
        }
        if (hash === oldHash) {
            return;
        }
        oldHash = hash;
        var baseUrl = $iframe.attr('src').replace(/#.*$/, '');
        $iframe[0].src = baseUrl + hash;
    }

    var timeoutId = null;

    $(document).on('scroll', function(e) {
        if (timeoutId !== null) {
            return;
        }
        if (clickStatus) {
            return;
        }
        timeoutId = setTimeout(function() {
            timeoutId = null;
            var scrollTop = $('body').scrollTop();
            for (var i = subMenuList.length - 1; i >= 0; i --) {
                if (scrollTop >= subMenuList[i].top) {
                    var $menu = $('.sub-menu');
                    var $link = $menu.find('[data-idx="'+i+'"]');
                    $('.sub-menu .sidebar-link.current').removeClass('current');
                    $link.addClass('current');
                    var hash = $link.attr('href');
                    changeIframeHash(hash);
                    return;
                }
            }
        }, 200);
    });
});
