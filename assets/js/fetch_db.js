function fetch_name(id) {
    var geturl = "https://donorplus.azurewebsites.net/minventory3?id=" + id;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var name = parsetdata[0].name;
    return (name)
}
function fetch_available(id) {
    var geturl = "https://donorplus.azurewebsites.net/minventory3?id=" + id;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var quantity = parsetdata[0].quantity;
    return (quantity)
}