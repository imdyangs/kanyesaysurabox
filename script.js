const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");


const callback = () => {
  console.log("https://www.youtube.com/watch?v=ll3CMgiUPuU")
  const btn = document.getElementById("LEL");
  btn.style.display = "none";
  var vid = document.getElementById("stronger");
  vid.play();


  const a = document.getElementById("a");
  const b = document.getElementById("b");
  const c = document.getElementById("c");
  const d = document.getElementById("d");

  setTimeout(() => a.style.display = "block", 2700);
  // setTimeout(() => b.style.display = "block", 2700);
  // setTimeout(() => a.style.display = "block", 2700);

}

document.getElementById("fucku").addEventListener("click", callback);