import {dataOiseau} from "../assets/oiseaux.js";
import GestionCatalogueCritique from './gestionCatalogueCritique.js';

class GestionCatalogueOiseaux {
    constructor() {
        this.oiseaux = JSON.parse(localStorage.getItem("dataOiseau")) || dataOiseau;
    }

    getOiseaux() {
        return this.oiseaux;
    }

    /**
     * Retourne le nouvel id d'un oiseau
     * @returns {*} le nouvel id d'un oiseau
     */
    newIdOiseau() {
        return this.oiseaux[this.oiseaux.length - 1].idOiseau + 1;
    }

    // Ajouter un oiseau à la liste et sauvegarder
    ajouterOiseau(nouvelOiseau) {
        this.oiseaux.push(nouvelOiseau);
        this.sauvegarder();
    }

    // Supprimer un oiseau de la liste et ses critiques et sauvegarder
    supprimerOiseau(idOiseau) {
        this.oiseaux = this.oiseaux.filter(oiseau => oiseau.idOiseau !== idOiseau);
        const gestionCritique = new GestionCatalogueCritique();
        gestionCritique.supprimerCritiquesParOiseau(idOiseau);
        this.sauvegarder();
    }

    // Filtrer les oiseaux et mettre à jour la liste des oiseaux
    filtrerEtMettreAJourOiseaux(idOiseau, setDataOiseau) {
        const updatedOiseaux = this.oiseaux.filter(oiseau => oiseau.idOiseau !== idOiseau);
        setDataOiseau(updatedOiseaux);
    }

    // Sauvegarder les données dans le local storage
    sauvegarder() {
        localStorage.setItem("dataOiseau", JSON.stringify(this.oiseaux));
    }

}

// Exportation des fonctions pour l'utiliser dans le react
const gestionCatalogueOiseaux = new GestionCatalogueOiseaux();
export const ajouterOiseau = gestionCatalogueOiseaux.ajouterOiseau.bind(gestionCatalogueOiseaux);
export const supprimerOiseau = gestionCatalogueOiseaux.supprimerOiseau.bind(gestionCatalogueOiseaux);
export const filtrerEtMettreAJourOiseaux = gestionCatalogueOiseaux.filtrerEtMettreAJourOiseaux.bind(gestionCatalogueOiseaux);
export const newIdOiseau = gestionCatalogueOiseaux.newIdOiseau.bind(gestionCatalogueOiseaux);

export default GestionCatalogueOiseaux;