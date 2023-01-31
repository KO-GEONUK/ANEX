const title = document.getElementById("title");

console.dir(title)

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);

const title1 = document.querySelector(".hello h1");

console.log(title1);

const title2 = document.querySelectorAll(".hello h1");

console.log(title2);

// title1.style.color = "blue";

function handleTitleClick() {
    title.style.color = "white"
    console.log("title was clicked!");
}
function handleMouseEnter(){
    title.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "yellowgreen"
}
function handleWindowCopy(){
    alert("copier");
}
function handleWindowOffline(){
    alert("SOS no WIFI");
}
function handleWindowOnline(){
    alert("ALL GOOD~");
}


title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

// title.onclick = "handleTitleClick";
// title.onmouseenter = "handleMouseEnter";
// title.onmouseleave = "handleMouseLeave";

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


function handleTitleClick01() {
    const currentColor = title1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "white";
    } else { 
        newColor = "blue";        
    }
    title1.style.color = newColor;
}

title1.addEventListener("click", handleTitleClick01);
