import {LoadingButton} from '../Common/LoadingButton'
import {CurrencyService} from './CurrencyService'

export class CurrencyController {
  constructor() {
    this.createService();
    this.createUI();
  }

  //creating the service that consult the endpoint
  createService() {
     this._service = new CurrencyService();
  }

  //declare the variable to access the UI and events listeners
  createUI() {
    this._inputAmount = document.querySelector('#inputAmount');
    this._message = document.querySelector('.message');

    this._convertBtn = new LoadingButton(document.querySelector('.convert'));
    this._convertBtn.element.addEventListener('click', evt => this.convertClickHandler(evt));
  }

  convertClickHandler(evt) {
    evt.preventDefault();

    if (this._convertBtn.state == LoadingButton.LOADING)
      return;

    this.showAmount();
  }

  //request to the endpoint the currency conversion and update the UI
  async showAmount() {
    this._convertBtn.state = LoadingButton.LOADING;

    var fromAmount = parseFloat(this._inputAmount.value);
    var toAmount = await this._service.convert(fromAmount, 'USD', 'BRL');

    this._message.textContent = `${fromAmount.toLocaleString('en-US')} USD = ${toAmount.toLocaleString('pt-BR')} BRL`;

    this._convertBtn.state = LoadingButton.READY;
  }
}
