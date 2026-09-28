import StudentCollection from './StudentCollection.js';

// Initialize the collection with some students
const students = [
  {
    name: "John Doe",
    age: 18,
    grades: [88, 92, 76],
    isEnrolled: true
  },
  {
    name: "Jane Smith",
    age: 20,
    grades: [95, 85, 90],
    isEnrolled: true
  },
  {
    name: "Sam Green",
    age: 22,
    grades: [70, 75, 80],
    isEnrolled: false
  },
  {
    name: "Alice Brown",
    age: 19,
    grades: [90, 91, 89],
    isEnrolled: true
  }
];

// Create a new StudentCollection object
const studentCollection = new StudentCollection(students);


// Find a student by name and show in the screen
console.log("Student by name:");
console.log(
  studentCollection.getStudentByName("John Doe")
);


// Add a new student
console.log("\nAdding Emily White...");

studentCollection.addStudent(
  "Emily White",
  21,
  [88, 90, 92],
  true
);

console.log(studentCollection.students);


// Find the top student based on grades
console.log("\nTop student:");

const topStudent = studentCollection.getTopStudent();

console.log(topStudent);


// Calculate average grade
console.log("\nJohn Doe average grade:");

console.log(
  studentCollection.calculateAverageGrade("John Doe")
);


// Get enrolled students
console.log("\nEnrolled students:");

console.log(
  studentCollection.getEnrolledStudents()
);


// Get students above age
console.log("\nStudents older than 19:");

console.log(
  studentCollection.getStudentsAboveAge(19)
);


// Get student summaries
console.log("\nStudent summaries:");

console.log(
  studentCollection.getStudentSummaries()
);


// Get students with average grade 90 or higher
console.log("\nTop students (90 or higher):");

console.log(
  studentCollection.getTopStudents(90)
);


// Get enrolled student names
console.log("\nEnrolled student names:");

console.log(
  studentCollection.getEnrolledStudentNames()
);


// Format grades
console.log("\nFormatted grades:");

console.log(
  studentCollection.formatGrades()
);


// Get honor roll students
console.log("\nHonor roll students:");

console.log(
  studentCollection.getHonorRollStudents()
);


// Update a student's grades
console.log("\nUpdating John Doe's grades...");

studentCollection.updateStudentGrades(
  "John Doe",
  [95, 95, 90]
);

console.log(
  studentCollection.getStudentByName("John Doe")
);


// Remove a student
console.log("\nRemoving Sam Green...");

studentCollection.removeStudentByName("Sam Green");

console.log(
  studentCollection.students
);


// Serialize the students to JSON
console.log("\nSerialized Data:");

const serializedData = studentCollection.serializeStudents();

console.log(serializedData);


// Deserialize the JSON back into the collection
console.log("\nDeserialized Data:");

studentCollection.deserializeStudents(serializedData);

console.log(studentCollection.students);

