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

	/* 검색결과 출력 */
	$('.gray-bg-box .btn-result').click(function(){
		$('.rentcar-result').show();
	});

	/* 이미지 슬라이드 */
	$('.img-slide .swiper-container').each(function(){
		var swiper = new Swiper(this, {
			pagination: '.img-slide .swiper-pagination',
			paginationType: 'fraction'
		});
	});
});
