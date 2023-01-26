let currentSlide = 0;
const totalSlide = 10;
const timeGap = 500;

// slider elements
const slider = document.querySelector(".slider");
const content = document.querySelector(".content");
const quote = document.querySelector(".quote span");
const joinus = document.querySelector(".joinus");
const story = document.querySelector(".story");

// nav elements
const navbar = document.querySelectorAll(".nav-item");
const navText = document.querySelector(".nav-text");
const nextButton = document.querySelector(".arrow.next");
const prevButton = document.querySelector(".arrow.prev");

// content
const data = [
  {
    heading: "WE ARE BREAKING <br/> OUR VOW <br/> OF SILENCE",
    backgroundPosition: "0% 0%",
    alignItems: "initial",
    justifyContent: "initial",
    textAlign: "initial",
  },
  {
    heading: "TALENT IS GIVEN <br/> TRUE SKILL IS <br/> EARNED",
    backgroundPosition: "11% 0%",
    alignItems: "center",
    justifyContent: "initial",
    textAlign: "initial",
  },
  {
    heading: "BE FLEXIBLE TO <br/> CHANGE AND <br/> STURDY IN <br/> CONVICTION",
    backgroundPosition: "22% 0%",
    alignItems: "center",
    justifyContent: "initial",
    textAlign: "initial",
  },
  {
    heading: "USE MANY SKILLS <br/> YET WORK ONE",
    backgroundPosition: "33% 0%",
    alignItems: "center",
    justifyContent: "flex-end",
    textAlign: "right",
  },
  {
    heading: "TO MASTER <br/> ANYTHING FIND <br/> INTEREST IN <br/> EVERYTHING",
    backgroundPosition: "44% 0%",
    alignItems: "center",
    justifyContent: "flex-end",
    textAlign: "right",
  },
  {
    heading:
      "INDIVIDUAL <br/> FLOURISH <br/> IF CULTURE <br/> AND WISDOM <br/> ARE SHARED",
    backgroundPosition: "55% 0%",
    alignItems: "center",
    justifyContent: "flex-end",
    textAlign: "right",
  },
  {
    heading: "TRAIN FOR <br /> PERFECTION BUT <br /> AIM FOR MORE",
    backgroundPosition: "66% 0%",
    alignItems: "center",
    justifyContent: "initial",
    textAlign: "initial",
  },
  {
    heading: "TAKE PRIDE IN YOUR <br /> WORK BUT DO NOT <br /> SEEK FOR PRAISE",
    backgroundPosition: "77% 0%",
    alignItems: "center",
    justifyContent: "initial",
    textAlign: "initial",
  },
  {
    heading: "TEMPORARY <br/> SACRIFICE BRINGS<br /> LASTING RESULTS",
    backgroundPosition: "77% 0%",
    alignItems: "center",
    justifyContent: "initial",
    textAlign: "initial",
  },
  {
    heading: "",
    backgroundPosition: "77% 0%",
    alignItems: "initial",
    justifyContent: "initial",
    textAlign: "initial",
  },
];

/*To handle number navigations*/
function handleNav(n) {
  content.style.opacity = 0;
  navbar.forEach((navItem, i) => {
    if (i === n) {
      navItem.setAttribute("class", "nav-item active");
    } else {
      navItem.setAttribute("class", "nav-item");
    }
  });

  setTimeout(() => setSlide(n), timeGap);
}

/*To handle next button*/
function nextSlide() {
  content.style.opacity = 0;

  setTimeout(() => {
    setSlide(Math.abs((currentSlide + 1) % totalSlide));
    handleNav(currentSlide);
  }, timeGap);
}

/*To handle previous button*/
function prevSlide() {
  content.style.opacity = 0;

  setTimeout(() => {
    setSlide(Math.abs((currentSlide - 1) % totalSlide));
    handleNav(currentSlide);
  }, timeGap);
}

/*To change slide content */
function setSlide(n) {
  currentSlide = n;

  //change background
  slider.style.backgroundPosition = data[currentSlide].backgroundPosition;

  //change quote
  quote.innerHTML = data[currentSlide].heading;

  //change content layout
  content.style.alignItems = data[currentSlide].alignItems;
  content.style.justifyContent = data[currentSlide].justifyContent;
  content.style.textAlign = data[currentSlide].textAlign;
  content.style.opacity = 1;

  //if currentSlide is between 0-9
  currentSlide !== 0 && currentSlide !== 9
    ? (navText.innerText = `Step ${currentSlide} out of 8 on the path to digital enlightment`)
    : (navText.innerText = "");

  //if currentSlide is between 1-9
  currentSlide !== 0
    ? (story.style.display = "none")
    : (story.style.display = "block");

  //if currentSlide is excatly 9
  currentSlide === 9
    ? (joinus.style.right = "0%") && (nextButton.style.display = "none")
    : (joinus.style.right = "-80%") && (nextButton.style.display = "block");

  //if currentSlide is excatly 9
  currentSlide === 0
    ? (prevButton.style.display = "none")
    : (prevButton.style.display = "block");
}
