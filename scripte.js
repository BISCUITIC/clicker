let clicks = 0;

const TIMEOUT = 5000;

const display = document.querySelector("#display");
const button = document.querySelector("#button");
const counter = document.querySelector("#counter");

button.onclick = start;

function start() {
  const startTime = Date.now();

  display.textContent = formatTime(TIMEOUT);
  counter.textContent = ++clicks;

  button.onclick = () => {
    counter.textContent = ++clicks;
  };

  const interval = setInterval(() => {
    const delta = Date.now() - startTime;
    display.textContent = formatTime(TIMEOUT - delta);
  }, 10);

  const timeout = setTimeout(() => {
    button.onclick = null;
    display.textContent = "Game Over";

    clearInterval(interval);
    clearTimeout(timeout);
  }, TIMEOUT);
}

function formatTime(ms) {
  return Number.parseFloat(ms / 1000).toFixed(3);
}
