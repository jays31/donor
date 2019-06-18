(function($) {
    $.fn.IsScrollBarActive = function() {
       if(this.height() < this.get(0).scrollHeight)
        return false;
       else
           return true;
    }
})(jQuery);

function adjustFooter()
{
    $("#navBottom").removeClass('fixed-bottom');

}

function populateModal(id,title,text)
{
    $("#modalTitle").html(title);
    $("#modalText").html(text);
    $("#"+id).modal('show');
}

$(document).ready(function (){

$("#doLogin").submit(function (e) {
    e.preventDefault();
    let username = $("#MainUsername").val();
    let password = $("#MainPassword").val();

    if(username=="donor" && password =="donor12345")
    {
        $("#loginSuccessModal").modal('show');
    }
    else {
        $("#loginFailureModal").modal('show');
    }

});

    $("#loginSuccessModal").on('hide.bs.modal', function(){
        window.location.href = "dashboard.html";
    });
    $("#loginFailureModal").on('hide.bs.modal', function(){
        $("#MainUsername").val("");
        $("#MainPassword").val("");
    });
    $("#btnRedirectDashboard").click(function () {
        window.location.href = "dashboard.html";
    });
    $("#btnRedirectIndex").click(function () {
        $("#MainUsername").val("");
        $("#MainPassword").val("");
    });

});





