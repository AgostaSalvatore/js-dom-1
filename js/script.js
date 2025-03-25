
//inizializzazione variabili
const lampadina = document.getElementById('lampadina');
const interruttore = document.getElementById('btn-on-off');

//Inizializzazione eventi
//Accensione e spegnimento lampadina tramite bottone
interruttore.addEventListener('click', function() {
    if (lampadina.src.includes('yellow')) {
        lampadina.src = './img/white_lamp.png';

    } else {
        lampadina.src = './img/yellow_lamp.png';
    }
});
  