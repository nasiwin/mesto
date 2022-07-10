export default class UserInfo {
    constructor(userSelectors) {
      console.log(userSelectors);
      this._profileName = document.querySelector(userSelectors.name);
      this._profileJob = document.querySelector(userSelectors.job);
      this._profileAvatar = document.querySelector(userSelectors.avatar);
    }
  
    getUserInfo() {
      this._data = {name: this._profileName.textContent, job: this._profileJob.textContent, avatar: this._profileAvatar.src};
      return this._data;
    }
  
    setUserInfo(name, job, avatar) {
      this._profileName.textContent = name;
      this._profileJob.textContent = job;
      this._profileAvatar.src = avatar;
    }
  }