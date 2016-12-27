export class LoadingButton {
  constructor(element) {
    this._element = element;
    this._label = element.textContent;
    this._state = LoadingButton.READY;
  }

  //Define the button state, if it is loading or ready to click
  set state(newState) {
    this._state = newState;

    switch (newState) {
      case LoadingButton.LOADING:
        this._element.textContent = "Loading";
        break;
      default:
        this._element.textContent = this._label;
    }
  }

  get state() {
    return this._state;
  }

  get element() {
    return this._element;
  }

  static get LOADING() {
    return "loading";
  }

  static get READY() {
    return "ready";
  }
}
