import user from "../services/AuthService";

const signInbutton = document.querySelector(".buttonSignin");
const signOutButton = document.querySelector(".buttonSignout");

const tokens = document.querySelector(".tokens");

const initActionMenu = async () => {
  await user.initialize();
  const { userData } = user;

  if (!userData) {
    const userGreeting = document.querySelector(".greetUser");
    userGreeting.textContent = `Please log in to continue`;
    signInbutton.addEventListener("click", (e) => {
      chrome.runtime.sendMessage({ message: "signInRequest" });
    });
    signOutButton.style.display = "none";
    return;
  }

  const userGreeting = document.querySelector(".greetUser");
  userGreeting.textContent = `Welcome, ${userData.email}`;
  signOutButton.addEventListener("click", (e) => {
    chrome.runtime.sendMessage({ message: "logOutRequest" });
  });
  signInbutton.style.display = "none";
  console.log(tokens);
  tokens.textContent = `Available tokens: ${userData.freeTrial.tokens}/20`;
};

initActionMenu();
