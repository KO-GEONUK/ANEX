const logoutBtn = document.querySelector("#logout");
logoutBtn.addEventListener("click",logoutUser);
function logoutUser() {
  localStorage.clear();
  location.reload();
}

window.addEventListener ("load", function() {
  document.body.style.visibility = 'visible';
});
