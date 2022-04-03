const pages = document.querySelectorAll(".page");
const translateAmount = 200; 
let translate = 0;

var pro = 0;
var ind = 0;
var dist = 0;
var calm = 0;

var test = "hello, world!";

var $jqName = $('.name');
var $jqValue = $('.jqValue');

$jqName.on('input', function(event){
  $jqValue.html($jqName.val());
});


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
    if (drink == 'coffee') {
        document.getElementById("p10").innerHTML = "Interestingly, the last thing you remember is the rich taste of the coffee you had this morning. You can’t wait to have another cup tomorrow.";
    } else if (drink == 'tea') {
        document.getElementById("p10").innerHTML = "Interestingly, the last thing you remember is the warmth of the tea you had this morning. Perhaps you should invest in proper tea leaves.";
    } else if (drink == 'orange juice') {
        document.getElementById("p10").innerHTML = "Interestingly, the last thing you remember is the crisp taste of the orange juice you had this morning. Hopefully there’s still some left in the carton.";
    } else {
        document.getElementById("p10").innerHTML = "Interestingly, the last thing you remember is the rich aroma of [friend_name]’s coffee from earlier. Maybe you’ll get yourself a cup tomorrow to give it a try.";
    }

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

// friend functionality
function friend(bool) {
    var msg = "";
    if (bool == true) {
        msg = "Time spent alongside a close friend is time well spent. Your lively conversation might have \
        earned a couple dirty looks and sideways glances but that is no reason for you to be concerned with \
        the trivial opinions of passing strangers. And as you and [friend_name] slip back into more academic \
        pursuits, you are reminded of how easy it is to take for granted the silent presence of a close friend.";
    } else {
        msg = "As much as you enjoy spending time with friends, work has to take first priority sometimes. \
        It’s times like these that you value the most, surrounded by your thoughts and your sensations, \
        pursuing results produced by your own hard work, engrossed in all that is wholly yours. In this \
        present moment you feel in control, no, you are in control. An odd truth to realize while staring \
        at your math homework, surely, yet the truth resonates with you deeply.";
    }
    document.getElementById("p8").innerHTML = msg;
}

// test jump to new page
// function test() {
//     window.location.href="sample.html";
// }

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function pause() {
    var audio = document.getElementById("audio");
    audio.pause();
}