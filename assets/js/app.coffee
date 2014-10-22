$(document).ready () ->
	
	jQuery.easing.def = "easeInOutExpo"
	
	# $('.sticky-navbar').waypoint 'sticky'

	$("html, body").bind "scroll mousedown DOMMouseScroll mousewheel keyup", () -> 
		$('html, body').stop()
	
	$('#navigate-to').click (e) ->
		$("html,body").stop().animate { scrollTop: $('.info-text').offset().top }, 1000
		e.preventDefault()

	$('.brand-heading').waypoint(() ->
			if $('.sticky-navbar').hasClass 'sticky-hide'
				$('.sticky-navbar').removeClass 'sticky-hide'
			else
				$('.sticky-navbar').addClass 'sticky-hide'
		,{ offset: -150 })
