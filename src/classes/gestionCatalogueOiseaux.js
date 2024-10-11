import { dataOiseau } from "../assets/oiseaux.js";
import GestionCatalogueCritique from './gestionCatalogueCritique.js';

class GestionCatalogueOiseaux {
    constructor() {
        this.oiseaux = JSON.parse(localStorage.getItem("dataOiseau")) || dataOiseau;
    }

    getOiseaux(){
        return this.oiseaux;
    }

    // Ajouter un oiseau à la liste
    ajouterOiseau(nouvelOiseau) {
        this.oiseaux.push(nouvelOiseau);
        this.sauvegarder();
    }
// Modifier un oiseau dans la liste
    modifierOiseau(idOiseau, oiseauModifie) {
        const index = this.oiseaux.findIndex(oiseau => oiseau.idOiseau === idOiseau);
        if (index !== -1) {
            this.oiseaux[index] = { ...this.oiseaux[index], ...oiseauModifie };
            this.sauvegarder();
        }

    }

    // Supprimer un oiseau de la liste et ses critiques
    supprimerOiseau(idOiseau) {
        this.oiseaux = this.oiseaux.filter(oiseau => oiseau.idOiseau !== idOiseau);
        const gestionCritique = new GestionCatalogueCritique();
        gestionCritique.supprimerCritiquesParOiseau(idOiseau);
        this.sauvegarder();
    }

    // Filtrer les oiseaux et mettre à jour la liste
    filtrerEtMettreAJourOiseaux(idOiseau, setDataOiseau) {
        const updatedOiseaux = this.oiseaux.filter(oiseau => oiseau.idOiseau !== idOiseau);
        setDataOiseau(updatedOiseaux);
    }

    // Sauvegarder les données dans le local storage
    sauvegarder() {
        localStorage.setItem("dataOiseau", JSON.stringify(this.oiseaux));
    }

    // Mettre à jour les données des oiseaux dans le local storage
    updateDataOiseau() {
        this.oiseaux = JSON.parse(localStorage.getItem("dataOiseau")) || dataOiseau;
    }
}

// Exportation des fonctions pour l'utiliser dans le react
const gestionCatalogueOiseaux = new GestionCatalogueOiseaux();
export const ajouterOiseau = gestionCatalogueOiseaux.ajouterOiseau.bind(gestionCatalogueOiseaux);
export const modifierOiseau = gestionCatalogueOiseaux.modifierOiseau.bind(gestionCatalogueOiseaux);
export const supprimerOiseau = gestionCatalogueOiseaux.supprimerOiseau.bind(gestionCatalogueOiseaux);
export const filtrerEtMettreAJourOiseaux = gestionCatalogueOiseaux.filtrerEtMettreAJourOiseaux.bind(gestionCatalogueOiseaux);
export const getOiseaux = gestionCatalogueOiseaux.getOiseaux.bind(gestionCatalogueOiseaux);

export default GestionCatalogueOiseaux;