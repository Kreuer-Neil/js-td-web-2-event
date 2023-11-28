/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
Au clic sur un des boutons, colorie la page dans la couleur choisie par l'utilisateur.
*/

const colorise = {
    colors: document.querySelectorAll("button"),

    init() {
        console.log(this.colors)

        this.colors.forEach((color) => {
                color.addEventListener('click', (e) => {
                    document.body.classList = e.currentTarget.id;
                })
            }
        )
    }
}

colorise.init();
