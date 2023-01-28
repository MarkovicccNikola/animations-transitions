const line = document.querySelector(".line");

const lineBackToStart = [{ transform: "rotate(0)" }];
const lineTiming = { duration: 2000, iterations: 1 };

line.addEventListener("click", function () {
  console.log("ok");
  line.animate(lineBackToStart, lineTiming);
  setTimeout(() => {
    line.classList.remove("line-animation");
  }, 2000);
});
/*
line.style.animationPlayState = "paused";
line.animate(lineBackToStart, lineTiming);
line.classList.remove("line-animation"); */
