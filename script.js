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
const wat = document.getElementById("wat");
const wat2 = document.getElementById("wat2");

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

  setTimeout(() => setRandomDisplayPosition(a), 3140);
  setTimeout(() => setRandomDisplayPosition(b), 6400);
  setTimeout(() => setRandomDisplayPosition(c), 13700); // penis too small @ u
  setTimeout(() => setRandomDisplayPosition(f1), 14700); // ego
  setTimeout(() => setRandomDisplayPosition(f2), 14900); // ego
  setTimeout(() => setRandomDisplayPosition(f3), 15200); // ego
  setTimeout(() => setRandomDisplayPosition(f4), 15600); // ego
  setTimeout(() => setRandomDisplayPosition(f5), 16200); // ego
  setTimeout(() => setRandomDisplayPosition(e), 23700); //rsu backload
  setTimeout(() => setRandomDisplayPosition(d), 24800); // 30k
  setTimeout(() => setRandomDisplayPosition(power), 41000); // NO ONE MAN
  setTimeout(() => setRandomDisplayPosition(g), 49700);
  setTimeout(() => setRandomDisplayPosition(h), 52000); // earf go hard
  setTimeout(() => setRandomDisplayPosition(i), 62000); // epstein lol
  setTimeout(endKanye, 65000);

  document.getElementById("fucku").removeEventListener("click", callback, false);
}


(function() {
  let counter = 30;
  const prankpatrol = setInterval(() => {
    wat2.innerHTML = `"WAIT WAIT ${counter}S WAIT WAIT WAIT WAIT &#10; ¿¿¿¿¿¿KCAN YE¿¿¿¿¿`;
    counter--;
  }, 1000)

  vid.addEventListener("canplay", () => {
    console.log(vid.readyState);
    if (vid.readyState >= 2) {
      setTimeout(function() {
        fucku.style.opacity = 1;
        loaders.style.opacity = 0;
        document.getElementById("fucku").addEventListener("click", callback, false);
        wat.style.opacity = 0;
        wat2.style.opacity = 0;
      }, 1000);
    }
  })
})();