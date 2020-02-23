class Nasa {
  constructor() {
    this.handleGetNasaSuccess = this.handleGetNasaSuccess.bind(this);
    this.handleGetNasaError = this.handleGetNasaError.bind(this);
  }

  getNasa() {
    $.ajax({
      method: 'GET',
      url: 'https://api.nasa.gov/planetary/apod',
      data: {
        'api_key': 'mRLmEh3p777qYpyPxKlyy3wyNhUKMgEJcwQhRJzP'
      },
      success: this.handleGetNasaSuccess,
      error: this.handleGetNasaError
    })
  }

  handleGetNasaSuccess(data) {
    console.log('NASA:', data);
    document.querySelector('#nasa').style.cssText = `background-image:url(${data.url});background-size:cover;background-position:center;background-repeat:no-repeat;height:300px;border-radius:15px;float:right;`;
    let title = document.createElement('p');
    title.classList.add('ml-2', 'mt-2', 'text-white', 'h4', 'text-center');
    title.textContent = `NASA Pic Of The Day: "${data.title}"`;
    $('#nasa').append(title);
  }

  handleGetNasaError(error) {
    console.log(error);
  }
}
