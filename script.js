const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const e = document.getElementById("e");
const f = document.getElementById("f");
const g = document.getElementById("g");
const power = document.getElementById("power");

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

const previouslyUsed = [];
const setRandomDisplayPosition = element => {
  console.log("calling this shit");
  const x = randomExceptPrevious(previouslyUsed);
  const y = randomExceptPrevious(previouslyUsed);
  console.log(x)
  console.log(y)
  element.style.display = "block";
  element.style.left = `${x}vw`
  element.style.top = `${y}vh`
  if (element === f) {
    f.style.opacity = 1;
    f.style.visibility = "visible";
  }
}

const callback = () => {
  console.log("https://www.youtube.com/watch?v=ll3CMgiUPuU")
  const btn = document.getElementById("LEL");
  btn.style.display = "none";
  var vid = document.getElementById("stronger");
  vid.play();

  setTimeout(() => setRandomDisplayPosition(power), 39500); // NO ONE MAN
  setTimeout(() => setRandomDisplayPosition(a), 2910);
  setTimeout(() => setRandomDisplayPosition(b), 6200);
  setTimeout(() => setRandomDisplayPosition(c), 13500);
  setTimeout(() => setRandomDisplayPosition(f), 14500); // ego
  setTimeout(() => setRandomDisplayPosition(d), 24600); // 30k
  setTimeout(() => setRandomDisplayPosition(e), 23500); //rsu backload
  setTimeout(() => setRandomDisplayPosition(g), 49500);
  setTimeout(() => setRandomDisplayPosition(h), 49500);



}

document.getElementById("fucku").addEventListener("click", callback);