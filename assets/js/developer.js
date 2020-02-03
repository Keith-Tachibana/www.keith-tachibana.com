// Server Room 29 Prime
const modalbox_server_room_29prime = document.getElementById('modalbox_server_room_29prime');
const server_room_29prime = document.getElementById('server_room_29prime');
const modal_server_room_29prime = document.getElementById('modal_server_room_29prime');
const caption_server_room_29prime = document.getElementById('caption_server_room_29prime');

server_room_29prime.onclick = function () {
  modalbox_server_room_29prime.style.display = "block";
  modal_server_room_29prime.src = this.src;
  caption_server_room_29prime.innerHTML = this.alt;
}

const close_server_room_29prime = document.getElementById('close_server_room_29prime');
close_server_room_29prime.onclick = function () {
  modalbox_server_room_29prime.style.display = "none";
}

// JetSuiteX Joffrey
const modalbox_jetsuitex_joffrey = document.getElementById('modalbox_jetsuitex_joffrey');
const jetsuitex_joffrey = document.getElementById('jetsuitex_joffrey');
const modal_jetsuitex_joffrey = document.getElementById('modal_jetsuitex_joffrey');
const caption_jetsuitex_joffrey = document.getElementById('caption_jetsuitex_joffrey');

jetsuitex_joffrey.onclick = function () {
  modalbox_jetsuitex_joffrey.style.display = "block";
  modal_jetsuitex_joffrey.src = this.src;
  caption_jetsuitex_joffrey.innerHTML = this.alt;
}

const close_jetsuitex_joffrey = document.getElementById('close_jetsuitex_joffrey');
close_jetsuitex_joffrey.onclick = function () {
  modalbox_jetsuitex_joffrey.style.display = "none";
}
