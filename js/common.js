$(window).load(function(){
	winW = $(window).width();
	winH = $(window).height();

	/* 푸터 위치 설정 */
	$('.footer').each(function(){
		if($('.wrapper').outerHeight() <= winH){
			$('.wrapper').css({'position':'relative', 'min-height':winH});
			$(this).css({'position':'absolute', 'left':'0', 'right':'0', 'bottom':'0'});
		}
	});

	/* 새창 닫기 버튼 */
	$('.header .btn-close').click(function(){
		window.close();
	});
});
