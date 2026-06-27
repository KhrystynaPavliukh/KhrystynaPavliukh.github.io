const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});
const slides = document.querySelectorAll(".certificate-slide");
const prevBtn = document.querySelector(".cert-prev");
const nextBtn = document.querySelector(".cert-next");

let currentCert = 0;

function updateCertificateSlider() {
  slides.forEach((slide) => {
    slide.classList.remove("active", "prev", "next", "prev-2", "next-2");
  });

  const total = slides.length;

  const prev = (currentCert - 1 + total) % total;
  const next = (currentCert + 1) % total;
  const prev2 = (currentCert - 2 + total) % total;
  const next2 = (currentCert + 2) % total;

  slides[currentCert].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
  slides[prev2].classList.add("prev-2");
  slides[next2].classList.add("next-2");
}

prevBtn.addEventListener("click", () => {
  currentCert = (currentCert - 1 + slides.length) % slides.length;
  updateCertificateSlider();
});

nextBtn.addEventListener("click", () => {
  currentCert = (currentCert + 1) % slides.length;
  updateCertificateSlider();
});

updateCertificateSlider();
const coachesList = document.querySelector(".coaches-list");
const coachSlides = document.querySelectorAll(".coaches-list > div");
const coachPrev = document.querySelector(".coach-prev");
const coachNext = document.querySelector(".coach-next");

let currentCoach = 0;

function updateCoachSlider() {
  if (!coachesList) return;
  coachesList.style.transform = `translateX(-${currentCoach * 100}%)`;
}

if (coachPrev && coachNext && coachSlides.length) {
  coachPrev.addEventListener("click", () => {
    currentCoach =
      currentCoach === 0 ? coachSlides.length - 1 : currentCoach - 1;

    updateCoachSlider();
  });

  coachNext.addEventListener("click", () => {
    currentCoach =
      currentCoach === coachSlides.length - 1 ? 0 : currentCoach + 1;

    updateCoachSlider();
  });
}

const aboutAreas = document.querySelector(".about-areas");
const aboutSlides = document.querySelectorAll(".about-areas > div");

const aboutPrev = document.querySelector(".about-prev");
const aboutNext = document.querySelector(".about-next");

let currentAbout = 0;

function updateAboutSlider() {
  if (window.innerWidth > 900) return;

  aboutAreas.style.transform = `translateX(-${currentAbout * 100}%)`;
}

if (aboutPrev && aboutNext) {
  aboutPrev.addEventListener("click", () => {
    currentAbout =
      currentAbout === 0 ? aboutSlides.length - 1 : currentAbout - 1;

    updateAboutSlider();
  });

  aboutNext.addEventListener("click", () => {
    currentAbout =
      currentAbout === aboutSlides.length - 1 ? 0 : currentAbout + 1;

    updateAboutSlider();
  });
}

const legalOpenButtons = document.querySelectorAll("[data-modal]");
const legalModals = document.querySelectorAll(".legal-modal");

legalOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.modal;
    const modal = document.getElementById(modalId);

    if (!modal) return;

    modal.classList.add("active");
    document.body.classList.add("menu-open");
  });
});

legalModals.forEach((modal) => {
  const closeElements = modal.querySelectorAll("[data-close]");

  closeElements.forEach((element) => {
    element.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    legalModals.forEach((modal) => modal.classList.remove("active"));
    document.body.classList.remove("menu-open");
  }
});

const reviewOpenButton = document.querySelector("[data-review-modal]");
const reviewModal = document.getElementById("review-modal");
const reviewCloseButtons = document.querySelectorAll("[data-review-close]");

if (reviewOpenButton && reviewModal) {
  reviewOpenButton.addEventListener("click", () => {
    reviewModal.classList.add("active");
    document.body.classList.add("menu-open");
  });
}

reviewCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    reviewModal.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});
