// Bouton "voir plus"
const containers = document.querySelectorAll(".section");
// const patteRight = document.querySelector(".patte-right");
// const patteLeft = document.querySelector(".patte-left");
// const patteIllu = document.querySelector(".patte-illu");
const counterNav = document.querySelector("h6");
let counter = 0;

const navbarMobil = document.querySelector(".navbar-button");
const navbarVisible = document.querySelector(".navbarMobil");

const position = document.querySelectorAll(".leaf");

const imgFact1 = document.getElementById("anim-1");
const imgFact2 = document.getElementById("anim-2");
const imgFact3 = document.getElementById("anim-3");
let items = document.querySelectorAll(".slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
const dons = document.querySelectorAll(".dons");
// const pandaH = document.querySelector(".hero-title");
const heroPanda = document.querySelector(".hero-panda");
const nome = ["PANDA"];
let pandaIndex = 0;
// --------------nav bar--------------------------
navbarMobil.addEventListener("click", () => {
  navbarVisible.style.display = "initial";
  navbarClose();
});
const navbarClose = () => {
  for (let i = 0; i < position.length; i++) {
    position[i].addEventListener("click", () => {
      navbarVisible.style.display = "none";
    });
  }
};
navbarClose();

//------------------hero-------------------
// const crietobject = () => {
//   const object = document.createElement("h1");
//   object.classList.add("hero-panda");
//   pandaH.appendChild(object);
//   pandaH.textContent;
// };
// crietobject();

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
const pattAnimation = () => {
  const pattImg = document.createElement("img");
  pattImg.classList.add("pattImg");
  document.body.appendChild(pattImg);
  pattImg.src = "./assets/icon/patte-illu.png";
  const size = Math.random() * 100 + "px";
  pattImg.style.height = size;
  pattImg.style.width = size;
  pattImg.style.top = Math.random() * 600 + "vh";
  pattImg.style.left = Math.random() * 100 + "%" - 100 + "px";

  pattImg.addEventListener("click", () => {
    counter++;
    counterNav.textContent = counter;
    pattImg.remove();
  });
  setTimeout(() => {
    pattImg.remove();
  }, 2000);
};
setInterval(pattAnimation, 500);

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
  const nbrPics = 8;
  let position = 0;
  const container = document.querySelector(".container-carrousel");
  const btnLeft = document.getElementById("btn-left");
  const btnRight = document.getElementById("btn-right");

  container.style.width = 100 * nbrPics + "vw";
  for (let i = 1; i <= nbrPics; i++) {
    const divPics = document.createElement("div");
    divPics.className = "photo";
    divPics.style.backgroundImage = `url('./assets/photos/carrousel-pic-${i}.png')`;
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
const sectionOne = document.querySelector(`.section-1`);
const sectionTwo = document.querySelector(`.section-2`);
const sectionThree = document.querySelector(`.section-3`);
const sectionFour = document.querySelector(`.section-4`);
const sectionFive = document.querySelector(`.section-5`);
const sectionSix = document.querySelector(`.section-6`);

function parallax(elemChange) {
  window.addEventListener("scroll", () => {
    const topElementToTopViewport = elemChange.getBoundingClientRect().top;
    const botElementToTopViewport = elemChange.getBoundingClientRect().bottom;
    const { scrollTop, clientHeight } = document.documentElement;
    const classShow = document.querySelector(".show");

    if (
      scrollTop >
        (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8 &&
      scrollTop <
        (scrollTop + botElementToTopViewport).toFixed() - clientHeight * 0.3
    ) {
      elemChange.classList.add("show");
      elemChange.style.opacity = "1";
      elemChange.style.transition = "2s";
    } else {
      elemChange.style.opacity = "0";
    }
  });
}

parallax(sectionOne);
parallax(sectionTwo);
parallax(sectionThree);
parallax(sectionFour);
parallax(sectionFive);
parallax(sectionSix);

// window.addEventListener("click", (event) => {
//   console.log(event);
// });
let a = 2879;
document.querySelector(".donateur").innerHTML = a;
const addnamber = () => {
  for (let i = 0; i < dons.length; i++) {
    dons[i].addEventListener("click", () => {
      a++;
      document.querySelector(".donateur").innerHTML = a;
    });
  }
};
addnamber();

let active = 3;
function loadShow() {
  let stt = 0;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = "none";
  items[active].style.opacity = 1;
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}
loadShow();
next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
};

// Fonction couleur BG

const allDocument = document.querySelector(`body`);
const backgroundChange = document.querySelector(`.article-black`);

window.addEventListener(`scroll`, () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = backgroundChange.getBoundingClientRect().top;
  const botElementToTopViewport =
    backgroundChange.getBoundingClientRect().bottom;

  if (
    scrollTop >
      (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.2 &&
    scrollTop <
      (scrollTop + botElementToTopViewport).toFixed() - clientHeight * 0.2
  ) {
    allDocument.classList.add("background-transition");
    const bgTransition = document.querySelector(".background-transition");
    bgTransition.style.backgroundOpacity = "1";
    bgTransition.style.backgroundColor = "#09090c";
    bgTransition.style.transition = "1.5s";
  } else {
    allDocument.classList.add("background-transition");
    const bgTransition = document.querySelector(".background-transition");
    bgTransition.style.backgroundOpacity = "0";
    bgTransition.style.backgroundColor = "white";
    allDocument.classList.remove("background-transition");
  }
});
