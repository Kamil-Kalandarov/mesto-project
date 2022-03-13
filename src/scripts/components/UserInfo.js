export default class UserInfo {
  constructor (nameSelector, aboutSelector, avatarSelector) {
    this._nameSelector = document.querySelector(nameSelector);
    this._aboutSelector = document.querySelector(aboutSelector);
    this._avatarSelector = document.querySelector(avatarSelector)
  };

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      about: this._aboutSelector.textContent,
      avatar: this._avatarSelector.src
    };
  };

  setUserInfo(userData) {
   this._nameSelector.textContent = userData.name;
   this._aboutSelector.textContent = userData.about;
   this._avatarSelector.src = userData.avatar;
  };
};
