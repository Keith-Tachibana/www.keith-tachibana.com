class Giphy {
  constructor(formElement) {
    this.formElement = formElement;
    this.loadGiphy = this.loadGiphy.bind(this);
    this.getGiphy = this.getGiphy.bind(this);
    this.handleGetGiphySuccess = this.handleGetGiphySuccess.bind(this);
    this.handleGetGiphyError = this.handleGetGiphyError.bind(this);
    this.handleSubmitGiphy = this.handleSubmitGiphy.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmitGiphy);
  }

  getGiphy(input) {
    $.ajax({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/search',
      data: {
        'api_key': 'kGoW8DFKOAQFLvSz22dA6SU8VTzK28Rf',
        'q': `${input}`
      },
      success: this.handleGetGiphySuccess,
      error: this.handleGetGiphyError
    })
  }

  handleGetGiphySuccess(data) {
    const img = document.createElement('img');
    const giphy = document.getElementById('giphy');
    $('#giphy').text('');
    let min = Math.ceil(0);
    let max = Math.floor(24);
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    img.src = data.data[random].images.downsized_large.url;
    img.setAttribute('width', '250');
    img.setAttribute('height', '200');
    giphy.append(img);
  }

  handleGetGiphyError(error) {
    console.log(error);
  }

  handleSubmitGiphy(event) {
    event.preventDefault();
    $('#giphy').text('');
    let formData = new FormData(event.target);
    let image = formData.get('giphy');
    this.getGiphy(image);
    localStorage.setItem('giphy', image);
    event.target.reset();
  }

  playRandom() {
    setInterval(() => {
      const queries = ['bikini', 'outer space', 'weird', 'supermodels', 'nature'];
      queries.forEach(query => this.getGiphy(query));
    }, 5000);
  }

  loadGiphy() {
    const currentImage = localStorage.getItem('giphy');
    if (currentImage === undefined) {
      return;
    } else {
      this.getGiphy(currentImage);
    }
  }
}
