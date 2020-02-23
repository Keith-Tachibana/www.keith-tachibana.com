class Stocks {
  constructor() {
    this.getStocks = this.getStocks.bind(this);
    this.handleGetStocksSuccess = this.handleGetStocksSuccess.bind(this);
    this.handleGetStocksError = this.handleGetStocksError.bind(this);
  }

  getStocks() {
    $.ajax({
      method: 'GET',
      url: 'https://api.worldtradingdata.com/api/v1/stock',
      data: {
        'symbol': 'AAPL,AMD,GOOG,INTC,NVDA',
        'api_token': 'QIYx744H1Y7IIliC2m4zocvLNFfT6NC42adG37ZTVdP2pcrzP4qhJTgfrJ7C',
        'sort_order': 'asc',
        'sort_by': 'name'
      },
      success: this.handleGetStocksSuccess,
      error: this.handleGetStocksError
    })
  }

  handleGetStocksSuccess(data) {
    console.log('Stocks:', data);
    const stocks = document.getElementById('stocks');
    for (let i = 0; i < data.data.length; i++) {
      const span = document.createElement('span');
      span.textContent = `${data.data[i].symbol}: $${data.data[i].price}`;
      span.classList.add('mr-4', 'stock-quotes');
      stocks.append(span);
    }
  }

  handleGetStocksError(error) {
    console.log(error);
  }

}
