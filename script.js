const img = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];

let count = img.length;
const cover = document.querySelector(".cover");

function randInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const init = () => {
  shuffle(img);
  for (let i = 0; i < img.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.background = `url("./images/${img[i]}")`;
    card.style.backgroundSize = "cover";
    card.style.transform = `rotate(${randInt(-10, 10)}deg) translate(${randInt(
      -40,
      40
    )}px, ${randInt(-40, 40)}px)`;
    cover.append(card);
  }
};

init();

cover.addEventListener("click", (event) => {
  if (event.target.classList.contains("card")) {
    event.target.classList.add("go");
    count--;
  }
  if (count === 0) {
    const container = document.querySelector(".container");
    const elements = container.getElementsByClassName("card");
    for (let i = elements.length - 1; i >= 0; i--) {
      elements[i].parentNode.removeChild(elements[i]);
    }
    init();
    count = img.length;
  }
});
