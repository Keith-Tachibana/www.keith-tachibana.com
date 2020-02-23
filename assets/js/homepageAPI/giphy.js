class Giphy {
  constructor() {
    this.getGiphy = this.getGiphy.bind(this);
    this.handleGetGiphySuccess = this.handleGetGiphySuccess.bind(this);
    this.handleGetGiphyError = this.handleGetGiphyError.bind(this);
  }

  getGiphy() {
    $.ajax({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/search',
      data: {
        'api_key': 'kGoW8DFKOAQFLvSz22dA6SU8VTzK28Rf',
        'q': 'sunny'
      },
      success: this.handleGetGiphySuccess,
      error: this.handleGetGiphyError
    })
  }

  handleGetGiphySuccess(data) {
    console.log('Giphy:', data);

  }

  handleGetGiphyError(error) {
    console.log(error);
  }
}
