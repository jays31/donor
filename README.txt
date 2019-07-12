# Assignment 4 (Amirul Sunesara B00813456)

## Features
There were two features choosed in assignment 3
1) Dashboard.
2) Reports: (View report and download). 

In assignment 4, for back-end implementation, report feature is selected.

## Feature Completeness

The report feature provides user with a mechanism to view report and download. User can view report by specifying 'from date' and 'to date' then pressing view report button. User can either choose to view inventory report or reservation report between these two dates. Once user viewed the choosen report, user will then able to download this report.

All functions specified above are implemented including form validation and validation messages.

----
## Deployment Description
The application is based on Node.js hosted on bluenose with following URL
> http://129.173.22.35:20011/

----
## Source code on GitLab
Source code for 'view report and download' feature can be found in branch "amirulSunesara".
> https://git.cs.dal.ca/jays/donor.git

----
## Important Note
Inventory and reservation records were manually inserted in database for the month of july. Therefore, to view reservation and inventory reports, specify date between 2019-07-01 and 2019-07-31.

----

## Folder Structure
Web service and web application are standalone and deployed separately on bluenose. Since the application is developed on sails.js, the folder structure follows different hierarchy.
### Web Service
- Controllers:
>  WebService -> API -> Controllers
- Models: 
> WebService -> API -> Models
### Web Application
- CSS: 
> WebApplication -> Assets -> styles
- Javascript files: 
> WebApplication -> Assets -> js
- HTML (.ejs files): 
> WebApplication -> views -> layouts\
> WebApplication -> views -> pages


----
## Database

A centralized MySQL database is hosted on Azure cloud platform. 

----
## Code Sources
- Donor+ theme (layout): To make overall design of application consistent, our team agreed upon using Jay Sharma's theme which he implemented in assignment 2. We will be using this theme in every page with slight modifications in screens after login success. 
- JqueryUI Date Picker: https://jqueryui.com/datepicker/ 
This source was used to check the syntax of jquery UI datepicker. The line is modified with 'from date' and 'to date' fields.

````
$( function() {
    $( "#fromDate" ).datepicker({ dateFormat: 'yy-mm-dd' });
    $( "#toDate" ).datepicker({ dateFormat: 'yy-mm-dd' });
});

````
- JsPDF for converting HTML to pdf report: https://github.com/MrRio/jsPDF \
This source was used to give functionality of downloading report. The code is modified with text name and file name in text() and save() function.

````
doc = new jsPDF();
doc.setFontSize(24);
doc.text(20, 20, 'Inventory Report');
var dt = new Date();
doc.setFontSize(13);
doc.text(20, 30, 'Generated on ' + dt.getDate() + ' ' + months[dt.getMonth()] + ' ' + dt.getFullYear() + ' ' + dt.getHours() + ':' + dt.getMinutes());
                               
```` 
- Js-PDF Autotable: https://github.com/simonbengtsson/jsPDF-AutoTable. This source is extension to jsPDF API and it was used to to beautify the report tables. Following source code is modified and implemented in report.js file. The code is customized by changing head attributes and passing value to body from array. 
````
doc.autoTable({
startY: 40,
head: [['Reservation Number', 'Reserved By', 'Reserved Items', 'Reserved on (yyyy-mm-dd)']],
body: arrBody

});
````
- Bootstrap Modal for validation popup: https://getbootstrap.com/docs/4.0/components/modal/  
This source code is a template for bootstrap modal, which is implemented in report.ejs file. This code is modified with setting id so that javascript function named showModal() can dynamically change the text of modal title and body.

````
<div class="modal fade" id="validationModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitle">title</h5>
                </div>
                <div class="modal-body" id="modalBody">
                 
                </div>
                <div class="modal-footer">
                    <button type="button" data-dismiss="modal" class="btn btn-primary">Ok</button>
                </div>
            </div>
        </div>
</div>

````
````
function showModal(title, body) {
    $('#modalTitle').html(title);
    $('#modalBody').html(body);
    $('#validationModal').modal('show');

}

````
- Bootstrap navigation bar: https://getbootstrap.com/docs/4.0/components/navbar/ 
This source provides template for sample navigation bar. This code is not entirely used. However, the code of navigation items is customized and implemented in layout.ejs file.

````

````
- HTML date pattern (YYYY-MM-DD) : http://html5pattern.com/Dates
This source does not provide any source code but provides a guide to implement date pattern in HTML form.

- Sails.js - Models: https://sailsjs.com/documentation/concepts/models-and-orm/models
This source was only used to get to know the syntax of models in sails.js. The code was then written from scratch.

- Sails.js - Controllers: https://sailsjs.com/documentation/concepts/actions-and-controllers
This source was only used to learn the syntax of controllers in sails.js. The code was then written from scratch.

- Sails.js - Find() function: https://sailsjs.com/documentation/reference/waterline-orm/models/find
This source was only used to learn the syntax of find function in sails.js. The code was then written from scratch.



----
## Test Cases
- From date and To Date fields are mandatory for querying reports.
- 'From date' must be less than 'To date'.
- Prompt message if there are no reservations and inventory items exist in specified date.
- Front-end of reports screen must be w3c compliant.

