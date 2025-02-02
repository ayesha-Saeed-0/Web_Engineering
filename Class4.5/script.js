const students = [
  { name: "Avery", courses: [] },
  { name: "Jameson", courses: [] },
  { name: "Grayson", courses: [] },
  { name: "Xander", courses: [] },
  { name: "Eve", courses: [] },
];

const availableCourses = [
  "Math",
  "Science",
  "History",
  "Geography",
  "English",
  "Physics",
  "Chemistry",
  "Biology",
  "Art",
  "Music",
  "PE",
  "Computer Science",
];

let currentStudentIndex = null;

function displayStudents() {
  const list = document.getElementById("students-list");
  list.innerHTML = "";
  students.forEach((student, index) => {
    const div = document.createElement("div");
    div.classList.add("student");
    div.innerHTML = `<h3>${student.name}</h3>
            <p>Courses: ${student.courses.join(", ") || "None"}</p>
            <button onclick="modifyCourses(${index})">Modify Courses</button>`;
    list.appendChild(div);
  });
}

function modifyCourses(studentIndex) {
  currentStudentIndex = studentIndex;
  document.getElementById("student-name").innerText =
    students[studentIndex].name;
  const optionsDiv = document.getElementById("course-options");
  optionsDiv.innerHTML = "";

  availableCourses.forEach((course) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" value="${course}" ${
      students[studentIndex].courses.includes(course) ? "checked" : ""
    }> ${course}`;
    optionsDiv.appendChild(label);
    optionsDiv.appendChild(document.createElement("br"));
  });

  document.getElementById("course-selection").style.display = "block";
}

document
  .getElementById("course-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const selectedCourses = Array.from(
      document.querySelectorAll("#course-options input:checked")
    ).map((input) => input.value);

    if (selectedCourses.length > 6) {
      alert("You can only select up to 6 courses.");
      return;
    }

    students[currentStudentIndex].courses = selectedCourses;
    document.getElementById("course-selection").style.display = "none";
    displayStudents();
  });

function closeCourseSelection() {
  document.getElementById("course-selection").style.display = "none";
}

displayStudents();
