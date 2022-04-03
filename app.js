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
    if (direction === "none") {
        return;
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

var play = true;
        
var myAudio = document.getElementById("leson");
window.addEventListener("keydown", onKeyDown, false);       
function onKeyDown(event) {
        switch (event.keyCode) {
            case 32: //SpaceBar                    
                if (play) {
                    myAudio.pause();
                    play = false;
                } else {
                    myAudio.play();
                    play = true;
                }
                break;
        }
    return false;
}

function slidesettings() {
    document.getElementById("settings").style.top += translateAmount;
}

function nxt() {
    var val = (parseInt(document.getElementById('slide').style.left, 10) || 0) + 50;
    document.getElementById('slide').style.left = val + 'px';
}

var x;
var y;
var z;

var friend_name;
var book_name;
var author_name;


function get_vars() {
    x = document.getElementById("friend_name").value; 
    friend_name = document.getElementById("friend_name").value; 

    y = document.getElementById("book_name").value; 
    book_name = document.getElementById("book_name").value;

    z = document.getElementById("author_name").value; 
    author_name = document.getElementById("book_name").value;
}

// show next button
function show_next() {
    document.getElementById("zero2").innerHTML = "<button onClick=\"vslide('next', 'none'); slidesettings()\">next...</button>";
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

function scenario(num) {
    if (num == 1) {
        document.getElementById("four4").innerHTML = "The espresso is deeply aromatic, the milk steamed to a comforting warmth with a subtly frothy texture that brings structure and mouthfeel and a faint nutty sweetness. Your exceptional taste in coffee is subtly revealed to the rest of the patrons by the dainty paper cup you hold, exclusively used for cortados. A perfect pairing with the work of fine literature that is <em> " + y + "</em> by " + z;
    } else if (num == 2) {
        document.getElementById("four4").innerHTML = "You find " + x + " in Saieh Hall, basking in the sunlight of that one hallway with far too many windows, engrossed in the game of attempting to study while also watching yesterday’s basketball highlights. It’s a game that you are far too familiar with." + "\n" + "As you leave Saieh, you two agree to get lunch later."; 
    } else if (num == 3) {
        document.getElementById("four4").innerHTML = "Laundry doesn’t fold itself, and though tedious, it’s simple acts like folding laundry that remind you of your independence, but also your responsibilities.";
    } else {
        document.getElementById("four4").innerHTML = "Your devious plan lasted a whole fifteen minutes. Too bad " + x + " gave you away when they ran into you and asked you to get lunch later, and then the tour guide politely yet firmly asked you to leave. ";
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
function results() {
    var max = Math.max(pro, ind, dist, calm);
    if (max == pro){
        window.location.href="art/result/ProcrastinatorResult.png";
    } else if (max == ind) {
        window.location.href="art/result/IndependentResult.png";
    } else if (max == dist) {
        window.location.href="art/result/ChaoticResult.png";
    } else {
        window.location.href="art/result/CalmResult.png";
    }
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function pause() {
    var audio = document.getElementById("audio");
    audio.pause();
}

