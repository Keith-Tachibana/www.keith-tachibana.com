class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
    this.updateGrade = this.updateGrade.bind(this);
    this.handleUpdateGradeError = this.handleUpdateGradeError.bind(this);
    this.handleUpdateGradeSuccess = this.handleUpdateGradeSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    let result = 0;
    for (let i = 0; i < grades.length; i++) {
      result += grades[i].grade;
    }
    let average = result / grades.length;
    this.pageHeader.updateAverage(average);
  }
  getGrades() {
    $.ajax({
      method: 'GET',
      url: 'http://sgt.lfzprototypes.com/api/grades',
      headers: {
        "X-Access-Token": "N8vI9Ibs"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  createGrade(name, course, grade) {
    $.ajax({
      method: 'POST',
      url: 'http://sgt.lfzprototypes.com/api/grades',
      headers: {
        "X-Access-Token": "N8vI9Ibs"
      },
      data: {name: name, course: course, grade: grade},
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
  deleteGrade(id) {
    $.ajax({
      method: 'DELETE',
      url: 'http://sgt.lfzprototypes.com/api/grades/' + id,
      headers: {
        "X-Access-Token": "N8vI9Ibs"
      },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    })
  }
  handleDeleteGradeError(error) {
    console.error(error);
  }
  handleDeleteGradeSuccess() {
    this.getGrades();
  }
  updateGrade(id, name, course, grade) {
    $.ajax({
      method: 'PATCH',
      url: 'http://sgt.lfzprototypes.com/api/grades/' + id,
      headers: {
        "X-Access-Token": "N8vI9Ibs"
      },
      data: { name: name, course: course, grade: grade },
      success: this.handleUpdateGradeSuccess,
      error: this.handleUpdateGradeError
    })
  }
  handleUpdateGradeError(error) {
    console.error(error);
  }
  handleUpdateGradeSuccess() {
    this.getGrades();
  }
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
}
