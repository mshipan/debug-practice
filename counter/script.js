let counter = 0;
let intervalId = null;
let timeoutId = null;

function start() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      counter++;
      document.getElementById("counter").textContent = counter;
    }, 1000);
  }
}

function stop() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function reset() {
  stop();
  counter = 0;
  document.getElementById("counter").textContent = counter;
  timeoutId = setTimeout(() => {
    timeoutId = null;
  }, 1000);
}
