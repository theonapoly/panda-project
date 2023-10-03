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

// Carrousel
document.body.onload = function () {
  const nbrPics = 7;
  let position = 0;
  const container = document.querySelector(".container-carrousel");
  const btnLeft = document.getElementById("btn-left");
  const btnRight = document.getElementById("btn-right");

  container.style.width = 400 * nbrPics + "px";
  for (let i = 1; i <= nbrPics; i++) {
    const divPics = document.createElement("div");
    divPics.className = "photo";
    divPics.style.backgroundImage = `url('/assets/photos/photo-panda-${i}.jpg')`;
    container.appendChild(divPics);
  }

  btnLeft.addEventListener("click", function () {
    if (position > 0) {
      position--;
      container.style.transform = `translateX(-${position * 400}px)`;
      container.style.transition = "all 0.5s ease";
    }
  });

  btnRight.addEventListener("click", function () {
    if (position < nbrPics - 1) {
      position++;
      container.style.transform = `translateX(-${position * 400}px)`;
      container.style.transition = "all 0.5s ease";
    }
  });
};
