const logIn = () => {
  chrome.identity.getAuthToken({ interactive: true }, (token) => {
    fetch("https://www.googleapis.com/oauth2/v3/userinfo?access_token=" + token)
      .then((res) => {
        return res.json();
      })
      .then((res) => console.log(res))
      .catch((e) => {
        console.error("Fetch error:", e);
      });
  });
};

function logOut() {
  chrome.identity.getAuthToken({ interactive: false }, (current_token) => {
    if (!chrome.runtime.lastError) {
      chrome.identity.removeCachedAuthToken({ token: current_token });
      fetch(
        "https://accounts.google.com/o/oauth2/revoke?token=" + current_token,
        {
          method: "GET",
        }
      )
        .then((response) => {
          if (response.ok) {
            console.log("Token revoked successfully");
          } else {
            console.error("Error revoking token:", response.statusText);
          }
        })
        .catch((e) => {
          console.error("Fetch error:", e);
        });
    }
  });
}

export { logIn, logOut };
