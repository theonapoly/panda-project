// Bouton "voir plus" -----------------------
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
const imgFact1 = document.getElementById("anim-1");
const imgFact2 = document.getElementById("anim-2");
const imgFact3 = document.getElementById("anim-3");

function eachFact(item) {
  function addText(array) {
    const display = document.createElement("p");
    display.className = "fact";
    item.appendChild(display);
    display.appendChild(document.createTextNode(`Le saviez-vous ? ${array}`));
  }

  function rmText() {
    const display = item.querySelector("p");
    if (display) {
      display.remove();
    }
  }

  function rdmString(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  }

  function clickDisplay() {
    const display = item.querySelector("p");
    if (!display) {
      addText(rdmString(listPandaFact));
    } else {
      rmText();
    }
  }

  item.addEventListener("click", clickDisplay);
}

eachFact(imgFact1);
eachFact(imgFact2);
eachFact(imgFact3);

// Carrousel -----------------------
document.body.onload = function () {
  const nbrPics = 7;
  let position = 0;
  const container = document.querySelector(".container-carrousel");
  const btnLeft = document.getElementById("btn-left");
  const btnRight = document.getElementById("btn-right");

  container.style.width = 100 * nbrPics + "vw";
  for (let i = 1; i <= nbrPics; i++) {
    const divPics = document.createElement("div");
    divPics.className = "photo";
    divPics.style.backgroundImage = `url('/assets/photos/photo-panda-${i}.jpg')`;
    container.appendChild(divPics);
  }

  btnLeft.addEventListener("click", function () {
    if (position > 0) {
      position--;
      container.style.transform = `translateX(-${position * 100}vw)`;
      container.style.transition = "all 0.5s ease";
    }
  });

  btnRight.addEventListener("click", function () {
    if (position < nbrPics - 1) {
      position++;
      container.style.transform = `translateX(-${position * 100}vw)`;
      container.style.transition = "all 0.5s ease";
    }
  });
};

// MagicScroll -----------------------
// let controller = new ScrollMagic.Controller();

// let scene = new ScrollMagic.Scene({
//   triggerElement: ".section-2",
// })

//   .setClassToggle(".section-2", "show")
//   .addTo(controller);

// const body = document.getElementsByTagName("body");

// Effet Parallax -----------------------
const sectionOne = document.querySelector(".section-1");
const iconsInfos = document.querySelector(".icons-infos");

const sectionTwo = document.querySelector(".section-2");
const strongWhite = document.querySelector(".strong-text-white");

const sectionThree = document.querySelector(".section-3");
const carrouselPart = document.querySelector(".carrousel");

const sectionFour = document.querySelector(".section-4");
const animeTwo = document.querySelector(".anim-2");

const sectionFive = document.querySelector(".section-5");
const animeThree = document.querySelector(".nextanim");

const sectionSix = document.querySelector(".section-6");
const strongBlack = document.querySelector(".strong-text-black");

let offTop, offBot;

function parallax(elemChange, elemNext) {
  let offTop = elemChange.offsetTop - 700;
  let offBot = elemNext.offsetTop - 0.3 * window.innerHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= offTop && window.scrollY < offBot) {
      elemChange.classList.add("show");
      const classShow = document.querySelector(".show");
      classShow.style.opacity = "1";
      classShow.style.transition = "2s";
    } else {
      elemChange.classList.remove("show");
      elemChange.style.opacity = "0";
    }
    offTop = elemChange.offsetTop - 700;
    offBot = elemNext.offsetTop - 0.3 * window.innerHeight;
  });
}

parallax(sectionOne, iconsInfos);
parallax(sectionTwo, strongWhite);
parallax(sectionThree, carrouselPart);
parallax(sectionFour, animeTwo);
parallax(sectionFive, animeThree);
parallax(sectionSix, strongBlack);

// window.addEventListener("click", (event) => {
//   console.log(event);
// });
