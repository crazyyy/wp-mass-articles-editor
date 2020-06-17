import { Logging } from './logging';

export default class Utils {
  constructor() {
    this.logging = new Logging();
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
}
