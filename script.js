const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "You only live once, but if you do it right, once is enough. - Mae West",
];
const quoteText = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = randomQuote;
  // quoteText.textContent = quotes[randomIndex];
}

newQuoteButton.addEventListener("click", displayRandomQuote);
