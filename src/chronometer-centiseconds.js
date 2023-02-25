class Chronometer {
  constructor() {
    this.currentTime = 0; 
    this.intervalId = null; 
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    return (Math.floor(this.currentTime / 6000));
  }

  getSeconds() {
    const seconds = (Math.floor(this.currentTime / 100));
    if(seconds > 59){
      return seconds - 60;
    } else return seconds;
  }

  computeTwoDigitNumber(value) {
    if(value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
      }
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let centiseconds = this.getCentiseconds();
    return `${minutes}:${seconds}.${centiseconds}`;
  }
}
