const quotes = [
  "“Psychology is the Science of Mental Life.” — William James",
  "“Psychology is the science of immediate experience.” — Wilhelm Wundt",
  "“Psychology is the science of mental processes.” — Edward B. Titchener",
  "“Psychology is the science of consciousness.” — James Rowland Angell",
  "“Psychology, as the behaviorist views it, is a purely objective, experimental branch of natural science.” — John B. Watson"
];

const quoteText = document.querySelector("#quote");
const quoteButton = document.querySelector("#quoteButton");

if (quoteText && quoteButton) {
  function showNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
  }

  quoteButton.addEventListener("click", showNewQuote);
}

const modeButton = document.querySelector("#modeButton");
const body = document.querySelector("body");

if (modeButton && body) {
  function toggleMode() {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      modeButton.textContent = "Light Mode";
    } else {
      modeButton.textContent = "Dark Mode";
    }
  }

  modeButton.addEventListener("click", toggleMode);
}