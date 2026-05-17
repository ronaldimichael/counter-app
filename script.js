// ambil elemen increment button
let incrementButton = document.getElementById("counter-increment_button");
let decrementButton = document.getElementById("counter-decrement_button");
let counterTotal = document.getElementById("counter-total");

let counter = 0;
incrementButton.addEventListener("click", () => {
  counter++;
  counterTotal.textContent = counter;
});

decrementButton.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
  }
  counterTotal.textContent = counter;
});
