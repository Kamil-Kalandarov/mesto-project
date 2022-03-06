export default class UserInfo {
  constructor (nameSelector, aboutSelector) {
    this._nameSelector = nameSelector;
    this._aboutSelector = aboutSelector;
  };

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      about: this._aboutSelector.textContent,
    };
  };

  setUserInfo(userData) {
   this._nameSelector.textContent = userData.name;
   this._aboutSelector.textContent = userData.about;
  };
};
