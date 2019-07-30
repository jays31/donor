$(document).ready(function () {

    $("#ForgetSuccessModal").on('hide.bs.modal', function () {
        if ($("#modalTitle").html() == 'Success')
            window.location.href = "index.html";
    });
    $('#btnGetSecurityCode').click(function () {

        $("#frmGetSecurityCode").submit();
        let isValid = true;
        $('.form-group').each(function () {
            if ($(this).hasClass('has-error')) {
                isValid = false;
            }
        });
        if (isValid) {
            $("#txtEmail").attr('disabled', true);
            $("#btnGetSecurityCode").attr('disabled', true);
            $("#txtSecurityCode").prop('disabled', false);
            populateModal("ForgetSuccessModal", "Action Required", "Please check your email. A security code has been sent on your email.");

        }

    });

    $("#btnSubmitSecurityCode").click(function () {
        $("#frmGetSecurityCode").submit();
        let isValid = true;
        $('.form-group').each(function () {
            if ($(this).hasClass('has-error')) {
                isValid = false;
            }
        });
        if (isValid) {
            $("#step1").fadeOut(500);
            $("#step2").fadeIn(500);
        }

    });

    $("#frmSubmitNewPassword").submit(function (e) {
        e.preventDefault();
        let isValid = true;
        $('.form-group').each(function () {
            if ($(this).hasClass('has-error')) {
                isValid = false;
            }
        });
        if (isValid) {
            populateModal("ForgetSuccessModal", "Success", "Successfully Changed Password");

        }

    });
    // http://bootstrapValidator.votintsev.ru/getting-started/
    $('#frmGetSecurityCode').bootstrapValidator({
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please enter an email address. '
                    },
                    emailAddress: {
                        message: 'Please enter a valid email address. '
                    }
                }
            },
            txtSecurityCode: {
                validators: {
                    notEmpty: {
                        message: 'Please enter the security code. '
                    }
                }

            }

        }
    });
    // http://bootstrapValidator.votintsev.ru/getting-started/
    $('#frmSubmitNewPassword').bootstrapValidator({
        fields: {
            txtPassword: {
                validators: {
                    notEmpty: {
                        message: 'Please enter a password. '
                    },

                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters. '
                    }
                }
            },
            txtConfirmPassword: {
                validators: {
                    notEmpty: {
                        message: 'Please enter a password. '
                    },

                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters. '
                    },
                    identical: {
                        field: 'txtPassword',
                        message: 'The password and its confirm are not the same'
                    }
                }
            }

        }
    });


});