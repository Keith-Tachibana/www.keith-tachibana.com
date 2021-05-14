class App {
  constructor(quotes) {
    this.quotes = quotes;
  }

  start() {
    this.quotes.getQuotes();
  }
}
