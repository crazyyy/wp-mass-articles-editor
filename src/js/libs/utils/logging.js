import CheckDataType from './check-datatype.js';

class Logging {
  constructor(title = '', type = null) {
    this.title = title;
    this.type = type;
    this.styleBlueBg = 'color: white; background-color: #2274A5';
    this.styleGreenBg = 'color: white; background-color: #95B46A';
    this.styleOrangeBg = 'color: white; background-color: #e47220';
    this.styleRedBg = 'color: white; background-color: #D33F49';
  }

  getCurrentTimestamp() {
    const currentdate = new Date();
    return `${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
  }

  showMessage(message) {
    console.log(`%c ${this.getCurrentTimestamp()} Notice: `, this.styleBlueBg, `(${CheckDataType.getTypeOf(message)})`);
    console.log('%c > ', this.styleBlueBg, message);
  }

  showOk(message) {
    console.log(`%c ${this.getCurrentTimestamp()} Ok: `, this.styleGreenBg, `(${CheckDataType.getTypeOf(message)})`);
    console.log('%c > ', this.styleGreenBg, message);
  }

  showError(message) {
    console.log(`%c ${this.getCurrentTimestamp()} Error: `, this.styleRedBg, `(${CheckDataType.getTypeOf(message)})`);
    console.log('%c > ', this.styleRedBg, message);
  }

  showWarn(message) {
    console.log(`%c ${this.getCurrentTimestamp()} Warning: `, this.styleOrangeBg, `(${CheckDataType.getTypeOf(message)})`);
    console.log('%c > ', this.styleOrangeBg, message);
  }
}

export { Logging };
