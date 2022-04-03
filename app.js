const pages = document.querySelectorAll(".page");
const translateAmount = 200; 
let translate = 0;

var pro = 0;
var ind = 0;
var dist = 0;
var calm = 0;

vslide = (direction, res) => {
    if (res == 'pro') {
        pro++;
        console.log("pro: " + pro);
    } else if (res == 'ind') {
        ind++;
        console.log("ind: " + ind);
    } else if (res == 'dist') {
        dist++;
        console.log("dist: " + dist);
    } else if (res == 'calm') {
        calm++;
        console.log("calm: " + calm);
    }

    direction === "next" ? translate -= translateAmount : translate += translateAmount;
    pages.forEach(
        pages => (pages.style.transform = `translateY(${translate}%)`)
    );
}

hslide = (direction) => {
    direction === "next" ? translate -= translateAmount : translate += translateAmount;
    pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
    );
}

// Edit pg 2 on beverage
function bev(drink) {
    if (drink == 'coffee' || drink == 'tea'){
        document.getElementById("bev").innerHTML = "The warmth you feel in your soul brings you comfort, and reminds you why you love " + drink + " so much.";
    } else {
        document.getElementById("bev").innerHTML = "The coolness you feel in your soul sharpens your mind, and reminds you why you love " + drink + " so much.";
    }
}

// Location functionality
function loc(choice) {
    var l = "";
    if (choice == "A") {
        l = "the A level";
    } else if (choice == "B") {
        l = "crerar";
    } else if (choice == "C") {
        l = "harper";
    } else {
        l = "home";
    }
    var msg = " " + l + " ";
    document.getElementById("loc1").innerHTML = msg;
    document.getElementById("loc2").innerHTML = msg;
    document.getElementById("loc3").innerHTML = msg;
 }

// test jump to new page
// function test() {
//     window.location.href="sample.html";
// }
