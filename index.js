const heroPanda = document.querySelector(".hero-panda");
let nome = ["PANDA"];
let pandaIndex = 0;
const createLettre = () => {
  const letter = document.createElement("spam");
  heroPanda.appendChild(letter);
  letter.textContent = nome[0][pandaIndex];
};

setInterval(() => {
  createLettre();
  pandaIndex++;
}, 300);
