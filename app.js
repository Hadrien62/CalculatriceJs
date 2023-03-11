let boutons = document.getElementsByClassName("bout");
let ecran = document.getElementById("screen");
let ope = document.getElementById("egale");
let champ = document.getElementById("champs");
let efface = document.getElementById("C");

function getValue(){
    // Les éléments récupérer via leur classe sont stockés dans le tableau : boutons. 
    Array.from(boutons).forEach(element => {
        // On vérifie si l'élément courant de la boucle est celui sur lequel l'utilisateur a cliqué.
        if(element === this){
            // On utilise la propriété "value" de l'élément pour récupérer sa valeur.
            const value = element.value;
            // On récupère le texte existant dans l'élément "ecran".
            let screenText = ecran.innerHTML;
            // On ajoute la valeur cliquée à la fin du texte existant.
            screenText += value;
            // On affiche le nouveau texte dans l'élément "ecran".
            ecran.innerHTML = screenText;
        }
    });
}

// On boucle sur tous les éléments de "boutons" avec la méthode "forEach()" pour leur ajouter un gestionnaire d'événement "click".
Array.from(boutons).forEach(element => {
    element.addEventListener('click', getValue);
});

function operation(){
    const screenValue = ecran.innerHTML;
    let affiche = ecran.innerHTML;
    affiche += " = ";
     // Définir des variables pour les différents éléments de l'opération.
    let num1 = '';
    let num2 = '';
    let operator = '';
    let decimal = false; // variable pour vérifier si le nombre a une virgule
    
    // Boucler sur chaque caractère du texte de l'écran.
    for (let i = 0; i < screenValue.length; i++) {
        const char = screenValue[i];
        
        // Si le caractère est un chiffre, l'ajouter à la première variable numérique.
        if (!isNaN(char) || char == ',') { // ajouter la virgule à la première variable numérique
            if (char == ',') {
                if (!decimal) {
                    decimal = true; // le nombre a une virgule
                    if (operator === '') {
                        num1 += char;
                    } else {
                        num2 += char;
                    }
                }
            } else {
                if (operator === '') {
                    num1 += char;
                } else {
                    num2 += char;
                }
            }
        }
        // Sinon, si le caractère est un opérateur, le stocker dans la variable "operator".
        else if (char === '+' || char === '-' || char === 'x' || char === '/') {
            operator = char;
            decimal = false; // réinitialiser la variable pour la prochaine valeur numérique
        }
    }
    
    // Convertir les chaînes de caractères en nombres
    const num1Value = parseFloat(num1.replace(',', '.'));// On remplace la virgule non prise en charge par un point qui signifie le nombre décimal
    const num2Value = parseFloat(num2.replace(',', '.'));
    
    // calcul en fonction de l'opérateur
    let result;
    switch (operator) {
        case '+':
        result = num1Value + num2Value;
        break;
        case '-':
        result = num1Value - num2Value;
        break;
        case 'x':
        result = num1Value * num2Value;
        break;
        case '/':
        result = num1Value / num2Value;
        break;
        default:
        result = NaN;
    }
    
    // Afficher le résultat
    affiche += result.toString().replace('.', ', '); // remplacer le point par une virgule pour l'affichage
    champ.innerHTML = affiche;
}


ope.addEventListener('click', operation);

function effacer(){
    ecran.innerHTML = "";
    champ.innerHTML = "";
}

efface.addEventListener('click', effacer);
