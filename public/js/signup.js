$(document).ready(() => {
    $('#studentID').val(new URLSearchParams(window.location.search).get('studentID'));
    // var submitButtonPress = false;
    // function validateInput(input) {
    //     if (input.checkValidity()) {
    //         $(input).addClass('is-valid');
    //         $(input).removeClass('is-invalid');
    //         return true;
    //     } else {
    //         $(input).addClass('is-invalid');
    //         $(input).removeClass('is-valid');
    //         return false;
    //     };
    // }
    // function validateSignupForm(doUpdate = false) {
    //     // console.log($('.signup-form')[0].elements);
    //     if (doUpdate) {
    //         $('.signup-form').addClass('was-validated');
    //     }
    //     return $('.signup-form')[0].checkValidity();
    // };
    // $('#signup-submit-button').click((e) => {
    //     // console.log(validateSignupForm(true));
    //     if (!validateSignupForm(true)) {
    //         e.preventDefault();
    //         submitButtonPress = true;
    //     } else {
    //         e.preventDefault();
    //         $(".signup-form").submit();
    //     }
    // });
    // $('.signup-form input').keyup((e) => {
    //     validateSignupForm(submitButtonPress);
    // });
});
