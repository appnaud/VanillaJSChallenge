const quotes = [
  {
    quote: "A rose by any other name would smell as sweet.",
    author: "William Shakespeare",
  },
  { quote: "All that glitters is not gold.", author: "William Shakespeare" },
  {
    quote: "All the world’s a stage, and all the men and women merely players.",
    author: "William Shakespeare",
  },
  {
    quote:
      "Ask not what your country can do for you; ask what you can do for your country.",
    author: "John Kennedy",
  },
  {
    quote: "Ask, and it shall be given you; seek, and you shall find.",
    author: "the Bible",
  },
  { quote: "Eighty percent of success is showing up.", author: "Woody Allen" },
  {
    quote: "Elementary, my dear Watson.",
    author: "Sherlock Holmes (character)",
  },
  {
    quote: "For those to whom much is given, much is required.",
    author: "the Bible",
  },
  {
    quote: "Frankly, my dear, I don't give a damn.",
    author: "Rhett Butler (character)",
  },
  {
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  },
  { quote: "Go ahead, make my day.", author: "Harry Callahan (character)" },
  {
    quote: "He travels the fastest who travels alone.",
    author: "Rudyard Kipling",
  },
  {
    quote: "Hell has no fury like a woman scorned.",
    author: "William Congreve",
  },
  {
    quote: "Hell is other people.",
    author: "Jean-Paul Sartre",
  },
  { quote: "Here's looking at you, kid.", author: "Rick Blaine (character)" },
  { quote: "Houston, we have a problem.", author: "Jim Lovell (character)" },
  {
    quote:
      "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    author: "Martin Luther King",
  },
  {
    quote: "I have always depended on the kindness of strangers.",
    author: "Blanche Dubois (character)",
  },
  {
    quote: "I love the smell of napalm in the morning.",
    author: "Lt. Kilgore (character)",
  },
  {
    quote: "I think therefore I am.",
    author: "Rene Descartes",
  },
  {
    quote: "If at first you don’t succeed, try, try again.",
    author: "W. E. Hickson",
  },
  {
    quote: "If you are going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    quote: "If you build it, they will come.",
    author: "Joe Jackson (character)",
  },
  {
    quote: "If you want something done right, do it yourself.",
    author: "Charles-Guillaume Étienne",
  },
  {
    quote:
      "If you want something said, ask a man; if you want something done, ask a woman.",
    author: "Margaret Thatcher",
  },
  { quote: "I'll be back.", author: "Terminator (character)" },
  {
    quote: "I'm gonna make him an offer he can't refuse.",
    author: "Vito Corleone (character)",
  },
  {
    quote: "I've got a feeling we're not in Kansas anymore.",
    author: "Dorothy (character)",
  },
  {
    quote: "Keep your friends close, but your enemies closer.",
    author: "Michael Corleone (character)",
  },
  {
    quote: "Knowledge is power.",
    author: "Sir Francis Bacon",
  },
  {
    quote:
      "Life is like a box of chocolates. You never know what you’re gonna get.",
    author: "Forrest Gump (character)",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quote: "May the Force be with you.",
    author: "Star Wars (many characters)",
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  { quote: "Not all those who wander are lost.", author: "J. R. R. Tolkein" },
  {
    quote: "Nothing is certain except for death and taxes.",
    author: "Benjamin Franklin",
  },
  { quote: "Parting is such sweet sorrow", author: "William Shakespeare" },
  {
    quote: "Power corrupts; absolute power corrupts absolutely.",
    author: "John Dalberg-Acton",
  },
  { quote: "Speak softly and carry a big stick", author: "Theodore Roosevelt" },
  {
    quote: "That’s one small step for a man, a giant leap for mankind.",
    author: "Neil Armstrong",
  },
  {
    quote: "The love of money is the root of all evil.",
    author: "the Bible",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "The truth will set you free.",
    author: "the Bible",
  },
  { quote: "There's no place like home.", author: "Dorothy (character)" },
  {
    quote: "Three can keep a secret, if two of them are dead.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Tis better to have loved and lost than never to have loved at all.",
    author: "Alfred Lord Tennyson",
  },
  {
    quote: "To be or not to be, that is the question.",
    author: "William Shakespeare",
  },
  { quote: "To err is human; to forgive, divine.", author: "Alexander Pope" },
  { quote: "To thine own self, be true.", author: "William Shakespeare" },
  {
    quote:
      "Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference.",
    author: "Robert Frost",
  },
  {
    quote: "United we stand, divided we fall.",
    author: "Aesop",
  },
  {
    quote: "What doesn't kill us makes us stronger.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "What we've got here is failure to communicate. Some men you just can't reach.",
    author: "Captain (character)",
  },
  { quote: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
  {
    quote:
      "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.",
    author: "Abraham Lincoln",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Ghandi",
  },
  { quote: "You talkin' to me?", author: "Bickle (character)" },
];

const quote = document.querySelector("#quotes");
const quotetext = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerHTML = `<span>${quotetext.quote}</span> <br/> <span>${quotetext.author}</span>`;
