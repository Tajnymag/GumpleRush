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

//detekce času + změna pozadí
function zmenaPozadi() {
  var ted = new Date();
  var hodiny = ted.getHours();

  if (hodiny >= 3 && hodiny <= 5) {
    document.body.style.background = "#243E1C url(assets/pozadi/01-Morning.png) no-repeat center center";
  } else if (hodiny <= 8) {
    document.body.style.background = "#457938 url(assets/pozadi/02-Late-Morning.png) no-repeat center center";
  } else if (hodiny <= 11) {
    document.body.style.background = "#73CD5F url(assets/pozadi/03-Afternoon.png) no-repeat center center";
  } else if (hodiny <= 15) {
    document.body.style.background = "#3A652E url(assets/pozadi/04-Late-Afternoon.png) no-repeat center center";
  } else if (hodiny <= 17) {
    document.body.style.background = "#203A1A url(assets/pozadi/05-Evening.png) no-repeat center center";
  } else if (hodiny <= 19) {
    document.body.style.background = "#1C071C url(assets/pozadi/06-Late-Evening.png) no-repeat center center";
  } else if (hodiny <= 21) {
    document.body.style.background = "#1C071C url(assets/pozadi/07-Night.png) no-repea center center";
  } else {
    document.body.style.background = "#08030A url(assets/pozadi/08-Late-Night.png) no-repeat center center";
  }
  document.body.style.backgroundSize = "cover";
}
zmenaPozadi();
