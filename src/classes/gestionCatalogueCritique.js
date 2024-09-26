import {dataCritiques} from "../assets/critiques.js";

class GestionCatalogueCritique {

    ajouterCritique(critique){
        dataCritiques.add(critique);
    }

    getListeCritiques(){
        return dataCritiques;
    }



    getCritique(critiques){
        return dataCritiques.get(critiques);
    }
}

export default GestionCatalogueCritique;