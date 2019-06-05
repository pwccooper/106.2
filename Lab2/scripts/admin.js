
var serverURL = "http://restclass.azurewebsites.net";

function Item(title,description, price, category, image) {
    this.title =  title;
    this.desription = description;
    this.price = price;
    this.category = category;
    this.image = image;
    this.user = "Paul";
}

function register(){
    console.log("Creating new products");

    var title = $("#txtTitle").val();
    var desc = $("#txtDescription").val();
    var price = $("#txtPrice").val();
    var category = $("#txtCategory").val();
    var image = $("#txtImage").val();

    var anItem = new Item(title, desc, price, category, image);
    console.log(anItem);

    $.ajax({
        url: serverURL +"/API/points", 
        type: "POST", 
        contentType: "application/json", 
        data: JSON.stringify(anItem), 
        success: function(res) {

            console.log("server says:", res);
        },

        error: function (error) {

            console.error(error);
        }
    });
}

function search(){
    var text = $("#txtSearch").val();
    console.log("Searching for: " + text);

    $("#catalog").html("");

    for (var i = 0; i < items.length; i++){
        var items = items[i];

        var lowerTitle = item.title.toLowerCase();
        var lowerSearch = text.toLowerCase();

        if (lowerTitle.indexOf(LowerSearch) >= 0) {
            displayProduct(item);
        }   
    }
}



function readTest() {
    $.ajax({
        url: serverURL + "/API/test",
        type: "GET", 
        success: function (res) {
           
            console.log(res);
        },
        error: function (error) {
           
            console.error(error);
        }
    });
}



function init(){
    console.log("Admin page loaded");

    $("#btnSave").click(register);
    
}

window.onload = init;