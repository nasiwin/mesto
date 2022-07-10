export default class Api {
    constructor(item) {
        this._url = item.url;
        this._headers = item.headers;
        console.log(item);
    }

    allData() {
        return Promise.all([this.profile(), this.dataCards()])
      }

    _request(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    

     dataCards(){
        return fetch(`${this._url}/cards`, {
            method: "GET",
            headers: this._headers
        })
            .then(res => {
                return this._request(res)
            })
    }

    newCard(item) {
        return fetch(`${this._url}/cards`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify(item)
        })
          .then((res) => {
            return this._request(res)
          })
      }

      deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
          method: 'DELETE',
          headers: this._headers
        })
          .then((res) => {
            return this._request(res)
          })
      }

      profile(){
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: this._headers
          })
            .then((res) => {
              return this._request(res)
            })
      }

      renameProfile(item) {
        return fetch(`${this._url}/users/me`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify(item)
        })
          .then((res) => {
            return this._request(res)
          })
      }

      setProfileAvatar(item) {
        return fetch(`${this._url}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify(item)
        })
          .then((res) => {
            return this._request(res)
          })
      }

      cardLike(id) {
        return fetch(`${this._url}/cards/likes/${id}`, {
          method:'PUT',
          headers: this._headers,
        })
          .then((res) => {
            return this._request(res)
          });
      }
      
      deleteCardLike(id) {
        return fetch(`${this._url}/cards/likes/${id}`, {
          method:'DELETE',
          headers: this._headers,
        })
          .then((res) => {
            return this._request(res)
          });
      }
}