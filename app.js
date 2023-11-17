const textarea = document.querySelector("#textarea");
const totalCounter = document.querySelector("#total-counter");
const remainingCounter = document.querySelector("#remaining-counter");

textarea.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalCounter.innerText = textarea.value.length;
}
