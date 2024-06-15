"use strict";

let Modal = document.querySelector(".modal");
let OpenModal = document.querySelectorAll(".show-modal");
let CloseModal = document.querySelector(".close-modal");
let Overlay = document.querySelector(".overlay");

function Open() {
  Modal.classList.remove("hidden");
  Overlay.classList.remove("hidden");
}
function Close() {
  Modal.classList.add("hidden");
  Overlay.classList.add("hidden");
}

for (let i = 0; i < OpenModal.length; i++) {
  OpenModal[i].addEventListener("click", Open);
}

CloseModal.addEventListener("click", Close);
Overlay.addEventListener("click", Close);

