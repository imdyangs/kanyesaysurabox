const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const e = document.getElementById("e");
const f = document.getElementsByClassName("f");
const f1 = document.getElementById("f1");
const f2 = document.getElementById("f2");
const f3 = document.getElementById("f3");
const f4 = document.getElementById("f4");
const f5 = document.getElementById("f5");
const g = document.getElementById("g");
const h = document.getElementById("h");
const i = document.getElementById("i");
const fucku = document.getElementById("fucku");
const text = document.getElementById("text");
const power = document.getElementById("power");
var vid = document.getElementById("stronger");
var lazyVid = document.getElementById("lazy-loaded-swap");

const randomExceptPrevious = prev => {
  let rand = Math.floor((Math.random() * 67)) + 5;
  while (prev.includes(rand)) {
    rand = Math.floor((Math.random() * 67)) + 5;
  }
  prev.push(rand)
  prev.push(rand - 1)
  prev.push(rand - 2)
  prev.push(rand - 3)
  prev.push(rand + 3)
  prev.push(rand + 2)
  prev.push(rand + 1)
  return rand;
}

const previouslyUsedX = [];
const previouslyUsedY = [];
const setRandomDisplayPosition = element => {
  const x = randomExceptPrevious(previouslyUsedX);
  const y = randomExceptPrevious(previouslyUsedY);
  element.style.display = "block";
  element.style.left = `${x}vw`
  element.style.top = `${y}vh`
  element.style.opacity = 1;
}

const endKanye = () => {
  fucku.style.backgroundColor = "black";
  text.style.opacity = 0;
}


const callback = () => {
  let initTime = performance.now();
  console.log("https://www.youtube.com/watch?v=ll3CMgiUPuU")
  const btn = document.getElementById("LEL");
  btn.style.display = "none";
  vid.play();

  setTimeout(() => setRandomDisplayPosition(a), 2940);
  setTimeout(() => setRandomDisplayPosition(b), 6200);
  setTimeout(() => setRandomDisplayPosition(c), 13500); // penis too small @ u
  setTimeout(() => setRandomDisplayPosition(f1), 14500); // ego
  setTimeout(() => setRandomDisplayPosition(f2), 14700); // ego
  setTimeout(() => setRandomDisplayPosition(f3), 15000); // ego
  setTimeout(() => setRandomDisplayPosition(f4), 15300); // ego
  setTimeout(() => setRandomDisplayPosition(f5), 16000); // ego
  setTimeout(() => setRandomDisplayPosition(e), 23500); //rsu backload
  setTimeout(() => setRandomDisplayPosition(d), 24600); // 30k
  setTimeout(() => setRandomDisplayPosition(power), 40800); // NO ONE MAN
  setTimeout(() => setRandomDisplayPosition(g), 49500);
  setTimeout(() => setRandomDisplayPosition(h), 50000); // earf go hard
  setTimeout(() => setRandomDisplayPosition(i), 60000); // epstein lol
  setTimeout(endKanye, 65000);

  document.getElementById("fucku").removeEventListener("click", callback, false);
}


(function() {
  vid.addEventListener("loadedmetadata", () => {
    console.log(vid.readyState);
    if (vid.readyState >= 2) {
      setTimeout(function() {
        fucku.style.opacity = 1;
      }, 1200);
    }
  })
  document.getElementById("fucku").addEventListener("click", callback, false);
})();