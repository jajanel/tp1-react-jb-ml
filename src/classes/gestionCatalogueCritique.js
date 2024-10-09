import { dataCritiques } from "../assets/critiques.js";

class GestionCatalogueCritique {
    constructor() {
        this.critiques = JSON.parse(localStorage.getItem("dataCritiques")) || dataCritiques;
    }

    // Retourne la liste des critiques
    getCritiques(){
        return this.critiques
    }

    getNotes(){
        let notes;

        let nbNotes = getCritiques().length;


        return nbNotes;
    }

// Ajouter une critique à la liste
    ajouterCritique(nouvelleCritique) {
        this.critiques.push(nouvelleCritique);
        this.sauvegarder();
    }
// Supprimer une critique de la liste
    supprimerCritique(idCritique) {
        this.critiques = this.critiques.filter(critique => critique.idCritique !== idCritique);
        this.sauvegarder();
    }

// Supprimer les critiques d'un oiseau de la liste selon l'id de l'oiseau passé en paramètre
    supprimerCritiquesParOiseau(idOiseau) {
        this.critiques = this.critiques.filter(critique => critique.idOiseau !== idOiseau);
        this.sauvegarder();
    }

    // Filtrer les critiques et mettre à jour la liste selon l'id de l'oiseau passé en paramètre
    filtrerEtMettreAJourCritiques(idOiseau, setDataCritiques) {
        const updatedCritiques = this.critiques.filter(critique => critique.idOiseau !== idOiseau);
        setDataCritiques(updatedCritiques);
    }

    // Sauvegarder les données dans le local storage
    sauvegarder() {
        localStorage.setItem("dataCritiques", JSON.stringify(this.critiques));
    }


    //Calculer la moyenne des notes des critiques
    calculerMoyenneNotes(){
        let moyenne = 0;
        let somme = 0;
        let nbNotes = getCritiques().length;

        for (let i = 0; i < nbNotes; i++){
            somme += getCritiques()[i].note;
        }
        moyenne = somme / nbNotes;
        return moyenne;
    }

}


// Exportation des fonctions pour l'utiliser dans le react
const gestionCatalogueCritique = new GestionCatalogueCritique();
export const ajouterCritique = gestionCatalogueCritique.ajouterCritique.bind(gestionCatalogueCritique);
export const supprimerCritique = gestionCatalogueCritique.supprimerCritique.bind(gestionCatalogueCritique);
export const supprimerCritiquesParOiseau = gestionCatalogueCritique.supprimerCritiquesParOiseau.bind(gestionCatalogueCritique);
export const filtrerEtMettreAJourCritiques = gestionCatalogueCritique.filtrerEtMettreAJourCritiques.bind(gestionCatalogueCritique);
export const getCritiques = gestionCatalogueCritique.getCritiques.bind(gestionCatalogueCritique);
export const getNotes = gestionCatalogueCritique.getNotes.bind(gestionCatalogueCritique);

export default GestionCatalogueCritique;