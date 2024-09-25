const pokemonModal = document.getElementById("pokemon-modal");
const openPokemonModal = document.getElementById("open-pokemon-modal");
const closePokemonModal = document.getElementById("close-pokemon-modal");

openPokemonModal.addEventListener("click", () => {
  pokemonModal.showModal();
});

closePokemonModal.addEventListener("click", () => {
  pokemonModal.close();
});

const chatModal = document.getElementById("chat-modal");
const openChatModal = document.getElementById("open-chat-modal");
const closeChatModal = document.getElementById("close-chat-modal");

openChatModal.addEventListener("click", () => {
  chatModal.showModal();
});

closeChatModal.addEventListener("click", () => {
  chatModal.close();
});

const meetModal = document.getElementById("meet-modal");
const openMeetModal = document.getElementById("open-meet-modal");
const closeMeetModal = document.getElementById("close-meet-modal");

openMeetModal.addEventListener("click", () => {
  meetModal.showModal();
});

closeMeetModal.addEventListener("click", () => {
  meetModal.close();
});

const apiModal = document.getElementById("api-modal");
const openApiModal = document.getElementById("open-api-modal");
const closeApiModal = document.getElementById("close-api-modal");

openApiModal.addEventListener("click", () => {
  apiModal.showModal();
});

closeApiModal.addEventListener("click", () => {
  apiModal.close();
});

const flixModal = document.getElementById("flix-modal");
const openFlixModal = document.getElementById("open-flix-modal");
const closeFlixModal = document.getElementById("close-flix-modal");

openFlixModal.addEventListener("click", () => {
  flixModal.showModal();
});

closeFlixModal.addEventListener("click", () => {
  flixModal.close();
});

const angularModal = document.getElementById("angular-modal");
const openAngularModal = document.getElementById("open-angular-modal");
const closeAngularModal = document.getElementById("close-angular-modal");

openAngularModal.addEventListener("click", () => {
  angularModal.showModal();
});

closeAngularModal.addEventListener("click", () => {
  angularModal.close();
});

document.addEventListener("click", (event) => {
  if (event.target == angularModal) {
    angularModal.close();
  }
});

document.addEventListener("click", (event) => {
  if (event.target == chatModal) {
    chatModal.close();
  }
});

document.addEventListener("click", (event) => {
  if (event.target == apiModal) {
    apiModal.close();
  }
});

document.addEventListener("click", (event) => {
  if (event.target == flixModal) {
    flixModal.close();
  }
});

document.addEventListener("click", (event) => {
  if (event.target == chatModal) {
    chatModal.close();
  }
});

document.addEventListener("click", (event) => {
  if (event.target == pokemonModal) {
    pokemonModal.close();
  }
});
