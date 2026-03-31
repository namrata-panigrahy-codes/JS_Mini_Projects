let btnGen = document.querySelector("button");
let quoteEl = document.querySelector("#quote");
let authorEl = document.querySelector("#author");

btnGen.addEventListener("click", async () => {
  let { quote, author } = await getQuote();
  quoteEl.innerText = quote;
  authorEl.innerText = - `${author}`;
});

async function getQuote() {
  const res = await fetch("https://api.quotable.io/quotes/random");
  const data = await res.json();

  return {
    quote: data[0].content,
    author: data[0].author
  };
}