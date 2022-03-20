const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "11.jpeg",
];

// background: url('/images/bg.jpg') no-repeat center center/cover, rgba(0, 0, 0, 0.5);
//         background-blend-mode: multiply;

const body = document.querySelector("body");

const imgIndex = Math.floor(Math.random() * images.length);
imgUrl = `img/${images[imgIndex]}`;

body.style.height = "100vh";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";
body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${imgUrl})`;
