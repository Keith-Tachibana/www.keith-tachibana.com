const tbody = document.querySelector('tbody');
const header = document.querySelector('header');
const form = document.querySelector('form');
const noGrades = document.querySelector('#no-grades');

const gradeTable = new GradeTable(tbody, noGrades);
const pageHeader = new PageHeader(header);
const gradeForm = new GradeForm(form);
const app = new App(gradeTable, pageHeader, gradeForm);
app.start();
