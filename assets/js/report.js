//Created By Amirul Sunesara B00813456


//-----------------------References-------------------//

//JqueryUI Date Picker: https://jqueryui.com/datepicker/
//JsPDF for converting HTML to pdf report: https://github.com/MrRio/jsPDF
//Js-PDF Autotable to beautify the report tables: https://github.com/simonbengtsson/jsPDF-AutoTable.
//Bootstrap Modal for validation popup: https://getbootstrap.com/docs/4.0/components/modal/

//---------------------------------------------------//




$( function() {
    //bind date picker to html elements
    $( "#fromDate" ).datepicker({ dateFormat: 'yy-mm-dd' });
    $( "#toDate" ).datepicker({ dateFormat: 'yy-mm-dd' });
});

//validate form on two buttons of view report
$("form input[type=submit]").click(function () {
    $("input[type=submit]", $(this).parents("form")).removeAttr("clicked");
    $(this).attr("clicked", "true");
});
var doc = new jsPDF();
var reportName = ''
$('#dlReport').click(function () {
    //prompt report to download
    doc.save(reportName+'.pdf');
});


$('#formReport').submit(function (e) {
    e.preventDefault();

    doc = new jsPDF();
    //initialize months array to get month name based on number
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // retrieve the button text of clicked button
    let buttonTxt = $("input[type=submit][clicked=true]").val();
    //logic for checking if from date is greater than to date
    if (new Date($('#fromDate').val()) > new Date($('#toDate').val())) {
        showModal('Invalid Input', 'From Date must be less than To date');

    }
    else {
        if (buttonTxt == 'View Inventory Report') {
            reportName = 'InventoryReport';
            $.ajax({
                type: "POST",
                url: window.location.origin + "/inventoryReport",
                data: JSON.stringify({ "fromDate": $('#fromDate').val(), "toDate": $('#toDate').val() }),
                dataType: "json",
                contentType: "application/json",
                crossDomain: true,
                success: function (obj) {
                    $('#dlReport').hide();
                    $('#tableData').html('');
                    //setting the parameters for report
                    doc.setFontSize(24);
                    doc.text(20, 20, 'Inventory Report');
                    var dt = new Date();
                    doc.setFontSize(13);
                    doc.text(20, 30, 'Generated on ' + dt.getDate() + ' ' + months[dt.getMonth()] + ' ' + dt.getFullYear() + ' ' + dt.getHours() + ':' + dt.getMinutes());
                    arrBody = [];

                    if (obj.length > 0) {
                        //dynamically generate table from backend
                        let html = '<table class="table table-bordered"><thead><tr><th>Name</th><th>Quantity</th></tr></thead><tbody>';
                        for (i = 0; i < obj.length; i++) {
                           
                            html = html + '<tr><th>' + obj[i].name + '</th><td>' + obj[i].quantity + '</td></tr>';
                            currArr = [obj[i].name, obj[i].quantity];
                            arrBody.push(currArr);
                            $('#dlReport').show();
                        }
                        html = html + '</tbody></table>';
                        //setting the paramters for table in report
                        doc.autoTable({
                            startY: 40,
                            head: [['Item Name', 'Quantity']],
                            body: arrBody
                        });
                        $('#dlReport').show();
                        $('#tableData').html(html);

                    }
                    else {
                        //if no records found then hide download report button and display message
                        $('#dlReport').hide();
                        showModal('Record not found', 'There are no items exist within specified duration');

                    }



                }

            });
        }
        else {
            reportName = "ReservationReport";
            $.ajax({
                type: "POST",
                url: window.location.origin + "/reservationReport",
                data: JSON.stringify({ "fromDate": $('#fromDate').val(), "toDate": $('#toDate').val() }),
                dataType: "json",
                contentType: "application/json",
                crossDomain: true,
                success: function (obj) {
                    //setting the parameters for report
                    $('#dlReport').hide();
                    $('#tableData').html('');
                    doc.setFontSize(24);
                    doc.text(20, 20, 'Reservation  Report');
                    var dt = new Date();
                    doc.setFontSize(13);
                    doc.text(20, 30, 'Generated on ' + dt.getDate() + ' ' + months[dt.getMonth()] + ' ' + dt.getFullYear() + ' ' + dt.getHours() + ':' + dt.getMinutes());
                    arrBody = [];

                    if (obj.length > 0) {
                        //dynamically generate table from backend
                        let html = '<table class="table table-bordered"><thead><tr><th>Email</th><th>Store</th></tr></thead><tbody>';
                        for (i = 0; i < obj.length; i++) {
                           
                            html = html + '<tr><th>' + obj[i].email + '</th><td>' + obj[i].store + '</td></tr>';
                            currArr = [obj[i].email, obj[i].store];
                            arrBody.push(currArr);
                            $('#dlReport').show();
                        }
                        html = html + '</tbody></table>';
                        //setting the paramter for table in report
                        doc.autoTable({
                            startY: 40,
                            head: [['Email', 'Store']],
                            body: arrBody
                        });
                        $('#dlReport').show();
                        $('#tableData').html(html);

                    }
                    else {

                        $('#dlReport').hide();
                        showModal('Record not found', 'There are no reservation exist within specified duration');

                    }



                }
            });
        }
    }


});

//popup modal with validation message
function showModal(title, body) {
    $('#modalTitle').html(title);
    $('#modalBody').html(body);
    $('#validationModal').modal('show');

}
