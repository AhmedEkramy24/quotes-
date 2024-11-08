var quote = document.getElementById("quote");
var auther = document.getElementById("author");
var btn = document.getElementById("click");

var collection = [
  {
    quote: `“yesterday is a history , tomorrow is a mystry , but today is a gift that why they call it the present“`,
    author: "--Master Oguay",
  },
  {
    quote: `“So many books, so little time.”`,
    author: "― Frank Zappa",
  },
  {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    author: "― Albert Einstein",
  },
  {
    quote: `“To live is the rarest thing in the world. Most people exist, that is all.”`,
    author: "― Oscar Wilde",
  },
  {
    quote: `“It is better to be hated for what you are than to be loved for what you are not.”`,
    author: "― Andre Gide, Autumn Leaves",
  },
];

btn.onclick = function () {
  var random = Math.floor(Math.random() * 5);
  quote.innerHTML = collection[random].quote;
  auther.innerHTML = collection[random].author;
  console.log(random);
};
