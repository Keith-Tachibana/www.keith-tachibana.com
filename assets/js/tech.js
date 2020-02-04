// PC Side View
const modalbox_pc_side_view = document.getElementById('modalbox_pc_side_view');
const pc_side_view = document.getElementById('pc_side_view');
const modal_pc_side_view = document.getElementById('modal_pc_side_view');
const caption_pc_side_view = document.getElementById('caption_pc_side_view');

pc_side_view.onclick = function () {
  modalbox_pc_side_view.style.display = "block";
  modal_pc_side_view.src = this.src;
  caption_pc_side_view.innerHTML = this.alt;
}

const close_pc_side_view = document.getElementById('close_pc_side_view');
close_pc_side_view.onclick = function () {
  modalbox_pc_side_view.style.display = "none";
}

// PC Front View
const modalbox_pc_fron_view = document.getElementById('modalbox_pc_front_view');
const pc_front_view = document.getElementById('pc_front_view');
const modal_pc_front_view = document.getElementById('modal_pc_front_view');
const caption_pc_front_view = document.getElementById('caption_pc_front_view');

pc_front_view.onclick = function () {
  modalbox_pc_front_view.style.display = "block";
  modal_pc_front_view.src = this.src;
  caption_pc_front_view.innerHTML = this.alt;
}

const close_pc_front_view = document.getElementById('close_pc_front_view');
close_pc_front_view.onclick = function () {
  modalbox_pc_front_view.style.display = "none";
}
