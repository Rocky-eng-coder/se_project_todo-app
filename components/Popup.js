class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      // - call the close method
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    console.log("close method called");
    // TODO - remove the escape Listener
  }

  setEventListeners() {
    // this._popupCloseBtn.addEventListener("click", () => {
    //this.close(); - Old code from previous sprint
    //});

    // This one listener will handle close button and modal listener
    this._popupElement.addEventListener("mousedown", (evt) => {
      // if the event target's classList contains "popup__close" or "popup"
      // then close the modal
      // Use if (x || y) for conditions{
    });
  }
}

export default Popup;
