    // Author: Jonathan Harris B00418947
	// This script served as a helpful example, and I drew on this tutorial throughout my assignment, as cited.
	// https://code.tutsplus.com/tutorials/working-with-data-in-sailsjs--net-31525
	// This was also helpful for importing jquery
	// https://www.quora.com/How-can-I-import-JQuery-into-my-js-file
	
	var script = document.createElement('script');
	script.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js';
	document.getElementsByTagName('head')[0].appendChild(script);
	
	$("#searchButton").click(function(){
        var query = $("#query").val();
            jQuery.post(
                '/results',
                {query: query},
				function () {
                    window.location = "/results";
                }
            ).fail(function(res){
                alert("Error: " + res.getResponseHeader("error"));
            });
        });