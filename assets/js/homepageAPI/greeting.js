class Greeting {
  constructor() {
    this.askName = this.askName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadName = this.loadName.bind(this);
    this.displayName = this.displayName.bind(this);
  }

  askName() {
    let greeting = document.querySelector('#greeting-container');
    let form = greeting.querySelector('form');
    form.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit(event) {
    var greeting = document.querySelector('#greeting-container');
    var input = greeting.querySelector('input');
    event.preventDefault();
    var name = input.value;
    this.displayName(name);
    input.value = ``;
  }

  displayName(name) {
    let greeting = document.querySelector('#greeting-container');
    let input = greeting.querySelector('input');
    input.classList.add("d-none");
    let greet = document.querySelector('#greeting');
    greet.classList.remove("d-none");
    const date = new Date();
    const hr = date.getHours();
    if (hr <= 5 || hr >= 17) {
      greet.innerHTML = `Good evening, ${name}!`;
    } else if (hr >= 12) {
      greet.innerHTML = `Good afternoon, ${name}!`;
    } else {
      greet.innerHTML = `Good morning, ${name}!`;
    }
    localStorage.setItem("name", name);
  }

  loadName() {
    const currentUser = localStorage.getItem("name");
    if (currentUser === null) {
      this.askName();
    } else {
      this.displayName(currentUser);
    }
  }
}
