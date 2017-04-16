var sidebarActive = false;

		$(document).ready(function() {
			$(document).on("scroll", onScroll);

			//smoothscroll
			$('a[href^="#"]').on('click', function(e) {
				e.preventDefault();
				$(document).off("scroll");

				var target = this.hash,
					$target = $(target);
				$('html, body').animate({
					'scrollTop': $target.offset().top + 2
				}, 200, 'swing', function() {
					window.location.hash = target;
					$(".scroll-indicator").removeClass("showindicator");
					$(document).on("scroll", onScroll);
				});
			});
		});

		function onScroll(event) {
			var scrollPos = $(document).scrollTop();
			if ($("header").position().top + $("header").height() <= scrollPos) {
				$(".scroll-indicator").addClass("showindicator");

				if (!sidebarActive) {
					sidebarActive = true;
					$(".scroll-indicator").animate({
						opacity: 0.8
					}, 20, "swing");
				}
			} else {
				sidebarActive = false;
				$(".scroll-indicator").css("opacity", "0");
				$(".scroll-indicator").removeClass("showindicator");
			}
		}