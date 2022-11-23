// finding
const container = document.querySelector(".container");
const routineForm = document.querySelector(".routine-form");
const inputRoutine = document.querySelector("#inputRoutine");
const addRoutineButton = document.querySelector("#addRoutineButton");
const routineLists = document.querySelector("#lists");
const msgElement = document.getElementById("msg");

// show msg
const showMsg = (txt, sts) => {
  msgElement.textContent = txt;
  msgElement.classList.add(`bg-${sts}`);
  setTimeout(() => {
    msgElement.textContent = "";
    msgElement.classList.remove("success");
  }, 2000);
};

// create routine
const createRoutine = (routineId, routineValue) => {
  const routineElement = document.createElement("li");
  routineElement.id = routineId;
  routineElement.classList.add("list-style");
  routineElement.innerHTML = `
    <span>${routineValue}</span>
    <span><button class="btn" id="deletebtn"><i class="fa fa-trash"></i></button></span>
    `;
  routineLists.appendChild(routineElement);
  const deletebtn = routineElement.querySelector("#deletebtn");
  deletebtn.addEventListener("click", deleteRoutine);
};

// deleRoutine
const deleteRoutine = (event) => {
  // console.log("Delete Routine");
  const selectedRoutine =
    event.target.parentElement.parentElement.parentElement;
  // console.log(selectedRoutine);
  routineLists.removeChild(selectedRoutine);
  showMsg("Routine is deleted", "danger");

  let routines = getRoutinesFromLocalStorage();
  routines = routines.filter(
    (routine) => routine.routineId !== selectedRoutine.id
  );
  localStorage.setItem("myroutines", JSON.stringify(routines));
};

// getRoutinesFromLocalStorage
const getRoutinesFromLocalStorage = () => {
  return localStorage.getItem("myroutines")
    ? JSON.parse(localStorage.getItem("myroutines"))
    : [];
};

// addRoutine
const addRoutine = (event) => {
  event.preventDefault();
  const routineValue = inputRoutine.value;

  // unique id
  const routineId = Date.now().toString();
  //   console.log(routineId);
  createRoutine(routineId, routineValue);
  showMsg("Routine is added", "success");

  // adding routine to localStorage
  const routines = getRoutinesFromLocalStorage();

  routines.push({ routineId, routineValue });
  localStorage.setItem("myroutines", JSON.stringify(routines));
  inputRoutine = "";
};

// loadRoutines
const loadRoutines = () => {
  // console.log("loaded");
  const routines = getRoutinesFromLocalStorage();
  routines.map((routine) =>
    createRoutine(routine.routineId, routine.routineValue)
  );
};

// add event listener
routineForm.addEventListener("submit", addRoutine);
window.addEventListener("DOMContentLoaded", loadRoutines);
