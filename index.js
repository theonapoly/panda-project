// Bouton "voir plus"
const containers = document.querySelectorAll(".section");

containers.forEach((parentContainer) => {
  parentContainer.addEventListener("click", (event) => {
    const current = event.target;

    const isReadMoreBtn = current.className.includes("read-more-btn");

    if (!isReadMoreBtn) return;

    const currentText =
      event.target.parentNode.querySelector(".read-more-text");

    currentText.classList.toggle("read-more-text--show");

    current.textContent = current.textContent.includes("+") ? "-" : "+";
  });
});

const heroPanda = document.querySelector(".hero-panda");
let nome = ["PANDA"];
let pandaIndex = 0;
const createLettre = () => {
  const letter = document.createElement("spam");
  heroPanda.appendChild(letter);
  letter.textContent = nome[0][pandaIndex];
};

setInterval(() => {
  if (pandaIndex < 5) {
    createLettre();
    pandaIndex++;
  }
}, 300);
