const quotes = [
  {
    quote:
      "Mistakes are always forgivable, if one has the courage to admit them.",
    author: "Bruce Lee",
  },
  {
    quote:
      "A goal is not always meant to be reached, it often serves simply as something to aim at.",
    author: "Bruce Lee",
  },
  {
    quote: "Be self aware, rather than a repetitious robot.",
    author: "Bruce Lee",
  },
  {
    quote:
      "If you can't explain it to a six year old, you don't understand it yourself.",
    author: "Albert Einstein",
  },
  {
    quote: "Anyone who has naver made a mistake has never tride anything new.",
    author: "Albert Einstein",
  },
  {
    quote: "The important is not to stop questioning.",
    author: "Albert Einstein",
  },
  {
    quote:
      "너의 자질(姿質)이 아름다움을 아노니 하지 않으면 그만이거니와, 만약 마음과 힘을 다한다면 무슨 일인들 능히 하지 못하리오.",
    author: "세종대왕, King Sejong",
  },
  {
    quote:
      "모든 일에 있어서, 시간이 부족하지 않을까를 걱정하지 말고, 다만 내가 마음을 바쳐 최선을 다할 수 있을지, 그것을 걱정하라.",
    author: "정조대왕, King Jeongjo",
  },
  {
    quote: "적을 알고 나를 알면, 백번 싸워도 위태롭지 않다.",
    author: "손자, Sun Tzu",
  },
  {
    quote: "망령되이 움직이지 말라. 침착하게 태산처럼 무겁게 행동하라.",
    author: "이순신, Admiral Yi Sun-sin",
  },
  {
    quote: "하루라도 글을 읽지 않으면 입안에 가시가 돋는다.",
    author: "안중근, Patriot Doma Jung-geun Ahn",
  },
];

const quoteContainer = document.querySelector("#quotes");
const quote = quoteContainer.querySelector("span#quote");
const author = quoteContainer.querySelector("span#author");

const nowQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${nowQuote.quote} - `;
author.innerText = `${nowQuote.author}`;
