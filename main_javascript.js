setInterval(function(){ 
    var date = new Date();

    if(parseInt(date.getSeconds()) <= 9 && parseInt(date.getMinutes()) <= 9 && parseInt(date.getHours()) <= 9) {
        document.getElementById("time").innerHTML="0" + date.getHours() + ":0" + date.getMinutes() + ":0" + date.getSeconds(); 
    } else if(parseInt(date.getSeconds()) <= 9 && parseInt(date.getMinutes()) <= 9) {
        document.getElementById("time").innerHTML=date.getHours() + ":0" + date.getMinutes() + ":0" + date.getSeconds(); 
    } else if(parseInt(date.getHours()) <= 9 && parseInt(date.getMinutes()) <= 9) {
        document.getElementById("time").innerHTML="0" + date.getHours() + ":0" + date.getMinutes() + ":" + date.getSeconds(); 
    } else if(parseInt(date.getHours()) <= 9 && parseInt(date.getSeconds()) <= 9) {
        document.getElementById("time").innerHTML="0" + date.getHours() + ":" + date.getMinutes() + ":0" + date.getSeconds();
    } else if(parseInt(date.getMinutes()) <= 9) {
        document.getElementById("time").innerHTML=date.getHours() + ":0" + date.getMinutes() + ":" + date.getSeconds(); 
    } else if(parseInt(date.getSeconds()) <= 9) {
        document.getElementById("time").innerHTML=date.getHours() + ":" + date.getMinutes() + ":0" + date.getSeconds(); 
    } else if(parseInt(date.getHours()) <= 9) {
        document.getElementById("time").innerHTML="0" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();  
    } else {
        document.getElementById("time").innerHTML=date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }
}, 0);

setInterval(function(){
    if (window.innerWidth < 1088 || window.innerHeight < 570) {
    
        document.getElementById("error").style.opacity = "100%";
        document.getElementById("site").style.opacity = "0%";
    } else {
        document.getElementById("error").style.opacity = "0%";
        document.getElementById("site").style.opacity = "100%";
    }
}, 1);

function enterKeyPressed(event) {
    
    if (event.keyCode == 13) {
        let url = document.getElementById("url_input").value;
        window.open("https://www.google.com/search?q=" + url);
    }
}

let state = false;
function switch_style() {
    state = !state;
    var switch_style = document.getElementById("switch");

    var background = document.body;
    var links = document.getElementsByClassName("links");
    var search_bar = document.getElementById("search_bar");

    switch_style.style

    if(state == false) {
        switch_style.style.backgroundColor = "rgb(80, 80, 80)";
        switch_style.style.boxShadow = "0px 0px 2px .7px rgb(80, 80, 80)";
        switch_style.style.left = "0%";

        background.style.background = "linear-gradient(45deg, rgb(36, 36, 36), rgb(14, 14, 14)) fixed";
        search_bar.style.backgroundImage = "linear-gradient(90deg, #b1b1b1, #d6d6d6, #f1f1f1, #b1b1b1)";
        for(let i = 0; i < links.length; i++) {
            links[i].style.backgroundImage = "linear-gradient(45deg, #161616, #272626, #363636, #161616)";
        }
    } else if (state == true) {
        switch_style.style.backgroundColor = "rgb(80, 3, 80)";
        switch_style.style.boxShadow = "0px 0px 2px .7px rgb(80, 3, 80)";
        switch_style.style.left = "60%";

        background.style.background = "linear-gradient(45deg, rgb(56, 5, 56), rgb(1, 1, 56)) fixed";
        search_bar.style.backgroundImage = "linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4)";
        for(let i = 0; i < links.length; i++) {
            links[i].style.backgroundImage = "linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4)";
        }
    }
}


