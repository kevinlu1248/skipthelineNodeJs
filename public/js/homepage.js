$(document).ready(() => {
    // $('#entry-signup, nav').hide();
    setTimeout(function() {
        $("nav, #entry-signup").fadeIn('slow');
    }, 1000);

    $('#studentID').keydown(function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            // console.log("signup?studentID" + $("#studentID").val());
            window.location = "signup?studentID=" + $(this).val();
        }
    });

    $('#signup-button').click(function() {
        // console.log("signup?studentID" + $("#studentID").val());
        window.location = "signup?studentID=" + $("#studentID").val();
    });
});
