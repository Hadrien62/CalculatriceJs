
class Calculatrice {
  constructor() {
    this.boutons = [...document.querySelectorAll('.bout')];
    this.listeCle = this.boutons.map(bouton => bouton.dataset.key);
    this.ecran = document.querySelector('.zoneT');
    this.champ = document.querySelector('.champs');
    this.historique = [];
    this.n = 0;
    this.startTime = null;

    document.addEventListener('keydown', (e) => {
      const valeur = e.keyCode.toString();
      this.operation(valeur);
    });

    document.addEventListener('click', (e) => {
      const valeur = e.target.dataset.key;
      this.operation(valeur);
    });

    window.addEventListener('error', (e) => {
      alert('Votre calcul présente une erreur : ' + e.message);
      this.sendErreurAt();
    });
  }

  operation(valeur) {
    if (this.listeCle.includes(valeur)) {
      switch (valeur) {
        case '400':
          this.n=0;
          this.ecran.textContent = "";
          this.champ.textContent = "";
          break;
        case '300':
          this.n=0;
          const calcul = eval(this.ecran.textContent);
          const timeTaken = Date.now() - this.startTime;
          this.champ.textContent = this.ecran.innerHTML + ' = ' + calcul;
          this.historique.push(this.ecran.textContent);
          this.sendTimeTaken(timeTaken);
          break;
        case '500':
          this.n = 0;
          this.ecran.textContent = this.ecran.textContent.slice(0, -1); // efface le dernier caractère
          break;
        case '600':
          this.n += 1;
          if(this.historique.length-this.n < 0){
              alert("Il n' y a pas de calcul en mémoire avant cela");
          }else{
            this.ecran.textContent = this.historique[this.historique.length-this.n];
          }
          break;
        case '1':
          this.n = 0;
          this.ecran.textContent += '*';
          break;
        case '2':
          this.n = 0;
          this.ecran.textContent += '.';
          break;
        case '3':
          this.n = 0;
          this.ecran.textContent += '/';
          break;
        default:
          this.n = 0;
          const cleCodeTouche = this.listeCle.indexOf(valeur);
          const bouton = this.boutons[cleCodeTouche];
          this.ecran.textContent += bouton.innerHTML;
      }
      if (this.startTime === null) {
        this.startTime = Date.now();
      }
    }
  }

  sendTimeTaken(timeTaken) {
    let date1 = new Date();

    let dateLocale = date1.toLocaleString('fr-FR',{
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'});

    const url = 'http://localhost:3000/timer';
    const dataraw = {
      "timeTakenMS": timeTaken,
      "created_at" : dateLocale
    };
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.withCredentials = false;
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("Data sent successfully");
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        console.error("Error sending data:", xhr.statusText);
      }
    };
    xhr.send(JSON.stringify(dataraw));
  }

  sendErreurAt(){
    let date1 = new Date();

    let dateLocale = date1.toLocaleString('fr-FR',{
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'});

    const url = 'http://localhost:3000/erreur';
    const dataraw = {
      "created_at" : dateLocale
    };
    var xhpp = new XMLHttpRequest();
    xhpp.open("POST", url);
    xhpp.withCredentials = false;
    xhpp.setRequestHeader("Content-Type", "application/json");
    xhpp.onreadystatechange = function () {
      if (xhpp.readyState === 4 && xhpp.status === 200) {
        console.log("Data sent successfully");
      } else if (xhpp.readyState === 4 && xhpp.status !== 200) {
        console.error("Error sending data:", xhpp.statusText);
      }
    };
    xhpp.send(JSON.stringify(dataraw));
  }
}

const calculatrice = new Calculatrice();
