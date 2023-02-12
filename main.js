var quote = document.getElementById("quote");
var author = document.getElementById("author");
var btn = document.getElementById("btn");

var url = "https://api.quotable.io/random";



var getQuote = () =>  {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;

      });
};


window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
