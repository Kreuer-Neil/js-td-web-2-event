/*
EXERCICE 6 : Change couleur (4) - v2
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 2 : une seule fonction qui utilise e.target pour s'adapter au  bouton sur lequel on clique
AJOUT : Quand on clique sur le bouton, la couleur de fond de la page change de manière aléatoire
*/



const colorise = {
    colorInputs: document.querySelectorAll("input"),

    init() {
        this.colorInputs.forEach((colorInput) =>
            colorInput.addEventListener('click',(e) => {
                console.log(e.target.value);
                if (e.currentTarget.value === "Fais-moi une surprise !") {
                    document.body.style.backgroundColor = `rgb(${this.rancol()},${this.rancol()},${this.rancol()})`;
                } else {
                    document.body.style.backgroundColor = e.currentTarget.value;
                }
            })
        )
    },
    rancol() {
        return Math.floor(Math.random()*255)+1;
    }

}

colorise.init();