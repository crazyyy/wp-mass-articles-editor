import { Logging } from './logging';

export default class Utils {
  constructor(name) {
    this.name = name;
    this.logging = new Logging();
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log('Имя слишком короткое.');
      return;
    }
    this._name = value;
  }

  log(message) {
    this.logging.showMessage(message);
  }

  err(message) {
    this.logging.showError(message);
  }

  ok(message) {
    this.logging.showOk(message);
  }

  warn(message) {
    this.logging.showWarn(message);
  }

  static exampleStaticLog(message) {
    //  Utils.exampleStaticLog('exampleStaticLog');
    console.log(message);
  }
}
