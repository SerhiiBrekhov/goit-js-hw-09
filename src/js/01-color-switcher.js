
const startButton = document.querySelector(".start-button");
const stopButton = document.querySelector(".stop-button");
const bodyIns = document.querySelector("body");

let timerId = null;

startButton.addEventListener('click', () => {
  clearInterval(timerId);
    timerId = setInterval(() => {
        let colorNumber = getRandomHexColor();
        bodyIns.style.backgroundColor = colorNumber;
        console.log("new color")
    }, 1000);
});
    
stopButton.addEventListener('click', () => {
  console.log("stop")
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




