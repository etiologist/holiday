window.onload = runAll

var GranadaPics = new Array("Alhambra J", "Alhambra K", "Alhambra night","Alhambra night tiles","Alhambra tiles")
var randomGran = Math.floor(Math.random() * GranadaPics.length)

function runAll() {

function granadaImg() {
  const gran = document.getElementsByClassName('granada')
  for (i=0; i < gran.length; i++) {
    gran[i].innerHTML = `<img src='resources/photos/andalusia/${GranadaPics[randomGran]}.jpg'>`;
  }
  
  document.getElementById('change').onclick = changeMad
        function changeMad() {
            const randomGran2 = Math.floor(Math.random() * GranadaPics.length);
            if (randomGran2 !== randomGran) {
              document.getElementById('change').innerHTML = `<img src='resources/photos/andalusia/${GranadaPics[randomGran2]}.jpg'>`
            } else if (randomGran2 < GranadaPics.length) {
              randomGran2 = randomGran2 + 1
              document.getElementById('change').innerHTML = `<img src='resources/photos/andalusia/${GranadaPics[randomGran2]}.jpg'>`
            } else {
              randomGran2 = randomGran2 - 1 
              document.getElementById('change').innerHTML = `<img src='resources/photos/andalusia/${GranadaPics[randomGran2]}.jpg'>`
        } }
}

granadaImg()

}

