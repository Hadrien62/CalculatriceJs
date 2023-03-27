class Calculatrice {
    constructor() {
      this.boutons = [...document.querySelectorAll('.bout')];
      this.listeCle = this.boutons.map(bouton => bouton.dataset.key);
      this.ecran = document.querySelector('.zoneT');
      this.champ = document.querySelector('.champs');
      this.historique = [];
      this.n = 0;
  
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
            this.champ.textContent = this.ecran.innerHTML + ' = ' + calcul;
            this.historique.push(this.ecran.textContent);
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
      }
    }
  }
  
  
  const calculatrice = new Calculatrice();
  