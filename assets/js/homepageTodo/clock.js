class Clock {
  constructor() {
    this.getTime = this.getTime.bind(this);
  }

  getTime() {
    setInterval(function() {
      let d = new Date();
      let hours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
      if (hours === 0) {
        hours = 12;
      };
      let minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
      let seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
      let suffix = d.getHours() >= 12 ? 'PM' : 'AM';
      let time = `${hours}:${minutes}:${seconds} ${suffix}`;
      $('#clock').text(time);
    }, 1000)
  }
}
