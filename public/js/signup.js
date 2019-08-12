$(document).ready(() => {
    $('#studentID').val(new URLSearchParams(window.location.search).get('studentID'));
    function validateSignupForm() {
        console.log($('.signup-form')[0].elements);
        for (let input of $('.signup-form')[0].elements) {
            console.log(input.checkValidity());
            if (input.checkValidity()) {
                $(input).addClass('is-valid');
                $(input).removeClass('is-invalid');
            } else {
                $(input).addClass('is-invalid');
                $(input).removeClass('is-valid');
            };
        }
        // console.log($('.signup-form')[0].checkValidity());
    };
    validateSignupForm();
});
