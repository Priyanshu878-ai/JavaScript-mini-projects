const quotes = [
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Opportunities don't happen. You create them.",
    author: "Chris Grosser"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair"
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "Your limitation—it's only your imagination.",
    author: "Unknown"
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown"
  },
  {
    text: "Great things never come from comfort zones.",
    author: "Unknown"
  },
  {
    text: "Dream it. Wish it. Do it.",
    author: "Unknown"
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs"
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  },
  {
    text: "Small steps every day lead to big results.",
    author: "Unknown"
  },
  {
    text: "Discipline is choosing between what you want now and what you want most.",
    author: "Abraham Lincoln"
  },
  {
    text: "Consistency beats intensity when intensity doesn't last.",
    author: "Unknown"
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown"
  },
  {
    text: "Don't limit your challenges. Challenge your limits.",
    author: "Unknown"
  },
  {
    text: "Action is the foundational key to all success.",
    author: "Pablo Picasso"
  },
  {
    text: "Be so good they can't ignore you.",
    author: "Steve Martin"
  },
  {
    text: "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier"
  },
  {
    text: "If you want something you've never had, you must be willing to do something you've never done.",
    author: "Thomas Jefferson"
  },
  {
    text: "Focus on progress, not perfection.",
    author: "Unknown"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Make today so awesome that yesterday gets jealous.",
    author: "Unknown"
  }
];

// const quoteElement = document.querySelector(".quote");
// const authorElement = document.querySelector(".author");

// function showRandomQuote() {
//     const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

//     quoteElement.textContent = `"${randomQuote.text}"`;
//     authorElement.textContent = `— ${randomQuote.author}`;
// }

// // Show first quote immediately
// showRandomQuote();

// // Change quote every 3 seconds
// setInterval(showRandomQuote, 3000);

const gradients = [
  "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  "linear-gradient(135deg, #a18cd1, #fbc2eb)",
  "linear-gradient(135deg, #f6d365, #fda085)",
  "linear-gradient(135deg, #84fab0, #8fd3f4)",
  "linear-gradient(135deg, #fccb90, #d57eeb)",
  "linear-gradient(135deg, #ffecd2, #fcb69f)",
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #89f7fe, #66a6ff)",
  "linear-gradient(135deg, #ff6a88, #ff99ac)",
  "linear-gradient(135deg, #43e97b, #38f9d7)",
  "linear-gradient(135deg, #fa709a, #fee140)",
  "linear-gradient(135deg, #30cfd0, #330867)",
  "linear-gradient(135deg, #f093fb, #f5576c)",
  "linear-gradient(135deg, #4facfe, #00f2fe)",
  "linear-gradient(135deg, #5ee7df, #b490ca)",
  "linear-gradient(135deg, #c471f5, #fa71cd)",
  "linear-gradient(135deg, #12c2e9, #c471ed, #f64f59)",
  "linear-gradient(135deg, #ff0844, #ffb199)",
  "linear-gradient(135deg, #00c6ff, #0072ff)",
  "linear-gradient(135deg, #f7971e, #ffd200)",
  "linear-gradient(135deg, #11998e, #38ef7d)",
  "linear-gradient(135deg, #fc466b, #3f5efb)",
  "linear-gradient(135deg, #8e2de2, #4a00e0)",
  "linear-gradient(135deg, #ff4e50, #f9d423)",
  "linear-gradient(135deg, #00b09b, #96c93d)",
  "linear-gradient(135deg, #ff5f6d, #ffc371)",
  "linear-gradient(135deg, #2193b0, #6dd5ed)",
  "linear-gradient(135deg, #ee0979, #ff6a00)",
  "linear-gradient(135deg, #7f00ff, #e100ff)",
  "linear-gradient(135deg, #00f260, #0575e6)"
];

function bgcolor() {

const bg =  document.body.style.background =
  gradients[Math.floor(Math.random() * gradients.length)];
}

bgcolor();
setInterval(bgcolor,3000)



const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    const quoteElement = document.querySelector(".quote");
    const authorElement = document.querySelector(".author");

        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quoteElement.textContent = `"${randomQuote.text}"`;
    authorElement.textContent = `— ${randomQuote.author}`;
})