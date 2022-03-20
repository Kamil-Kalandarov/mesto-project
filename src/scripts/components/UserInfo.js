export default class UserInfo {
  constructor (nameSelector, aboutSelector, avatarSelector) {
    this._userName = document.querySelector(nameSelector);
    this._userAbout = document.querySelector(aboutSelector);
    this._userAvatar = document.querySelector(avatarSelector)
  };

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
      avatar: this._userAvatar.src
    };
  };

  setUserInfo(userData) {
   this._userName.textContent = userData.name;
   this._userAbout.textContent = userData.about;
   this._userAvatar.src = userData.avatar;
  };
};
