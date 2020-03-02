class AppSports {
  constructor(weather, nasa, greeting, newDate, clock, sports, stocks, giphy, quotes) {
    this.weather = weather;
    this.nasa = nasa;
    this.greeting = greeting;
    this.newDate = newDate;
    this.clock = clock;
    this.sports = sports;
    this.stocks = stocks;
    this.giphy = giphy;
    this.quotes = quotes;
  }

  start() {
    this.weather.loadWeather();
    this.nasa.getNasa();
    this.greeting.loadName();
    this.newDate.getDate();
    this.clock.getTime();
    this.sports.getSports();
    this.stocks.getStocks();
    this.giphy.getGiphy();
    this.quotes.getQuotes();
  }
}
