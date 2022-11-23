// finding

const button = document.querySelector(".button button");
const Rule = document.querySelector(".Rule");
const exitBtn = document.querySelector(".buttons .exitBtn");

// creating function

button.onclick = () => {
  Rule.classList.add("activeInfo");
};

exitBtn.onclick = () => {
  Rule.classList.remove("activeInfo");
};
