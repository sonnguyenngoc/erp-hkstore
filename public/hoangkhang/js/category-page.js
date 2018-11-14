catalog_refine_number = 6;
if (catalog_refine_number <= $('.refine-search__content > li').length) $('.refine-search__content').append('<li class="refine-loadmore"><i class="fa fa-plus"></i></li>');
var show_catalog_refine_number = catalog_refine_number - 1;
$('ul.refine-search__content > li.refine-search__subitem').each(function(i) {
    if (i > show_catalog_refine_number) {
        $(this).css('display', 'none');
    }
});
$("ul.refine-search__content .refine-loadmore").click(function() {
    if ($(this).hasClass('open')) {
        $('ul.refine-search__content li.refine-search__subitem').each(function(i) {
            if (i > show_catalog_refine_number) {
                $(this).slideUp(200);
                $(this).css('display', 'none');
            }
        });
        $(this).removeClass('open');
        $('.refine-loadmore').html('<i class="fa fa-plus"></i>');
    } else {
        $('ul.refine-search__content li.refine-search__subitem').each(function(i) {
            if (i > show_catalog_refine_number) {
                $(this).slideDown(200);
            }
        });
        $(this).addClass('open');
        $('.refine-loadmore').html('<i class="fa fa-minus"></i>');
    }
});

reinitView();

function reinitView() {
    $('.product-card__gallery .item-img').hover(function() {
        $(this).addClass('thumb-active').siblings().removeClass('thumb-active');
        var thumb_src = $(this).attr("data-src");
        $(this).closest('.product-item-container').find('img.img-responsive').attr("src", thumb_src);
    });
    $('.view-mode .list-view button').bind("click", function() {
        $(this).parent().find('button').removeClass('active');
        $(this).addClass('active');
    });
    // Product List
    $('#list-view').click(function() {
        $('.products-category .product-layout').attr('class', 'product-layout product-list col-xs-12');
        localStorage.setItem('listview', 'list');
    });
    // Product Grid
    $('#grid-view').click(function() {
        var cols = $('.left_column , .right_column ').length;
        $('.products-category .product-layout').attr('class', 'product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12');
        localStorage.setItem('listview', 'grid');
    });
    // Product Grid 2
    $('#grid-view-2').click(function() {
        $('.products-category .product-layout').attr('class', 'product-layout product-grid product-grid-2 col-lg-6 col-md-6 col-sm-6 col-xs-12');
        localStorage.setItem('listview', 'grid-2');
    });
    // Product Grid 3
    $('#grid-view-3').click(function() {
        $('.products-category .product-layout').attr('class', 'product-layout product-grid product-grid-3 col-lg-4 col-md-4 col-sm-6 col-xs-12');
        localStorage.setItem('listview', 'grid-3');
    });
    // Product Grid 4
    $('#grid-view-4').click(function() {
        $('.products-category .product-layout').attr('class', 'product-layout product-grid product-grid-4 col-lg-3 col-md-4 col-sm-6 col-xs-12');
        localStorage.setItem('listview', 'grid-4');
    });
    // Product Grid 5
    $('#grid-view-5').click(function() {
        $('.products-category .product-layout').attr('class', 'product-layout product-grid product-grid-5 col-lg-15 col-md-4 col-sm-6 col-xs-12');
        localStorage.setItem('listview', 'grid-5');
    });
    // Product Table
    $('#table-view').click(function() {
        $('.products-category .product-layout').attr('class', 'product-layout product-table col-xs-12');
        localStorage.setItem('listview', 'table');
    })
    if (localStorage.getItem('listview') == null) localStorage.setItem('listview', 'grid-3');
    if (localStorage.getItem('listview') == 'table') {
        $('#table-view').trigger('click');
    } else if (localStorage.getItem('listview') == 'grid-2') {
        $('#grid-view-2').trigger('click');
    } else if (localStorage.getItem('listview') == 'grid-3') {
        $('#grid-view-3').trigger('click');
    } else if (localStorage.getItem('listview') == 'grid-4') {
        $('#grid-view-4').trigger('click');
    } else if (localStorage.getItem('listview') == 'grid-5') {
        $('#grid-view-5').trigger('click');
    } else {
        $('#list-view').trigger('click');
    }
}