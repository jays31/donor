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
                url: "http://129.173.22.35:20008/inventoryReport",
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
                        let html = '<table class="table table-bordered"><thead><tr><th>Item Number</th><th>Item Name</th><th>Category</th><th>Quantity</th><th>Weight</th><th>Date Added (yyyy-mm-dd)</th></tr></thead><tbody>';
                        for (i = 0; i < obj.length; i++) {
                            if (obj[i].weight == null) {
                                obj[i].weight = 'Not Applicable'
                            }
                            obj[i].date_added = obj[i].date_added.split('T')[0];
                            html = html + '<tr><th>' + obj[i].item_number + '</th><td>' + obj[i].item_name + '</td><td>' + obj[i].category + '</td><td>' + obj[i].quantity + '</td><td>' + obj[i].weight + '</td><td>' + obj[i].date_added + '</td></tr>';
                            currArr = [obj[i].item_number, obj[i].item_name, obj[i].category, obj[i].quantity, obj[i].weight, obj[i].date_added];
                            arrBody.push(currArr);
                            $('#dlReport').show();
                        }
                        html = html + '</tbody></table>';
                        //setting the paramters for table in report
                        doc.autoTable({
                            startY: 40,
                            head: [['Item Number', 'Item Name', 'Category', 'Quantity', 'Weight', 'Date Added (yyyy-mm-dd)']],
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
                url: "http://129.173.22.35:20008/reservationReport",
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
                        let html = '<table class="table table-bordered"><thead><tr><th>Reservation Number</th><th>Reserved By</th><th>Reserved Items</th><th>Reserved on (yyyy-mm-dd)</th></tr></thead><tbody>';
                        for (i = 0; i < obj.length; i++) {
                            if (obj[i].weight == null) {
                                obj[i].weight = 'Not Applicable'
                            }
                            obj[i].reserved_on = obj[i].reserved_on.split('T')[0];
                            html = html + '<tr><th>' + obj[i].reservation_number + '</th><td>' + obj[i].reserved_by + '</td><td>' + obj[i].reserved_items + '</td><td>' + obj[i].reserved_on + '</td></tr>';
                            currArr = [obj[i].reservation_number, obj[i].reserved_by, obj[i].reserved_items, obj[i].reserved_on];
                            arrBody.push(currArr);
                            $('#dlReport').show();
                        }
                        html = html + '</tbody></table>';
                        //setting the paramter for table in report
                        doc.autoTable({
                            startY: 40,
                            head: [['Reservation Number', 'Reserved By', 'Reserved Items', 'Reserved on (yyyy-mm-dd)']],
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
