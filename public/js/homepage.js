$(document).ready(() => {
    // $('#entry-signup, nav').hide();
    setTimeout(function() {
        $("nav, #entry-signup").fadeIn('slow');
    }, 1000);

    $('#signup-button').click(function(e) {
        e.preventDefault();
        console.log("/signup?studentID=" + $("#studentID").val());
        // window.location = "/signup?studentID=" + $("#studentID").val();
    });
});
