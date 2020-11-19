  'use strict';
 	      jQuery(document).ready(function($) {
          //Textimonail carousel;
            $(".textimonial-carousel").owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
                dots:false,
                margin: 0,
                autoplay: true,
                autoplaySpeed:1000,
                autoplayHoverPause:true,
                mouseDrag: true,
                touchDrag: true,
                responsive : {
                    1200 : {
                        items: 1,
                    },
                    768 : {
                        items: 1,
                    },
                    480 : {
                        items: 1,
						mouseDrag: false,
                		touchDrag: true,
                    },
                    0 : {
                        items: 1,
						mouseDrag: false,
                		touchDrag: true,
                    }
                },
            });


			//video paly js
            $(".video-play").magnificPopup({
                  type: 'video'
                });

			//mobile menu
            $("#menu").slicknav({
                prependTo: ".mobile-menu-wrap"
            });
			//tablate menu
            $(".mobile-menu-show").on('click', function(){
                $(".mobile-menu .menu").toggleClass('active');
            });
			//scroll after fix head
            $('html').smoothScroll(700);
             $("#header").sticky({ topSpacing: 0 });


  });
