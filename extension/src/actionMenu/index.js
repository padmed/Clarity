const signInbutton = document.querySelector(".buttonSignin");
const signOutButton = document.querySelector(".buttonSignout");

signInbutton.addEventListener("click", (e) => {
  chrome.runtime.sendMessage({ message: "signInRequest" });
});

signOutButton.addEventListener("click", (e) => {
  chrome.runtime.sendMessage({ message: "logOutRequest" });
});
