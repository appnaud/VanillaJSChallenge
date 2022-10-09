const clock = document.querySelector("#clock");
clock.innerText = "clock is ready";
function paintTime() {
  const date = new Date();
  const sec = date.getSeconds();
  const min = date.getMinutes();
  const hour = date.getHours();
  now = `< ${hour} : ${min} : ${sec} >`;
  clock.innerText = now;
}
paintTime();
setInterval(paintTime, 1000);
