class Sports {
  constructor() {
    this.getSports = this.getSports.bind(this);
    this.createSports = this.createSports.bind(this);
    this.handleGetSportsSuccess = this.handleGetSportsSuccess.bind(this);
    this.handleGetSportsError = this.handleGetSportsError.bind(this);
  }

  getSports() {
    $.ajax({
      method: 'GET',
      url: 'https://newsapi.org/v2/top-headlines',
      data: {
        'category': 'sports',
        'country': 'US'
      },
      dataType: 'json',
      headers: {
        'X-Api-Key': '9b42d4b9c71d43ae81704e5ca321f04d',
      },
      success: this.handleGetSportsSuccess,
      error: this.handleGetSportsError
    })
  }

  handleGetSportsSuccess(data) {
    data.articles.sort(function (a, b) {
      return ((new Date(b.publishedAt)) - (new Date(a.publishedAt)));
    });
    for (let i = 0; i < data.articles.length; i++) {
      this.createSports(data.articles[i]);
    }
  }

  handleGetSportsError(error) {
    console.log(error);
  }

  createSports(articles) {
    let section = document.createElement('section');
    let title = document.createElement('h4');
    let source = document.createElement('h6');
    let author = document.createElement('p');
    let datePublished = document.createElement('p');
    let description = document.createElement('p');
    let spanURL = document.createElement('span');
    let url = document.createElement('a');
    let image = document.createElement('img');
    let hr = document.createElement('hr');
    title.textContent = articles.title;
    title.classList.add('font-weight-bold');
    source.textContent = `Source: ${articles.source.name}`;
    source.classList.add('font-weight-bold');
    author.textContent = `By: ${articles.author}`;
    author.classList.add('font-italic');
    let dateString = articles.publishedAt;
    let dateSlice = dateString.slice(0, 10).split('-');
    let dateFormatted = `${dateSlice[1]}/${dateSlice[2]}/${dateSlice[0]}`;
    datePublished.textContent = `Published On: ${dateFormatted}`;
    datePublished.classList.add('font-italic');
    description.textContent = articles.description;
    description.append(spanURL);
    spanURL.append(url);
    url.setAttribute('href', articles.url);
    url.textContent = ' [Click Here To Continue Reading]';
    image.src = articles.urlToImage;
    image.setAttribute('width', '400');
    image.classList.add('img-fluid', 'rounded');
    hr.classList.add('bg-info');
    section.append(title, source, author, datePublished, description, image, hr);
    $('#sports').append(section);
  }
}
