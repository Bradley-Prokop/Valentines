var totalNoBtnClicks = 0;
var noBtnTexts = [
  "No",
  "Oh so you hate me?",
  "Haha ur so funny :(",
  "Babe...",
  "WHAT THE FUCK?!?!",
  "Is there another guy?",
];

// varibles
var yesButton = document.getElementById("yesbtn");
var noButton = document.getElementById("nobtn");
var image = document.getElementById("img");
var text = document.getElementById("message");
var noAudio1 = new Audio("vboom.mp3");
var noAudio2 = new Audio("hiss.mp3");
var noAudio3 = new Audio("glass.mp3");
var noAudio4 = new Audio("dog.mp3");
var noAudio5 = new Audio("cry.mp3");
var yesAudio = new Audio("fireworks.mp3");

// set no button up to be first item in array
noButton.innerText = noBtnTexts[0];
//set i love you text invisible
text.style.visibility = "hidden";

yesButton.addEventListener("click", () => {
  text.style.visibility = "visible";
  image.src = "yes.png";
  yesAudio.play();
});

noButton.addEventListener("click", () => {
  totalNoBtnClicks++;

  noButton.innerHTML = noBtnTexts[totalNoBtnClicks];

  switch (totalNoBtnClicks) {
    case 1:
      noAudio1.play();
      image.src = "angry.png";
      break;
    case 2:
      noAudio2.play();
      image.src = "catgun.png";
      break;
    case 3:
      noAudio3.play();
      image.src = "brokenheart.png";
      break;
    case 4:
      noAudio4.play();
      image.src = "maddog.png";
      break;
    case 5:
      noAudio5.play();
      image.src = "sad.png";
      break;
    default:
      image.src = "sideeye.png";
      break; 
  }

  let currentHeight =
    parseInt(yesButton.style.height) || yesButton.offsetHeight;
  yesButton.style.height = currentHeight + 20 + "px";
  let currentWidth = parseInt(yesButton.style.width) || yesButton.offsetWidth;
  yesButton.style.width = currentWidth + 40 + "px";

  if (totalNoBtnClicks === noBtnTexts.length) {
    noButton.style.display = "none";
    yesButton.style.width = "100vw";
  }
});
