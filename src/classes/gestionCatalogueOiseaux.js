import {dataOiseau} from "../assets/oiseaux.js";
import GestionCatalogueCritique from './gestionCatalogueCritique.js';

class GestionCatalogueOiseaux {

    ajouterOiseau(oiseau){
        dataOiseau.push(oiseau);
    }

    getListeOiseau(){
        return dataOiseau;
    }


    getOiseau(idOiseau){
        return dataOiseau.find(oiseau => oiseau.idOiseau === idOiseau);
    }
}

export default GestionCatalogueOiseaux;