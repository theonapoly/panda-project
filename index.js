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
