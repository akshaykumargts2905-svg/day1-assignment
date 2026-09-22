const student = {
  name: "Akshay",
  age: 20,
  mark: [60, 70, 80],
};

function getResult(student) {
  console.log("Student name is ", student.name);

  let total = 0;
  student.mark.forEach(function (mark) {
    total += mark;
  });

  console.log("Total mark is ", total);

  let average = total / student.mark.length;

  console.log("Average mark is ", average);

  if (average >= 40) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}

getResult(student);
