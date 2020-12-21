const searchInput = document.getElementById('search-input');
const keywordDisplay = document.getElementById('keyword');
const searchTimeoutInput = document.getElementById('search-timeout');
const timer = document.getElementById('timer');
let timeOut = null;

const stringFormat = (dataInput) => dataInput.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const displayTimer = () => {
  timer.innerHTML = `${stringFormat(searchTimeoutInput.value)}`;
};

window.addEventListener('DOMContentLoaded', () => {
  displayTimer();
});

searchTimeoutInput.addEventListener('change', () => {
  displayTimer();
});

searchTimeoutInput.addEventListener('keyup', () => {
  displayTimer();
});

/**
 * Handle for delay
 * @param {function} callback
 */
const debounce = (callback) => {
  clearTimeout(timeOut);

  timeOut = setTimeout(() => {
    callback();
  }, +searchTimeoutInput.value);
};

/**
 * Add event handler
 */
searchInput.addEventListener('keyup', (event) => {
  debounce(() => {
    keywordDisplay.innerHTML = event.target.value;
  });
});
