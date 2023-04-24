import "./style.css";

const content = document.getElementById("content");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

const RANDOM_QUOTE_API = "https://api.quotable.io/quotes/random";

async function fetchQuote() {
  try {
    const response = await fetch(RANDOM_QUOTE_API);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

fetchQuote().then((data) => {
  author.innerHTML = data[0].author;
  content.innerHTML = data[0].content;
});

btn.addEventListener("click", async () => {
  const data = await fetchQuote();
  author.innerHTML = data.author;
  content.innerHTML = data.content;
});
