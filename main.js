var menu = ["Pepperoni Pizza", "Cheesy Pizza", "Veg Pizza"]

function getMenu() {
    var data;
    data = "<ol class='menulist'>";
    menu.sort();
    for (var i = 0; i < menu.length; i++) {
        data = data + '<li>' + menu[i] + '</li>';
        
    }
    data = data + "</ol>";
    document.getElementById("menu_display").innerHTML = data;
}

function add_item() {
    var newdata;
    var item = document.getElementById("add_item").value;
    menu.push(item);
    menu.sort();
    console.log(menu);
    newdata = "<section class='cards'>";
    for (var i = 0; i < menu.length;  i++) {
        newdata = newdata + '<div class="card">' + '<img src="images/pizzaImg.png">' + menu[i];
        
    }
    newdata = newdata + "</div>" + "</section>";
    document.getElementById("display_addedmenu").innerHTML = newdata;
}
