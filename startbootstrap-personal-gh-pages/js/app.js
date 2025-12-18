const ticketInput = document.getElementById("ticket");
const rentalInput = document.getElementById("rental");
const foodInput = document.getElementById("food");
const resultP = document.getElementById("result");
const calcBtn = document.getElementById("calcBtn");

calcBtn.addEventListener("click", () => {
  const ticket = Number(ticketInput.value) || 0;
  const rental = Number(rentalInput.value) || 0;
  const food = Number(foodInput.value) || 0;

  const total = ticket + rental + food;

  resultP.textContent = `Total trip cost: $${total.toFixed(2)}`;
});
