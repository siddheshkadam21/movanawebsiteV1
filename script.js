// Array of multilingual versions of "Movana"
const texts = ["Movana", "मोवाना","મોવાના","মোভানা","ਮੋਵਾਨਾ","மோவன","మోవన","ಮೋವನ","മോവന","‎مووانا"];
let index = 0;
const element = document.getElementById("movana-text");

function changeText() {
  element.style.opacity = 0; // fade out
  setTimeout(() => {
    index = (index + 1) % texts.length; // move to the next word
    element.innerText = texts[index];
    element.style.opacity = 1; // fade in
  }, 500);
}

// Change text dynamically every 2 seconds
setInterval(changeText, 2000);
