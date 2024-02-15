class AuthService {
  constructor() {
    this.userData = null;
    this.email = null;
    this.picture = null;
    this.freeTrial = null;
  }

  async login() {
    try {
      const token = await this.getAuthToken(true);
      const userCreds = await this.getUserCreditentials(token);
      const userData = await this.sendLoginRequest(userCreds);
      this.updateUserProps(userData);
      return this.userData;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  async logout() {
    try {
      const token = await this.getAuthToken(false);
      if (token) {
        await this.removeCachedAuthToken(token);
        await this.revokeToken(token);
        console.log("Logged out successfully");
      } else {
        console.log("No token found");
      }
      this.updateUserProps(null);
      return { response: "ok" };
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  }

  async getAuthToken(interactive) {
    return new Promise((resolve, reject) => {
      chrome.identity.getAuthToken({ interactive: interactive }, (token) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(token);
        }
      });
    });
  }

  async removeCachedAuthToken(token) {
    return new Promise((resolve, reject) => {
      chrome.identity.removeCachedAuthToken({ token: token }, () => {
        if (!chrome.runtime.lastError) {
          resolve();
        } else {
          reject(chrome.runtime.lastError);
        }
      });
    });
  }

  async revokeToken(token) {
    const response = await fetch(
      "https://accounts.google.com/o/oauth2/revoke?token=" + token,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      console.error("Error revoking token:", response.statusText);
    }
  }

  async getUserCreditentials(token) {
    const response = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo?access_token=" + token
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    return await response.json();
  }

  async sendLoginRequest(user) {
    const data = JSON.stringify(user);
    const response = await fetch("http://localhost:3001/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    if (!response.ok) {
      console.error("Login request failed:", response.status);
      throw new Error("Login request failed");
    }

    return await response.json();
  }

  updateUserProps(data) {
    if (!data) {
      this.userData = null;
      this.email = null;
      this.picture = null;
      this.freeTrial = null;
      return;
    }
    this.userData = data;
    this.email = data.email;
    this.picture = data.picture;
    this.freeTrial = data.freeTrial;
  }
}

const user = new AuthService();
export default user;
