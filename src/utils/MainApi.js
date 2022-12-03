import { BASE_URL } from "./constants";

class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
    this._headers = {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Main API Error Type: 
${res.status} ${res.statusText}`);
    }
  }

  async _request(path, options) {
    const res = await fetch(`${this._baseUrl}${path}`, options);
    return this._checkResponse(res);
  }

  ////////=============== AUTH ================= //////////

  async signup({ email, password, name }) {
    console.log(email, password, name);
    return this._request(`/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email: email, password: password, name: name }),
    });
  }

  async signin({ email, password }) {
    console.log("signin data:", email, password);
    const user = await this._request(`/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email: email, password: password }),
    });
    console.log(user.name);
    localStorage.setItem("jwt", user.token);
    return user;
  }

  checkToken() {
    return this._request(`/users/me`, {
      headers: this._headers,
    });
  }

  ////////============== CARD FUNCTIONS ================ //////////

  async getSavedArticles() {
    return this._request(`/articles`, {
      headers: this._headers,
    });
  }

  async saveArticle(article) {
    console.log(article);
    return this._request(`/articles`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(article),
    });
  }

  async deleteSavedArticle(article) {
    return this._request(`/articles/${article._id}`, {
      headers: this._headers,
      method: "DELETE",
    });
  }
}

const mainApi = new MainApi({
  baseUrl:
    BASE_URL,
    // "http://localhost:3000",
});

export default mainApi;
