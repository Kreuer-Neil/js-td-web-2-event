/*
EXERCICE 6 : Change couleur (4) - v1
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 1  : une fonction par bouton radio
	À faire après pour préparer la version 2 : 
		(1) un alert dans une fonction pour voir à quoi correspond e.target
		(2) un alert dans chaque fonction pour voir à quoi correspond e.target.value
*/


const colorise = {
    colorInputs: document.querySelectorAll("input"),

    init() {
        this.colorInputs.forEach((colorInput) =>
            colorInput.addEventListener('click',(e) => {
                console.log(e.target.value);
                if (e.currentTarget.value === "Fais-moi une surprise !") {
                    document.body.style.backgroundColor = this.colorInputs[Math.floor(Math.random()*4)].value;
                } else {
                    document.body.style.backgroundColor = e.currentTarget.value;
                }
            })
        )
    }
}

colorise.init();