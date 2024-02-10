const getAuthToken = (interactive) => {
  return new Promise((resolve, reject) => {
    chrome.identity.getAuthToken({ interactive: interactive }, (token) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(token);
      }
    });
  });
};

const removeCachedAuthToken = (token) => {
  return new Promise((resolve, reject) => {
    chrome.identity.removeCachedAuthToken({ token: token }, () => {
      if (!chrome.runtime.lastError) {
        resolve();
      } else {
        reject(chrome.runtime.lastError);
      }
    });
  });
};

const revokeToken = (token) => {
  return fetch("https://accounts.google.com/o/oauth2/revoke?token=" + token, {
    method: "GET",
  });
};

const logInRequest = async () => {
  try {
    const token = await getAuthToken(true);
    const response = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo?access_token=" + token
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

const logOutRequest = async () => {
  try {
    const token = await getAuthToken(false);
    if (token) {
      await removeCachedAuthToken(token);
      const response = await revokeToken(token);
      if (response.ok) {
        console.log("Token revoked successfully");
        return response;
      } else {
        console.error("Error revoking token:", response.statusText);
      }
    } else {
      console.log("No token found");
    }
  } catch (error) {
    console.error("Error logging out:", error);
    return { ok: false };
  }
};

export { logInRequest, logOutRequest };
