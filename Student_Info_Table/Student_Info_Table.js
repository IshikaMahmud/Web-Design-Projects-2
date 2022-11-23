// finding

var studentName = document.querySelector("#name");
var studentAge = document.querySelector("#age");
var studentDepartment = document.querySelector("#department");
var studentCgpa = document.querySelector("#cgpa");
var studentInfoButton = document.querySelector("#button");

// add event listener

studentInfoButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (studentName.value == "") {
    alert("Enter Your Name..");
  } else if (studentAge.value == "") {
    alert("Enter Your Age..");
  } else if (studentDepartment.value == "") {
    alert("Enter Your Department..");
  } else if (studentCgpa.value == "") {
    alert("Enter Your CGPA..");
  } else {
    var tBodyStudent = document.querySelector("#tBody");
    var trStudent = document.createElement("tr");

    // name
    var tdStudent = document.createElement("td");
    tdStudent.innerHTML = studentName.value;
    trStudent.appendChild(tdStudent);

    // age

    var td2Student = document.createElement("td");
    td2Student.innerHTML = studentAge.value;
    trStudent.appendChild(td2Student);

    // department

    var td3Student = document.createElement("td");
    td3Student.innerHTML = studentDepartment.value;
    trStudent.appendChild(td3Student);

    // cgpa

    var td4Student = document.createElement("td");
    td4Student.innerHTML = studentCgpa.value;
    trStudent.appendChild(td4Student);

    tBodyStudent.appendChild(trStudent);
  }
});
