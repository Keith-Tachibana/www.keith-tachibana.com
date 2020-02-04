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

// Greenpoint Brooklyn
const modalbox_greenpoint_brooklyn = document.getElementById('modalbox_greenpoint_brooklyn');
const greenpoint_brooklyn = document.getElementById('greenpoint_brooklyn');
const modal_greenpoint_brooklyn = document.getElementById('modal_greenpoint_brooklyn');
const caption_greenpoint_brooklyn = document.getElementById('caption_greenpoint_brooklyn');

greenpoint_brooklyn.onclick = function () {
  modalbox_greenpoint_brooklyn.style.display = "block";
  modal_greenpoint_brooklyn.src = this.src;
  caption_greenpoint_brooklyn.innerHTML = this.alt;
}

const close_greenpoint_brooklyn = document.getElementById('close_greenpoint_brooklyn');
close_greenpoint_brooklyn.onclick = function () {
  modalbox_greenpoint_brooklyn.style.display = "none";
}
