class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmit);
    this.createGrade = null;
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let name = formData.get('name');
    let course = formData.get('course');
    let grade = formData.get('grade');
    this.createGrade(name, course, grade);
    event.target.reset();
  }
}
