$(document).ready(function(){

   $("#signUpAsFoodDonor").click(function () {
        $("#lblSignupHeading").html("Signup as Donor");
        $("#buttons").fadeOut(500);
        $("#donor").fadeIn(500);
       adjustFooter();

   });
    $("#signUpAsConsumer").click(function () {
        $("#lblSignupHeading").html("Signup to reserve food");
        $("#buttons").fadeOut(500);
        $("#consumer").fadeIn(500);

    });

    // http://bootstrapvalidator.votintsev.ru/getting-started/
    $('#RegisterDonor').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            txtUserName: {
                message: 'The username is not valid. ',
                validators: {
                    notEmpty: {
                        message: 'Please enter a username. '
                    },
                    stringLength: {
                        max: 20,
                        min: 5,
                        message: 'The username cannot be less than 5 and more than 20 characters long. '
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9]+$/,
                        message: 'The username can only consist of alphabetical and number. '
                    },
                    different: {
                        field: 'password',
                        message: 'The username and password cannot be the same as each other. '
                    }
                }
            },
            txtFirstName: {
                message: 'The first name is not valid. ',
                validators: {
                    notEmpty: {
                        message: 'Please enter your first name. '
                    },
                    stringLength: {
                        max: 40,
                        message: 'The name cannot exceed length of 40 characters. '
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'The first name can only consist of alphabets. '
                    }

                }
            },
            txtLastName: {
                message: 'The last name is not valid. ',
                validators: {
                    notEmpty: {
                        message: 'Please enter your last name. '
                    },
                    stringLength: {
                        max: 40,
                        message: 'The first name cannot exceed length of 40 characters. '
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'The last name can only consist of alphabets. '
                    }

                }
            },
            txtEmail: {
                validators: {
                    notEmpty: {
                        message: 'Please enter an email address. '
                    },
                    emailAddress: {
                        message: 'Please enter a valid email address.'
                    }
                }
            },
            txtPassword: {
                validators: {
                    notEmpty: {
                        message: 'Please enter a password. '
                    },
                    different: {
                        field: 'username',
                        message: 'The password cannot be the same as username. '
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
                    different: {
                        field: 'username',
                        message: 'The password cannot be the same as username. '
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
            },
            txtBusinessName: {
                message: 'The business name is not valid. ',
                validators: {
                    notEmpty: {
                        message: 'Please enter your business name. '
                    },
                    stringLength: {
                        max: 50,
                        message: 'The business name cannot be more than 50 characters long. '
                    },

                }
            },
            txtAddressLine2: {
                message: 'The address is not valid. ',
                validators: {
                    notEmpty: {
                        message: 'Please enter your address. '
                    },
                    stringLength: {
                        max: 120,
                        message: 'The address cannot be more than 120 characters long. '
                    },

                }
            }

        }
    });
   // http://bootstrapvalidator.votintsev.ru/getting-started/
    $('#RegisterConsumer').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            txtUserName: {
                message: 'The username is not valid. ',
                validators: {
                    notEmpty: {
                        message: 'Please enter a username. '
                    },
                    stringLength: {
                        max: 20,
                        min: 5,
                        message: 'The username cannot be less than 5 and more than 20 characters long. '
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9]+$/,
                        message: 'The username can only consist of alphabetical and number. '
                    },
                    different: {
                        field: 'password',
                        message: 'The username and password cannot be the same as each other. '
                    }
                }
            },
            txtFirstName: {
                message: 'The first name is not valid. ',
                validators: {
                    notEmpty: {
                        message: 'Please enter your first name. '
                    },
                    stringLength: {
                        max: 40,
                        message: 'The name cannot exceed length of 40 characters. '
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'The first name can only consist of alphabets. '
                    }

                }
            },
            txtLastName: {
                message: 'The last name is not valid. ',
                validators: {
                    notEmpty: {
                        message: 'Please enter your last name. '
                    },
                    stringLength: {
                        max: 40,
                        message: 'The first name cannot exceed length of 40 characters. '
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'The last name can only consist of alphabets. '
                    }

                }
            },
            txtEmail: {
                validators: {
                    notEmpty: {
                        message: 'Please enter an email address. '
                    },
                    emailAddress: {
                        message: 'Please enter a valid email address. '
                    }
                }
            },
            txtPassword: {
                validators: {
                    notEmpty: {
                        message: 'Please enter a password. '
                    },
                    different: {
                        field: 'username',
                        message: 'The password cannot be the same as username. '
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
                    different: {
                        field: 'username',
                        message: 'The password cannot be the same as username. '
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

    $('#RegisterConsumer').submit(function(e) {
        e.preventDefault();
        let isValid = true;
        $('.form-group').each(function(){
            if($(this).hasClass('has-error')){
               isValid = false;
            }
        });
        if(isValid)
            $("#SignupSuccessModal").modal('show');
    });
    $('#RegisterDonor').submit(function(e) {
        e.preventDefault();
        let isValid = true;
        $('.form-group').each(function(){
            if($(this).hasClass('has-error')){
               isValid = false;
            }
        });

        if(isValid)
            $("#SignupSuccessModal").modal('show');

    });

    $("#SignupSuccessModal").on('hide.bs.modal', function(){
       window.location.href = 'http://localhost:1337/';
    });
});
//https://developers.google.com/maps/documentation/javascript/places-autocomplete
function autocompleteAddress() {
    var  address = new google.maps.places.Autocomplete(
        (document.getElementById('txtAddressLine2')),
        {types: ['geocode']});
}