import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor (selectorPopup, imagePopupSelector, imageCaptionPopupSelector) {
    super(selectorPopup);
    this._imagePopupSelector = this._selectorPopup.querySelector(imagePopupSelector);
    this._imageCaptionPopupSelector = this._selectorPopup.querySelector(imageCaptionPopupSelector);
  };

  openPopup() {
    super.openPopup();
    this._imagePopupSelector.src = cardLink;
    this._imageCaptionPopupSelector.textContent = cardName;
    this._imageCaptionPopupSelector.alt = cardName;
  };
};