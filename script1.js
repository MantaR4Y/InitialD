// call this function when "orange-kid" is clicked!
tL1 = document.getElementById("trafficLight1");
tL2 = document.getElementById("trafficLight2");
a1 = document.getElementById("ae86");
a2 = document.getElementById("ae862");
r1 = document.getElementById("rx7");
r2 = document.getElementById("rx72");
g1 = document.getElementById("gas");
tLS = document.getElementById("box8");

CanStartRace = true;

function startRace() {
  setTimeout(lampSound, 1000);
  setTimeout(yellowLight, 1000);
  setTimeout(greenLight, 2000);
  setTimeout(driveCars, 2550);

  //setTimeout(driveCars, 2000);
  // yellowLight();
  // greenLight();
}
if (CanStartRace == true) {
  CanStartRace = false;
}

function yellowLight() {
  tL1.src = "images/yellowlight.png";
  tL2.src = "images/yellowlight.png";
}
function greenLight() {
  tL1.src = "images/greenlight.png";
  tL2.src = "images/greenlight.png";
}
function driveCars() {
  a1.classList.add("fly-forward");
  a2.classList.add("fly-forward");
  r1.classList.add("fly-forward");
  r2.classList.add("fly-forward");
}
function playGasSong() {
  soundPause();
  document.getElementById("gas").play();
}
function playDejaVuSong() {
  soundPause();
  document.getElementById("DejaVu").play();
}
function lampSound() {
  document.getElementById("lampSound").play();
}
function carVroom() {
  document.getElementById("carVroom").play();
}
function soundPause() {
  document.getElementById("DejaVu").pause();
  document.getElementById("DejaVu").currentTime = 0;
  document.getElementById("gas").pause();
  document.getElementById("gas").currentTime = 0;
}
//function vroomA() {
//  a1.("aVroom")
// a2.("aVroom")
//}
//function lampSound() {}
//function pauseSong() {
//
//}
//function resetAll() {
//  document.getElementById("")
