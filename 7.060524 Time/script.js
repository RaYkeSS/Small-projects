document.addEventListener("DOMContentLoaded", function () {
  const timeApp = document.getElementById("time");

  function getCurrentTime() {
    const date = new Date();
    return {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      milliseconds: date.getMilliseconds(),
    };
  }

  const timeDiv = document.createElement("div");

  timeApp.classList.add("text-9xl", "font-bold");

  setTimeout(function update() {
    timeDiv.innerText = `${getCurrentTime().hours} : ${
      getCurrentTime().minutes
    } : ${getCurrentTime().seconds}`;
    setTimeout(update, 1000);
  }, 1000);

  function timeColor() {
    if (parseInt(getCurrentTime().hours) > 21) {
      timeApp.classList.add("text-blue-500");
    } else if (parseInt(getCurrentTime().hours) > 18) {
      timeApp.classList.add("text-amber-500");
    } else if (parseInt(getCurrentTime().hours) > 13) {
      timeApp.classList.add("text-yellow-500");
    } else if (parseInt(getCurrentTime().hours) > 6) {
      timeApp.classList.add("text-teal-500");
    }
  }
  timeColor();
  timeApp.append(timeDiv);

  //   seconds meter

  const secondsMeter = document.createElement("div");
  secondsMeter.id = "secondsMeter";
  const timer = document.createElement("div");
  const timerButton = document.createElement("button");

  secondsMeter.classList.add(
    "flex",
    "items-center",
    "justify-center",
    "gap-10",
    "text-5xl"
  );
  timerButton.classList.add(
    "pointer-events-auto",
    "rounded-md",
    "bg-indigo-600",
    "px-6",
    "py-4",
    "text-[0.8125rem]",
    "font-semibold",
    "leading-5",
    "text-white",
    "hover:bg-indigo-500"
  );

  timer.innerText = "00:00:00";
  timerButton.innerText = "Star Timer";

  timerButton.addEventListener("click", function () {
    timerButton.innerText = "Stop Timer";
    timerButton.classList.toggle("bg-red-600");
    timerButton.classList.toggle('"hover:bg-red-500"');

    let timerDate = new Date(0);
    setTimeout(function update() {
      timer.innerText = `${timerDate.getMinutes()} : ${timerDate.getSeconds()} : ${timerDate.getMilliseconds()}`;
      setTimeout(update, 1);
    }, 1);
  });

  secondsMeter.append(timer, timerButton);
  timeApp.after(secondsMeter);
});
