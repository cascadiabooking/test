<<<<<<< HEAD
function getFormSubmitURL(){
	var base64_email = "cmFuc2FuMzJAeWFob28uY29t";
	return "//formspree.io/" + atob(base64_email);
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
=======
$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },

        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});



>>>>>>> origin/master
