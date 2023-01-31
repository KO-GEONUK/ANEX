// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
// function onLoginBtnClick(){
//     const username = loginInput.value;
//     if(username === ""){
//         alert("Please write your name!!!");
//     }else if(username.length > 15){
//         alert("Your name is too long!!!");
//     }
// }
// loginButton.addEventListener("click", onLoginBtnClick);
// 위의 방법도 있지만 HTML에서 form submit사용

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSANE = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSANE);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSANE);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSANE);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    paintGreetings(savedUsername);
}
