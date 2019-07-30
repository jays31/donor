# Group Project

## Members
1. B00824331: Jay Sharma - jay.sharma@dal.ca
2. B00813456: Amirul Sunesara - amirul.sunesara@dal.ca
3. B00824757: Zeel Patel - zl336947@dal.ca
4. B00791584: Dinesh Sai - dn660769@dal.ca
5. B00418947: Jonathan Harris - jonathan.harris@dal.ca

----
## Important Notes
- To login , please use the username : admin@fake.com and password: admin
- To access the Dashboard pages, you need to login with the above credentials.
- Examples given in Bootstrap's documentation were referred to develop the web application.
- Code has been commented to include the references.
- Project structure was kept the same as demonstrated in Tutorial 2.
- Tutorial 2 was also used to integrate Google Maps API in location search.

----
#### Frameworks used - Bootstrap

> We as a team chose Bootstrap mainly because it is responsive and mobile-first. The html,css and javascript framework which bootstrap provides saves a lot of time while development. Bootstrap also offers cutomizability which adjusts as per our project's requirements. Bootstrap is compatible with HTML5 and CSS3 and its grid system of layout offers a great degree of flexibility to align icons. Our design phase of DoRe includes extensive list of components and bootstrap helps us to style and code these components well.

----
#### API's used - Google Maps Javascript API

> In our design phase we decided to provide the flexibility to user to enter the address manually while creating a post or pick from google maps. In order to integrate this feature and embed google maps into website, I have used Google Maps Javscript API. This allows a user to pick a location on the map using a marker or enter some location details in a text box and search for it. In both the cases an address text box will be populated with the address picked. Contrary to that, user can enter the address manually in the adress text box too.

----

#### Important Code Snippets
Google Maps Location Picker
````    
    google.maps.event.addListener(marker, "dragend", function () {
    var point = marker.getPosition();
    map.panTo(point);
    geocoder.geocode({'latLng': marker.getPosition()}, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
    map.setCenter(results[0].geometry.location);
    marker.setPosition(results[0].geometry.location);
    $('.search_addr').val(results[0].formatted_address);
}
});
});

google.maps.event.addListener(marker, 'drag', function () {
        geocoder.geocode({'latLng': marker.getPosition()}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    $('.search_addr').val(results[0].formatted_address);
                }
            }
        });
    });
````
source: https://www.codexworld.com/autocomplete-location-search-box-google-maps-javascript-api-jquery-ui/
> This code was used to display google maps with a marker and allow a user to search to pick the address through marker. The original code was modified to give user the flexibility to enter the address manully and by creating a separate textbox in which the address can be populated from the maps or entered manually.

----
#### Test Cases
> Front-end has been valdiates with the W3C validator to verify its accuracy, hence avoiding any errors and making the pages W3C compliant.

> Login Validation
Both the username and password field are marked mandatory. 

>Sign-up Validation
All the fileds on the sign-up page are mandatory and form-validation is in place.

----
#### Responsive Check
All the pages are completely responsive which means it fits perfectly in smaller screen sizes of any ratio. Moreover, cross browser testing has been perfomed to check the webpages are compatible on various web browsers (Google Chrome, Mozilla Firefox, Microsoft Edge).

----

## Code Sources

[1] a. Mark Otto, "Buttons", Getbootstrap.com, 2019. [Online]. Available: https://getbootstrap.com/docs/4.0/components/buttons/. [Accessed: 19- Jun- 2019].
[2] a. Mark Otto, "Cards", Getbootstrap.com, 2019. [Online]. Available: https://getbootstrap.com/docs/4.0/components/card/. [Accessed: 19- Jun- 2019].
[3] a. Mark Otto, "Dropdowns", Getbootstrap.com, 2019. [Online]. Available: https://getbootstrap.com/docs/4.0/components/dropdowns/. [Accessed: 19- Jun- 2019].
[4] a. Mark Otto, "Grid system", Getbootstrap.com, 2019. [Online]. Available: https://getbootstrap.com/docs/4.0/layout/grid/. [Accessed: 19- Jun- 2019].
[5] "Bootstrap Grid Basic", W3schools.com, 2019. [Online]. Available: https://www.w3schools.com/bootstrap/bootstrap_grid_basic.asp. [Accessed: 19- Jun- 2019].
[6] "Bootstrap 4 Cheat Sheet - The ultimate list of Bootstrap classes", Hackerthemes.com, 2019. [Online]. Available: https://hackerthemes.com/bootstrap-cheatsheet/#btn-outline-light. [Accessed: 19- Jun- 2019].
[7] "The W3C Markup Validation Service", Validator.w3.org, 2019. Available: https://validator.w3.org/.
[8] "Daily Bread Food Bank", Dailybread.ca, 2019. Available: https://www.dailybread.ca/.
