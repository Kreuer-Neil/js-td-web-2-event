/* EXERCICE 10 :
Au focus sur le champ, vide-le et change sa couleur de fond. Lorsqu'on clique en dehors, sa couleur de fond redevient transparente.
- VERSION 1 :
	Ne le fais que pour le champ prénom
- VERSION 2 :
	Fais-le pour le champ prénom et pour le champ nom séparément avec des fonctions différentes
- VERSION 3 :
	Fais-le de manière générique avec une seule fonction qui peut s'adapter au champ sur lequel on l'applique et associe cette fonction à tous les champs texte de la page en parcourant ceux-ci avec une boucle for.
*/

// Un seul champ


// Deux champs


// Plusieurs champs


/*
const reseter = {
    inputs: document.querySelectorAll('input[type="text"]'),

    init() {
        this.setFocus();
        this.setBlur();
    },
    setFocus() {
        this.inputs.forEach((input) => {
            input.addEventListener('focus', (e) => {
                e.currentTarget.value = '';
                e.currentTarget.style.backgroundColor = `rgb(${this.ranCol()},${this.ranCol()},${this.ranCol()})`;
            });
        });

    },
    setBlur() {
        this.inputs.forEach((input) => {
            input.addEventListener('blur', (e) => {
                e.currentTarget.style.backgroundColor = "white";
            });
        });
    },
    ranCol() {
        return Math.floor(Math.random() * 255) + 1;
    }
}

reseter.init();
*/





const reseter = {
    inputs: document.querySelectorAll('input[type="text"]'),

    init(){
        this.addEventListeners();
    },
    addEventListeners(){
        this.inputs.forEach((input) =>{
                input.addEventListener('focus',this.setFocus.bind(this));
                input.addEventListener('blur',this.setBlur.bind(this));
                });
    },
    setFocus(e){
                e.currentTarget.value = '';
                e.currentTarget.style.backgroundColor = `rgb(${this.ranCol()},${this.ranCol()},${this.ranCol()})`;
    },
    setBlur(e){
        e.currentTarget.style.backgroundColor = "white";
    },
    ranCol() {
        return Math.floor(Math.random() * 255) + 1;
    }
}

reseter.init();
