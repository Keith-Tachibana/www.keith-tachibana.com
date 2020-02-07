class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    let badge = document.querySelector('#badge-avg');
    if (isNaN(newAverage)) {
      badge.textContent = 'N/A';
    } else {
      badge.textContent = newAverage.toFixed(2);
    }
  }
}
