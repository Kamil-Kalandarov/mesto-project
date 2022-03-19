import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor (selectorPopup, imagePopupSelector, imageCaptionPopupSelector) {
    super(selectorPopup);
    this._imagePopup = this._popup.querySelector(imagePopupSelector);
    this.imageCaptionPopup = this._popup.querySelector(imageCaptionPopupSelector);
  };

  openPopup(cardLink, cardName) {
    super.openPopup();
    this._imagePopup.src = cardLink;
    this.imageCaptionPopup.textContent = cardName;
    this.imageCaptionPopup.alt = cardName;
  };
};