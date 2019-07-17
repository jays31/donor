var pageInitialized = false;
$('[data-toggle="tooltip"]').tooltip();
// var globalid = null;


       $(function() {
        if(pageInitialized) return;
        pageInitialized = true;   
        var geturl = "http://localhost:1337/minventory2/";
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", geturl, false ); // false for synchronous request
        xmlHttp.send(null);
        var tdata = xmlHttp.responseText;
        var Actions = '<td><a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a><a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a><a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a></td>';
        // document.getElementById('para').innerHTML = tdata;
        var parsetdata = $.parseJSON(tdata);
        for( var i=0,len=parsetdata.length; i<len; ++i){
            var item=parsetdata[i];
            $('<tr>').append("<td>" + item.name + "</td><td>" + item.quantity + "</td>" + Actions).appendTo('#mtable');
        }
    });




	$(document).on("click", ".add-new", function(){
        var Actions = '<td><a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a><a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a><a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a></td>';
        // var Actions = $("table td:last-child").html();
		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="Name" id="Name"></td>' +
            '<td><input type="text" class="form-control" name="Quantity" id="Quantity"></td>' +
			Actions + '</tr>';
    	$("table").append(row);		
		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
        // var getname=document.getElementById("Name").value;
        // var getquantity=document.getElementById("Quantity").value;
        // var addurl = "http://localhost:1337/minventory/create?name="+getname+"&quantity="+getquantity;
        // var xmlHttp = new XMLHttpRequest();
        // xmlHttp.open( "GET", addurl, false ); // false for synchronous request
        // xmlHttp.send(null);
    });
    
    // Add row on add button click
	$(document).on("click", ".add", function(){
        var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true;
			} else{
                $(this).removeClass("error");
            }
            });
        var getname=document.getElementById("Name").value;
        var getquantity=document.getElementById("Quantity").value;
        var addurl = "http://localhost:1337/minventory2/create?name="+getname+"&quantity="+getquantity;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", addurl, false ); // false for synchronous request
        xmlHttp.send(null);	
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
            // var getname=document.getElementById("Name").value;
            // var getquantity=document.getElementById("Quantity").value;
            // var patchurl = "http://localhost:1337/minventory/"+globalid;
            // var xmlHttp = new XMLHttpRequest();
            // var params = {"name":getname,"quantity":getquantity};
            // xmlHttp.open( "PATCH", patchurl, false ); // false for synchronous request
            // xmlHttp.send(JSON.stringify(params));	
		    // $(this).parents("tr").find(".error").first().focus();
              
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".add, .edit").toggle();
            $(".add-new").removeAttr("disabled");
            var getname=document.getElementById("Name").value;
        var getquantity=document.getElementById("Quantity").value;
        var addurl = "http://localhost:1337/minventory2/create?name="+getname+"&quantity="+getquantity;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", addurl, false ); // false for synchronous request
        xmlHttp.send(null);
            
            
        }
        // var getname=document.getElementById("Name").value;
        // var getquantity=document.getElementById("Quantity").value;
        // var addurl = "http://localhost:1337/minventory/create?name="+getname+"&quantity="+getquantity;
        // var xmlHttp = new XMLHttpRequest();
        // xmlHttp.open( "GET", addurl, false ); // false for synchronous request
        // xmlHttp.send(null);
        		
    });
	// Edit row on edit button click
	$(document).on("click", ".edit", function(){		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
		$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
        $(".add-new").attr("disabled", "disabled");
        // var row = $(this).closest('tr').find('td:first-child').html();
        // alert(row);
        // var getname=document.getElementById("Name").value;
        // var getquantity=document.getElementById("Quantity").value;
        // var geturl = "http://localhost:1337/minventory?name="+row;
        // var xmlHttp = new XMLHttpRequest();
        // xmlHttp.open( "GET", geturl, false ); // false for synchronous request
        // xmlHttp.send(null);
        // var tdata = xmlHttp.responseText;
        // var parsetdata = $.parseJSON(tdata);
        // globalid=parsetdata[0].id;
        // var getname=document.getElementById("Name").value;
        // var getquantity=document.getElementById("Quantity").value;
        // var addurl = "http://localhost:1337/minventory/create?name="+getname+"&quantity="+getquantity;
        // var xmlHttp = new XMLHttpRequest();
        // xmlHttp.open( "GET", addurl, false ); // false for synchronous request
        // xmlHttp.send(null);
    });
	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        // var row = $(this).closest('tr').children('td').text();
        var row = $(this).closest('tr').find('td:first-child').html();
        // alert(row);
        // var getname=document.getElementById("Name").value;
        // var getquantity=document.getElementById("Quantity").value;
        var geturl = "http://localhost:1337/minventory2?name="+row;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", geturl, false ); // false for synchronous request
        xmlHttp.send(null);
        var tdata = xmlHttp.responseText;
        var parsetdata = $.parseJSON(tdata);
        var id=parsetdata[0].id;
        // alert(id);
        var delurl = "http://localhost:1337/minventory2?id="+id;
        var xmlHttp2 = new XMLHttpRequest();
        xmlHttp2.open( "DELETE", delurl, false ); // false for synchronous request
        xmlHttp2.send(null);
        $(this).parents("tr").remove();
        $(".add-new").removeAttr("disabled");
        
    });
// });

// https://www.tutorialrepublic.com/snippets/preview.php?topic=bootstrap&file=table-with-add-and-delete-row-feature
