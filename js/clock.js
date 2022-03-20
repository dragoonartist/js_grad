const timeText = document.querySelector(".clock span");

const getTime = () => {
  const nowTime = new Date();
  const hours = String(nowTime.getHours()).padStart(2, 0);
  const minutes = String(nowTime.getMinutes()).padStart(2, 0);
  const seconds = String(nowTime.getSeconds()).padStart(2, 0);

  timeText.innerText = `${hours}ㅅ ${minutes}ㅂ ${seconds}ㅊ`;
};

getTime();
setInterval(getTime, 1000);
