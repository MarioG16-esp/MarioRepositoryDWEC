export default class StudentCollection {
  constructor(students = []) {
    this.students = students;
  }

  // Adds a new student to the collection
  addStudent(name, age, grades, isEnrolled) {
    const student = {
      name: name,
      age: age,
      grades: grades,
      isEnrolled: isEnrolled
    };

    this.students.push(student);
  }

  // Finds a student by name
  getStudentByName(name) {
    return this.students.find(student => student.name === name);
  }

  // Removes a student by name
  removeStudentByName(name) {
    this.students = this.students.filter(
      student => student.name !== name
    );
  }

  // Updates a student's grades
  updateStudentGrades(name, grades) {
    const student = this.getStudentByName(name);

    if (student) {
      student.grades = grades;
    }
  }

  // Calculates the average grade of a student
  calculateAverageGrade(name) {
    const student = this.getStudentByName(name);

    if (!student || student.grades.length === 0) {
      return 0;
    }

    const total = student.grades.reduce(
      (sum, grade) => sum + grade,
      0
    );

    return total / student.grades.length;
  }

  // Returns all enrolled students
  getEnrolledStudents() {
    return this.students.filter(
      student => student.isEnrolled === true
    );
  }

  // Returns students older than a given age
  getStudentsAboveAge(age) {
    return this.students.filter(
      student => student.age > age
    );
  }

  // Finds the student with the highest average grade
  getTopStudent() {
    if (this.students.length === 0) {
      return undefined;
    }

    return this.students.reduce((topStudent, student) => {
      const studentAverage = this.calculateAverageGrade(student.name);
      const topAverage = this.calculateAverageGrade(topStudent.name);

      if (studentAverage > topAverage) {
        return student;
      }

      return topStudent;
    });
  }

  // Creates a summary for every student
  getStudentSummaries() {
    return this.students.map(student => ({
      name: student.name,
      averageGrade: this.calculateAverageGrade(student.name)
    }));
  }

  // Returns students with an average grade
  // equal to or higher than the given threshold
  getTopStudents(threshold) {
    return this.students.filter(
      student => this.calculateAverageGrade(student.name) >= threshold
    );
  }

  // Returns the names of enrolled students
  getEnrolledStudentNames() {
    return this.students
      .filter(student => student.isEnrolled === true)
      .map(student => student.name);
  }

  // Formats each student's grades as a string
  formatGrades() {
    return this.students.map(
      student => `${student.name}: ${student.grades.join(", ")}`
    );
  }

  // Returns students with an average grade of 90 or above
  getHonorRollStudents() {
    return this.students.filter(
      student => this.calculateAverageGrade(student.name) >= 90
    );
  }

  // Converts the students array into a JSON string
  serializeStudents() {
    return JSON.stringify(this.students);
  }

  // Converts a JSON string back into the students array
  deserializeStudents(jsonString) {
    this.students = JSON.parse(jsonString);
  }
}

