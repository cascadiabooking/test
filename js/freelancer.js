/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function getFormSubmitURL(){
	var base64_email = "Y29udGFjdEBjYXNjYWRpYS5hZw==";
	return "https://formspree.io/" + atob(base64_email);
}

function showAlert($container, $alert){
	$container.empty().append($alert);
}

function submitContactForm($contactForm){
	var $alertContainer = $(".page-contact--alert-container"),
			$submitButton = $contactForm.find('[type="submit"]');

	$.ajax({
		url: getFormSubmitURL(),
		method: "POST",
		data: $contactForm.serialize(),
		dataType: "json",
		beforeSend: function(){
			$submitButton.attr("disabled", true);
			showAlert($alertContainer, '<div class="alert"><i class="fa fa-spin fa-spinner"></i>Sending message...</div>');
		},
		success: function(data){
			$submitButton.attr("disabled", false);
			showAlert($alertContainer, '<div class="alert success"><i class="fa fa-check-circle"></i>Message sent.</div>');
			$contactForm.trigger("reset");
		},
		error: function(err){
			$submitButton.attr("disabled", false);
			showAlert($alertContainer, '<div class="alert danger"><i class="fa fa-times-circle"></i>Something went wrong. Try again.</div>');
		}
	});
};
