const preloader = document.querySelector("[data-preaload]");
window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}
addEventOnElements(navTogglers, "click", toggleNavbar);
const header = document.querySelector("[data-header]");
let lastScrollPos = 0;
const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}
window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}
heroSliderPrevBtn.addEventListener("click", slidePrev);
let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}
addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});
addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);
window.addEventListener("load", autoSlide);
const backToTopButton = document.getElementById('backToTop');
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };
    backToTopButton.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const menuData = {
      "values": [
        ["Special Salad", "/assets/images/Special-salad.jpg", "700 Birr", "Salads 🥗"],
        ["Basic Salad", "/assets/images/salad.jpg", "900 Birr", "Salads 🥗"],
        ["Egg on toast", "/assets/images/Egg.jpg", "700 Birr", "Brunch 🥖"],
        ["Baguette", "/assets/images/baguette.jpg", "900 Birr", "Brunch 🥖"],
        ["Tea", "/assets/images/Tea.jpg", "300 Birr", "Drinks ☕️"],
        ["Red tea", "/assets/images/red tea.jpg", "400 Birr", "Drinks ☕️"],
        ["Espresso", "/assets/images/espresso.jpg", "5 Birr", "Drinks ☕️"],
        ["Coffee", "/assets/images/coffee.jpg", "3 Birr", "Drinks ☕️"],
        ["Cappuccino", "/assets/images/capucinno.jpg", "4 Birr", "Drinks ☕️"]
      ]
    };
    const menuContainer = document.getElementById('menu');
    const categories = {
      "Salads": "salads",
      "Brunch": "brunch",
      "Drinks": "drinks"
    };
    menuData.values.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.id = categories[item[3].split(" ")[0]];
      const cardImage = document.createElement('div');
      cardImage.className = 'card-image';
      const img = document.createElement('img');
      img.src = item[1];
      cardImage.appendChild(img);
      const cardText = document.createElement('div');
      cardText.className = 'card-text';
      const mealType = document.createElement('p');
      mealType.className = 'card-meal-type';
      mealType.innerText = item[3];
      const title = document.createElement('h2');
      title.className = 'card-title';
      title.innerText = item[0];
      const body = document.createElement('p');
      body.className = 'card-body';
      body.innerText = "Lorem ipsum dolor sit amet consecteturt";
      cardText.append(mealType, title, body);
      const cardPrice = document.createElement('div');
      cardPrice.className = 'card-price';
      cardPrice.innerText = item[2];
      card.append(cardImage, cardText, cardPrice);
      menuContainer.appendChild(card);
    });