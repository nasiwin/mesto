export default class UserInfo {
    constructor(userSelectors) {
      this._profileName = document.querySelector(userSelectors.name);
      this._profileJob = document.querySelector(userSelectors.job);
    }
  
    getUserInfo() {
      this._data = {name: this._profileName.textContent, job: this._profileJob.textContent};
      return this._data;
    }
  
    setUserInfo(name, job) {
      this._profileName.textContent = name;
      this._profileJob.textContent = job;
    }
  }