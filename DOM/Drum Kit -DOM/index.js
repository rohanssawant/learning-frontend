function switchKeys(k) {
  switch (k) {
    case "w":
      btnAnimate(k);
      playAudio("tom-1");
      break;

    case "a":
      btnAnimate(k);
      playAudio("tom-2");
      break;

    case "s":
      btnAnimate(k);
      playAudio("tom-3");
      break;

    case "d":
      btnAnimate(k);
      playAudio("tom-4");
      break;

    case "j":
      btnAnimate(k);
      playAudio("snare");
      break;

    case "k":
      btnAnimate(k);
      playAudio("kick-bass");
      break;

    case "l":
      btnAnimate(k);
      playAudio("crash");
      break;

    default:
      console.log(key);
      break;
  }
}

function playAudio(path) {
  let audio = new Audio(`sounds/${path}.mp3`);
  audio.play();
}

function btnAnimate(btn) {
  console.log(`inseide btn animate`);
  const pressedBtn = document.querySelector(`.${btn}`);
  console.log(pressedBtn);
  pressedBtn.classList.add("pressed");
  setTimeout(() => {
    pressedBtn.classList.remove("pressed");
  }, 100);
}

let allbtns = document.querySelectorAll("button");

allbtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.style.color = "white";
    let key = this.innerHTML;
    switchKeys(key);
  });
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  switchKeys(e.key);
});
