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

	/* 검색결과 출력 */
	$('.gray-bg-box .btn-result').click(function(){
		$('.rentcar-result').show();
	});

	/* 이미지 슬라이드 */
	$('.img-slide .swiper-container').each(function(){
		var swiper = new Swiper(this, {
			pagination: '.img-slide .swiper-pagination',
			nextButton: '.img-slide .btn-next',
			prevButton: '.img-slide .btn-prev',
			paginationType: 'fraction'
		});
	});

	/* 레이어 출력시 스크롤 방지  */
	function scrollNo(){
		var winTop = $(window).scrollTop();
		$('html').addClass('no-scroll');
		$('html').css({'top':-winTop}).attr('data', winTop);
	}
	function scrollOk(){
		var winTop = $('html').attr('data');
		$('html').removeClass('no-scroll').removeAttr('style');
		$('body').scrollTop(winTop);
	}

	/* GNB */
	// 열기
	$('.btn-gnb').click(function(){
		$('.gnb-close').fadeIn(200);
		$('.gnb-layer').show().stop().animate({left:0}, 200);
		scrollNo();
	});

	// 닫기
	$(document).on('click', '.btn-gnb-close, .gnb-close', function(){
		$('.gnb-layer').stop().animate({left:-290}, 100, function(){
			$(this).hide();
			$('.gnb-close').fadeOut(100);
		});
		scrollOk();
	});

	/* ===========================================================================================================
		레이어 팝업
	=========================================================================================================== */
	$('.layer-popup, .layer-menu').hide().css({'opacity':'1'});
	$('.layer-popup, .layer-menu').each(function(){
		var winH = $(window).height();
		var popH = $(this).outerHeight();

		if(popH >= winH){
			$(this).addClass('scroll');
		}else{
			$(this).removeClass('scroll');
		}
	});

	$('.btn-popup').click(function(){
		var zIdx = $('.layer-popup').css('z-index');
		$('body').append('<div class="popup-close">');
		$('.popup-close').css({'z-index':zIdx-1});
		$('body').css({'overflow':'hidden'});
	});
	$(document).on('click', '.layer-popup .btn-close, .popup-close, .layer-menu .btn-close', function(){
		$('.layer-popup, .layer-menu').fadeOut(200);
		$('.bg-layer').fadeOut(200);
		$('.popup-close').remove();
		$('body').css({'overflow-y':'inherit'});
	});

	var scrolling = 0;
	$(window).scroll(function(){
		var winTop = $(this).scrollTop();

		/* top 버튼 */
		if(winTop > 0){
			$('.btn-top').show();
		}else{
			$('.btn-top').hide();
		}
	});

	$('.floating-btn-area .btn-top').click(function(){
		$('html, body').animate({scrollTop: 0},200);
	});
});
