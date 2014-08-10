var errorDiv = $('.redAlert:visible').first();
var scrollPos = errorDiv.offset().top;
$(window).scrollTop(scrollPos);
