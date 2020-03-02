class Quotes {
  constructor() {
    this.getQuotes = this.getQuotes.bind(this)
    this.handleGetQuotesSuccess = this.handleGetQuotesSuccess.bind(this)
    this.handleGetQuotesError = this.handleGetQuotesError.bind(this)
  }

  getQuotes() {
    $.ajax({
      url: "https://api.quotable.io/random",
      method: "GET",
      success: this.handleGetQuotesSuccess,
      error: this.handleGetQuotesError
    })
  }

  handleGetQuotesError(error) {
    console.log(error)
  }

  handleGetQuotesSuccess(data) {
    console.log('Quotes:', data);
    let quote = document.createElement('p');
    quote.classList.add('ml-2', 'mt-2', 'text-white', 'h4', 'text-center');
    quote.innerHTML = `${data.content} <em>-${data.author}</em>`;
    $('#nasa').append(quote);
  }
}
