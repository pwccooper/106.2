var serverURL = "http://restclass.azurewebsites.net";

var items = [{
        title: "Alienware",
        description: "Expensive gaming desktop",
        price: "2,500.00",
        category: "Desktop",
        image: "images/desktop.png"
    },
    {
        title: "AOC",
        description: "Not so expensive desktop",
        price: "1,250.00",
        category: "Desktop",
        image: "images/desktop1.png"
    },
    {
        title: "Razor Laptop",
        description: "More expensive laptop",
        price: "1,800.00",
        category: "Laptop",
        image: "images/laptop1.png"
    },
    {
        title: "Lenovo Laptop",
        description: "Not as expensive laptop",
        price: "1200.00",
        category: "Laptop",
        image: "images/laptop.png"
    },
];

function displayCatalog() {


    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        displayProduct(item);
    }
}

function importCatalog() {

    $.ajax({
        url: serverURL + "/API/points",
        type: "GET",
        success: function (res) {
            console.log(res);

            for (var i = 0; i < res.length; i++) {
                var p = res[i];
                console.log(p);
                if (p.user == "Paul") {
                    items.push(p);
                }
            }
            displayCatalog();
        },
        error: function (error) {
            console.log("** ERRRR", error);
        }

    });
    console.log("We're floatin!");
}


function displayProduct(item) {
    var divContainer = $("#catalog");
    var syntax =
        `<div class='item'>  
            <img src="${ item.image}">
            <h5>${ item.title}</h5>
            <label>${ item.description}</label>
            <br>
            <h6>$ ${ item.price}</h6>
            <button class="btn btn-sm btn-info"> Add to Cart</button>
        </div>`;

    divContainer.append(syntax);
}

function search() {
    var text = $("#txtSearch").val();
    console.log("Searching for: " + text);


    $("#catalog").html("");

    for (var i = 0; i < items.length; i++) {
        var item = items[i];

        if (item.title.indexOf(text) >= 0) {

            displayProduct(item);
        }
    }
}

function init() {

    $("#btnSearch").click(search);



    importCatalog();

}




window.onload = init;