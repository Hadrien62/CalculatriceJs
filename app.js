const boutons = [...document.querySelectorAll('.bout')];
const listeCle = boutons.map(bouton => bouton.dataset.key);
const ecran = document.querySelector('.zoneT');
const champ = document.querySelector('.champs');

document.addEventListener('keydown', (e)=>{
    const valeur = e.keyCode.toString();
    operation(valeur);
})

document.addEventListener('click', (e)=>{
    const valeur = e.target.dataset.key;
    operation(valeur);
})

const operation = (valeur)=>{
    if(listeCle.includes(valeur)){
        switch(valeur){
            case '400':
                ecran.textContent = "";
                champ.textContent = "";
                break;
            case '300':
                const calcul = eval(ecran.textContent);
                champ.textContent = ecran.innerHTML + ' = ' + calcul;
                break;
            case '1':
                ecran.textContent += '*';
                break;
            case '2':
                ecran.textContent += '.';
                break;
            case '3':
                ecran.textContent += '/';
                break;
            default:
                const cleCodeTouche = listeCle.indexOf(valeur);
                const bouton = boutons[cleCodeTouche];
                ecran.textContent += bouton.innerHTML;
        }
    }
}

window.addEventListener('error', (e)=>{
    alert('Votre calcul présente une erreur : ' + e.message);
})