//https://bootstrap-datepicker.readthedocs.io/en/latest/
$(function () {
    $("#datepicker").datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());
    $("#datepicker1").datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());
});
$(document).ready(function(){

    $('#downloadReport').submit(function(e) {
        e.preventDefault();

    });

});