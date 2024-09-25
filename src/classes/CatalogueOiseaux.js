import {dataOiseau} from "../assets/oiseaux.js";

class CatalogueOiseaux {

    ajouerOiseau(oiseau){
        dataOiseau.add(oiseau);
    }

    getListeOiseau(){
        return dataOiseau;
    }

    tuerOiseau(oiseau){
        dataOiseau.remove(oiseau);
    }

    getOiseau(oiseau){
        dataOiseau.get(oiseau);
    }



}