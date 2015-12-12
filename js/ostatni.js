function celaObrazovka() {
  var elem = document.getElementById("hra");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
}

//detekce stlačení "f" pro zapnutí fullscreenu
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 70) {
    celaObrazovka();
  }
}, false);
