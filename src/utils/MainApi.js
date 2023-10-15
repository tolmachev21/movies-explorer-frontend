class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }

  getSavedMovies(token) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
      .then(this._checkResponse)
  }

  getUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
      .then(this._checkResponse)
  }

  editUserInfo(data, token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
    })
      .then(this._checkResponse)
  }

  registration(data) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        name: data.name
      }),
    })
      .then(this._checkResponse)
  }

  authorization(data) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      })
    })
      .then(this._checkResponse)
  }

  getUserData(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkResponse)
  }
};

const mainApi = new MainApi({
  baseUrl: 'https://api.movies-explorer-full.nomoredomainsicu.ru',
});

export default mainApi;