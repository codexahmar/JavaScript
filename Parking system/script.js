let cars = [];
let time = [];
let charges = [];

let submitCarBtn = document
  .querySelector(".submitCar")
  .addEventListener("click", function () {
    let carName = document.querySelector(".carName").value;
    cars.push(carName);
  });

let submitTimeBtn = document
  .querySelector(".submitTime")
  .addEventListener("click", function () {
    let parkTime = +document.querySelector(".parkTime").value;
    time.push(parkTime);
  });

let ChargesBtn = document
  .querySelector(".charges")
  .addEventListener("click", function () {
    let displayElement = document.querySelector(".display");
    displayElement.innerHTML = "<h2>Parking Information</h2>";
    charges = [];
    for (let i = 0; i < time.length; i++) {
      let parkingCharges;
      if (time[i] >= 10 && time[i] < 50) {
        parkingCharges = 1000;
      } else if (time[i] >= 50 && time[i] < 100) {
        parkingCharges = 2000;
      } else if (time[i] >= 100 && time[i] < 160) {
        parkingCharges = 3000;
      }
      charges.push(parkingCharges);
      let paragraph = document.createElement("p");
      paragraph.textContent = `Car: ${cars[i]}, Time: ${time[i]}, Charges: ${parkingCharges}`;
      displayElement.appendChild(paragraph);
    }
    document.querySelector(".carName").value = "";
    document.querySelector(".parkTime").value = "";
  });
function Profit() {
  let TotalProfit = 0;
  for (let i = 0; i < charges.length; i++) {
    TotalProfit += charges[i];
  }
  console.log(
    `Total Entries of cars ${cars.length} and Total profit of today is ${TotalProfit}`
  );
}
let reset = document
  .querySelector(".reset")
  .addEventListener("click", function () {
    let displayElement = document.querySelector(".display");
    displayElement.innerHTML = "";
  });
