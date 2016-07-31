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

var $contactForm = $("#contact-form"),
	$submitButton = $contactForm.find('[type="submit"]');

$.ajax({
	url: getFormSubmitURL(),
	method: "POST",
	data: $contactForm.serialize(),
	dataType: "json",
	beforeSend: function(){
		/* Disable the submit button to prevent multiple submissions
		Tell the user that the form is sending */
		$submitButton.attr("disabled", true);
		console.log("Sending message...");
	},
	success: function(data){
		/* Enable the submit button
		Tell the user that their message was sent
		Clear all the form fields */
		$submitButton.attr("disabled", false);
		console.log("Message sent.");
		$contactForm.trigger("reset");
	},
	error: function(err){
		/* Enable the submit button
		Tell the user that the message failed to send */
		$submitButton.attr("disabled", false);
		console.log("Something went wrong. Try again.");
	}
});

