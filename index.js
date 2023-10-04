// Bouton "voir plus"
const containers = document.querySelectorAll(".section");
const patteRight = document.querySelector(".patte-right");
const patteLeft = document.querySelector(".patte-left");
const heroPanda = document.querySelector(".hero-panda");
const navbarMobil = document.querySelector(".navbar-button");
const navbarVisible = document.querySelector(".navbarMobil");
const hoosePosition = document.querySelector(".bamboo-leaf");
const nome = ["PANDA"];
let pandaIndex = 0;

// --------------nav bare--------------------------
navbarMobil.addEventListener("click", () => {
  navbarVisible.style.display = "initial";
});
hoosePosition.addEventListener("click", () => {
  navbarVisible.style.display = "none";
});

//------------------hero-------------------
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

//---------------------------pattAnimation---------------------------

const pattAnimation = (patt) => {
  const pattImg = document.createElement("img");
  patt.appendChild(pattImg);
  pattImg.src = "./assets/icon/patte-illu.png";
  setTimeout(() => {
    pattImg.remove();
  }, 900);
};
setInterval(() => {
  pattAnimation(patteRight);
}, 2000);
setTimeout(() => {
  setInterval(() => {
    pattAnimation(patteLeft);
  }, 2000);
}, 1000);

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

// Fonction panda cliquable
const listPandaFact = [
  "Le panda passe environ 14 heures par jour à manger.",
  "Le poids du bébé panda est environs 900 fois inférieur à celui de son parent.",
  "Le bébé panda est de couleur rose à la naissance.",
  "Une panda peut privilégier l'un de ses jumeaux pour augmenter ses chances de survie.",
  "Les pandas sont d'excellents grimpeurs et savent nager.",
  "Les pandas ont un faux pouce opposable qui les aide à saisir leur nourriture, ce qui leur donne l'équivalent de six doigts sur leurs pattes avant.",
  "Le panda ne se nourrit pas exclusivement de bambou et peut consommer des protéines animales environ 1% du temps.",
  "Les pandas se tiennent parfois debout sur leurs deux pattes avant pour marquer leur territoire.",
  "Un panda géant défèque en moyenne environ 40 fois par jour.",
  "Contrairement à son cousin l'ours, le panda n'hiberne pas.",
  "Contrairement à la croyance populaire, le panda n'a pas tant de mal à se reproduire quand il n'est pas en captivité.",
  "Le nombre de pandas augmente légèrement depuis quelques années.",
  "Un panda mange à peu près son poids en bambou chaque jour.",
  "Les pandas sont des animaux solitaires et ne vivent pas en communauté.",
  "Le panda ne digère que 20% de la valeur nutritive d'un bambou.",
  "Les pandas géants sont devenus principalement herbivores pour survivre grâce à l'abondance de bambou dans leur habitat.",
  "Les pandas ont un camouflage efficace malgré leur couleur particulière en noir et blanc.",
  "Il existe deux sous-espèces distinctes de panda géant : le panda géant de Sichuan et le panda géant de Qinling.",
];

const imgFact = document.getElementById("anim-1");
const idFact = document.getElementById("display-fact");

function addText(item) {
  const display = document.createElement("p");
  imgFact.appendChild(display);
  display.appendChild(document.createTextNode(`Le saviez-vous ? ${item}`));
}

function rmText() {
  const display = imgFact.querySelector("p");
  if (display) {
    display.remove();
  }
}

function rdmString(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function clickDisplay() {
  const display = imgFact.querySelector("p");
  if (!display) {
    addText(rdmString(listPandaFact));
  } else {
    rmText();
  }
}

imgFact.addEventListener("click", clickDisplay);
