/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 6 : Change couleur (3)
- 2°) Étape 2 :
	Que se passe-t-il si l'utilisateur valide son entrée en pressant la touche ENTER ? 
	Corrige ce problème en ajoutant un gestionnaire d'événement pour la pression sur la touche ENTER
	ATTENTION : la touche ENTER va soumettre le formulaire !!
	=> Du coup, l'URL de la page va changer et tu ne verras plus la couleur de fond…
	SOLUTION : il faut ajouter une méthode de Event dans la fonction qui va empêcher cet événement (la soumission du formulaire) de se produire : la méthode à utiliser est preventDefault()
*/


// ÉTAPE 2 : version avec deux écouteurs


colorise = {
    short: document.getElementById('colorForm'),
    colorField: document.querySelector('input[type="text"]'),

    init() {
        this.short.addEventListener('submit',((e)=> {
            e.preventDefault();
            console.log(e);
            document.body.style.backgroundColor = this.colorField.value;
        }))
    }
}

colorise.init();