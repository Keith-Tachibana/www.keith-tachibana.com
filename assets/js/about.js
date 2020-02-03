// Spanish Bar
const modalbox_spanish_bar = document.getElementById('modalbox_spanish_bar');
const spanish_bar = document.getElementById('spanish_bar');
const modal_spanish_bar = document.getElementById('modal_spanish_bar');
const caption_spanish_bar = document.getElementById('caption_spanish_bar');

spanish_bar.onclick = function () {
  modalbox_spanish_bar.style.display = "block";
  modal_spanish_bar.src = this.src;
  caption_spanish_bar.innerHTML = this.alt;
}

const close_spanish_bar = document.getElementById('close_spanish_bar');
close_spanish_bar.onclick = function () {
  modalbox_spanish_bar.style.display = "none";
}
