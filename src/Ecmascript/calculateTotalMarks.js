// src/Ecmascript/calculateTotalMarks.js
const calculateTotalMarks = (students) => {
    const updatedStudents = students.map(student => ({
      ...student,
      marks: student.marks < 50 ? student.marks + 15 : student.marks,
    }));
    const passedStudents = updatedStudents.filter(student => student.marks > 50);
    const totalMarks = passedStudents.reduce((acc, curr) => acc + curr.marks, 0);
    return totalMarks;
  };
  
  export default calculateTotalMarks;