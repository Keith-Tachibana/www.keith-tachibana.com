class Quotes {
  constructor() {
    this.getQuotes = this.getQuotes.bind(this)
    this.handleGetQuotesSuccess = this.handleGetQuotesSuccess.bind(this)
    this.handleGetQuotesError = this.handleGetQuotesError.bind(this)
  }

  getQuotes() {
    $.ajax({
      url: "http://quotes.stormconsultancy.co.uk/random.json",
      method: "GET",
      success: this.handleGetQuotesSuccess,
      error: this.handleGetQuotesError
    })
  }

  handleGetQuotesError(error) {
    console.error(error);
  }

  handleGetQuotesSuccess(data) {
    let quote = document.createElement('blockquote');
    quote.classList.add('text-white');
    quote.innerHTML = `"${data.quote}" <br /><em>-${data.author}</em>`;
    $('#quote').append(quote);
  }
}
