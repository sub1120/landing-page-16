let currentSlide = 0;
const slider = document.querySelector(".slider");
const thought = document.querySelector(".thought");
const heading = document.querySelector(".heading");
const allBox = document.querySelectorAll(".box");
const navText = document.querySelector(".nav-text");
const contacts = document.querySelector(".contacts");
const story = document.querySelector(".story");

const content = [
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
    heading: " USE MANY SKILLS <br/> YET WORK ONE",
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
    justifyContent: "flex-end",
    textAlign: "initial",
  },
];

function nextScreen() {
  heading.style.opacity = 0;

  currentSlide += 1;
  if (currentSlide > 9) {
    currentSlide = 0;
  }

  setTimeout(() => setScreen(currentSlide), 1000);
}

function prevScreen() {
  currentSlide -= 1;
  if (currentSlide < 0) {
    currentSlide = 9;
  }

  setScreen(currentSlide);
}

function setScreen(n) {
  slider.style.backgroundPosition = content[n].backgroundPosition;
  slider.style.alignItems = content[n].alignItems;
  slider.style.justifyContent = content[n].justifyContent;
  slider.style.textAlign = content[n].textAlign;
  thought.innerHTML = content[n].heading;
  heading.style.opacity = 1;

  n !== 0 && n !== 9
    ? (navText.innerText = `Step ${n} out of 8 on the path to digital enlightment`)
    : (navText.innerText = "");

  n !== 0 ? (story.style.display = "none") : (story.style.display = "block");

  allBox.forEach((box, i) => {
    if (i === n) {
      box.setAttribute("class", "box current");
    } else {
      box.setAttribute("class", "box");
    }
  });

  if (n === 9) {
    contacts.style.right = "0%";
  } else {
    contacts.style.right = "-80%";
  }
}

function load() {
  setScreen(0);
}

load();
