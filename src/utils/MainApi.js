class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Main API Error Type: 
${res.status} ${res.statusText}`);
    }
  }

  ////////=============== AUTH ================= //////////

  async signup({ email, password, name }) {
    console.log(email, password, name);
    const response = await fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email: email, password: password, name: name }),
    });
    return this._checkResponse(response);
  }

  signin({ email, password }) {
    console.log("signin data:", email, password);
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then(this._checkResponse)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        return data;
      });
  }

  //Get user info from server:
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
  }

  checkToken() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then(this._checkResponse)
      .then((data) => data);
    // .then(data => console.log("userData:", data));
  }

  ////////============== CARD FUNCTIONS ================ //////////

  async getSavedArticles() {
    const response = await fetch(`${this._baseUrl}/articles`, {
      headers: this._headers,
    });
    return this._checkResponse(response);
  }

  async saveArticle(article) {
    console.log(article);
    const response = await fetch(`${this._baseUrl}/articles`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(article),
    });
    return this._checkResponse(response);
  }

  async deleteSavedArticle(article) {
    const response = await fetch(`${this._baseUrl}/articles/${article._id}`, {
      headers: this._headers,
      method: "DELETE",
    });
    return this._checkResponse(response);
  }
}

const mainApi = new MainApi({
  baseUrl:
    "https://api.newsarawsmn.students.nomoredomainssbs.ru",
    // "http://localhost:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

export default mainApi;
