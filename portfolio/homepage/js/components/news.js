class News {
  constructor(formHeadlines) {
    this.formHeadlines = formHeadlines;
    this.getHeadlines = this.getHeadlines.bind(this);
    this.createHeadlines = this.createHeadlines.bind(this);
    this.handleGetHeadlinesSuccess = this.handleGetHeadlinesSuccess.bind(this);
    this.handleGetHeadlinesError = this.handleGetHeadlinesError.bind(this);
    this.handleSubmitHeadlines = this.handleSubmitHeadlines.bind(this);
    this.formHeadlines.addEventListener('submit', this.handleSubmitHeadlines);
  }

  getHeadlines(input) {
    $.ajax({
      method: 'GET',
      url: 'https://newsapi.org/v2/everything',
      data: {
        'q': `${input}`,
      },
      headers: {
        'X-Api-Key': '9b42d4b9c71d43ae81704e5ca321f04d'
      },
      dataType: 'json',
      success: this.handleGetHeadlinesSuccess,
      error: this.handleGetHeadlinesError
    })
  }

  handleGetHeadlinesSuccess(data) {
    data.articles.sort(function (a, b) {
      return ((new Date(b.publishedAt)) - (new Date(a.publishedAt)));
    });
    for (let i = 0; i < data.articles.length; i++) {
      this.createHeadlines(data.articles[i]);
    }
  }

  handleGetHeadlinesError(error) {
    console.log(error);
  }

  createHeadlines(articles) {
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
    source.textContent = `Source: NY Times`;
    source.classList.add('font-weight-bold');
    author.textContent = `By: ${articles.source.name}`;
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
    $('#headlines').append(section);
  }

  handleSubmitHeadlines(event) {
    event.preventDefault();
    $('#headlines').text('');
    let formData = new FormData(event.target);
    let query = formData.get('headlines-search');
    this.getHeadlines(query);
    event.target.reset();
  }
}
