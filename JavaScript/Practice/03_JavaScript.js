const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    // const clickedClass = "clicked";     // className은 이전에 class들은 상관하지 않고 모든걸 교체함
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // } else { 
    //     h1.classList.add(clickedClass);        
    // }
    h1.classList.toggle("clicked");     //위의 5줄의 기능을 toggle이 해결
}

h1.addEventListener("click", handleTitleClick);
