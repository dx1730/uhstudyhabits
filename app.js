const pages = document.querySelectorAll(".page");
const translateAmount = 100; 
let translate = 0;

var pro = 0;
var ind = 0;
var dist = 0;
var calm = 0;

hslide = (direction, res) => {
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
        pages => (pages.style.transform = `translateX(${translate}%)`)
    );
}

vslide = (direction) => {
    direction === "next" ? translate -= translateAmount : translate += translateAmount;
    pages.forEach(
        pages => (pages.style.transform = `translateY(${translate}%)`)
    );
}

// Edit pg 2 on beverage
function bev(drink) {
    document.getElementById("bev").innerHTML = "The warmth you feel in your soul brings you comfort, and reminds you why you love " + drink + " so much.";
}

// test jump to new page
// function test() {
//     window.location.href="sample.html";
// }
