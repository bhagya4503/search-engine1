//Access sll dom elements
let toggle = document.getElementById("toggle");
let dark = document.querySelector(".dark");
let footer = document.querySelector(".footer");
let searchField = document.querySelector(".search-field");
let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
let img = document.querySelector("img");
let findOut = document.querySelector(".fint-out");
let languages = document.querySelector(".languages");
let hrBreak = document.querySelector(".break");
let googleSearch = document.getElementById("#search");

//Dark mode On

function darkModeOn(){
    dark.style.backgroundColor = "rgb(36, 35, 35)";
    footer.style.backgroundColor = "rgb(31,30,30)";
    dark.style.color = "lightgrey";
    footer.style.color = "grey";
    searchField.style.backgroundColor = "rgb(36,35,35)";
    searchField.style.color = "white";
    searchField.style.border = "1px solid rgb(95,95,95)";
    btn.style.backgroundColor = "rgb(53,52,52)";
    btn1.style.backgroundColor = "rgb(53,52,52)";
    btn.style.color = "lightgrey";
    btn1.style.color = "lightgrey";
    img.src = "menu.png";
    findOut.style.color = "rgb(39,124,223)";
    languages.style.color = "rgb(39,124,223)";
}
//Dark mode off

function darkModeOff(){
    dark.style.backgroundColor = "white";
    footer.style.backgroundColor = "rgb(238,238,238)";
    dark.style.color = "black";
    footer.style.color = "rgb(102,100,100)";
    searchField.style.backgroundColor = "white";
}

//toggle switch on or off
toggle.addEventListener("click", function(){
    if(toggle.checked == true){
        darkModeOn();
    } else{
       darkModeOff();
    }
})

//add search functionality

// function search(){
//     let input = searchField.value;
//     window.location.href  ="https://www.google.com/search?q="  + input + "&rlz=1C1CHBD_enIN1065IN1065&oq=" + input  + "&gs_lcrp=EgZjaHJvbWUqEAgAEAAY4wIYsQMYyQMYgAQyEAgAEAAY4wIYsQMYyQMYgAQyDQgBEC4YsQMYyQMYgAQyDQgCEC4YgwEYsQMYgAQyDQgDEAAYgwEYsQMYgAQyBwgEEAAYgAQyDQgFEAAYgwEYsQMYgAQyBwgGEAAYgAQyDQgHEAAYgwEYsQMYgAQyDQgIEAAYgwEYsQMYgAQyDQgJEAAYgwEYsQMYgATSAQkzODUwajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8"
// }

googleSearch.onclick = function(){
   let url = 'https://www.google.com/search?q=' + query.value;
   window.open(url,'_self');
}