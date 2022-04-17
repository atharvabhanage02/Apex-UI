const baselineBtn = document.querySelector(".baseline");
const leadingBtn = document.querySelector(".leading");
const stackedBtn = document.querySelector(".stacked");
const snackbarOne = document.querySelector(".basic-snackbar");
const snackbarTwo = document.querySelector(".snackbar-position-leading");
const snackbarThree = document.querySelector("#stacked-snackbar");
const closeBtn1 = document.querySelector(".close-icon-one");
const closeBtn2 = document.querySelector(".close-icon-two");
const closeBtn3 = document.querySelector(".close-icon-three");

function showBaselineSnackbar() {
  snackbarOne.style.display = "block";
}
function showLeadingSnackbar() {
  snackbarTwo.style.display = "block";
}
function showStackedSnackbar() {
  snackbarThree.style.display = "block";
}

baselineBtn.addEventListener("click", showBaselineSnackbar);
leadingBtn.addEventListener("click", showLeadingSnackbar);
stackedBtn.addEventListener("click", showStackedSnackbar);

// Close Functionality
function closeBaselineSnackbar() {
  snackbarOne.style.display = "none";
}
function closeLeadingSnackbar() {
  snackbarTwo.style.display = "none";
}
function closeStackedSnackbar() {
  snackbarThree.style.display = "none";
}
closeBtn1.addEventListener("click", closeBaselineSnackbar);
closeBtn2.addEventListener("click", closeLeadingSnackbar);
closeBtn3.addEventListener("click", closeStackedSnackbar);
