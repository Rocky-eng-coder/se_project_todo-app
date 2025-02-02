import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    // move item below to constructor
    this._inputList = this._popupForm.querySelectorAll(".popup__input");

    const inputvalues = {};
    this._inputList.forEach((input) => {
      // add a key value pair to the values object for each input
      // the key is input.name
      // the value is input.value
      // need to use brackets notation, not dot notation
    });
    return inputvalues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();

      // Todo pass result of _getinputvalues to submission handler
      this._handleFormSubmit(evt);
    });
  }
}

export default PopupWithForm;
