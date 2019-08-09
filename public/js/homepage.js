$(document).ready(() => {
    // $('#entry-signup, nav').hide();
    setTimeout(function() {
        $("nav, #entry-signup").fadeIn('slow');
    }, 1500);

    $('#signup-button').click(function() {
        window.location = "signup#" + $("#studentID").val();
    });
});
