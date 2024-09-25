import {dataCritiques} from "../assets/critiques.js";

class CatalogueCritiques {

    ajouerOiseau(critique){
        dataCritiques.add(critique);
    }

    getListeOiseau(){
        return dataCritiques;
    }

    tuerOiseau(critiques){
        dataCritiques.remove(critiques);
    }

    getOiseau(critiques){
        dataCritiques.get(critiques);
    }



}