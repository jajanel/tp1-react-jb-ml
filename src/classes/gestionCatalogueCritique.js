import { dataCritiques } from "../assets/critiques.js";
import {dataOiseau} from "../assets/oiseaux.js";

class GestionCatalogueCritique {
    constructor() {
        this.critiques = JSON.parse(localStorage.getItem("dataCritiques")) || dataCritiques;
    }

    // Retourne la liste des critiques
    getCritiques(){
        return this.critiques
    }


    getNotes(categorie) {
        let critiquesFiltrees;

        if (categorie === "tous") {
            critiquesFiltrees = this.getCritiques();
        } else {
            const oiseaux = dataOiseau.filter(oiseau => oiseau.categorie === categorie);
            const oiseauIds = oiseaux.map(oiseau => oiseau.idOiseau);
            critiquesFiltrees = this.getCritiques().filter(critique => oiseauIds.includes(critique.idOiseau));
        }

        const sommeNotes = critiquesFiltrees.reduce((acc, critique) => acc + critique.note, 0);
        const moyenne = critiquesFiltrees.length ? sommeNotes / critiquesFiltrees.length : 0;

        // Retourner la moyenne avec deux décimales
        return moyenne.toFixed(2);
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