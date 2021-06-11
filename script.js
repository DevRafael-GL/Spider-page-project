const about = document.querySelector(".sobre");
const modalContainer = document.querySelector(".modal-container");
const closebtn = document.querySelector(".modal-container button");
const videoAbout = document.querySelector(".video-about");

function openModal() {
  modalContainer.classList.add("active");
}

function closeModal() {
  modalContainer.classList.remove("active");
  videoAbout.pause();
}

about.addEventListener("click", openModal);

closebtn.addEventListener("click", closeModal);
