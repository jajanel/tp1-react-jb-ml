import {dataOiseau} from "../assets/oiseaux.js";

class Oiseau {



    constructor(id, categorie, race, prix, origine, date, src) {
        this.idOiseau = id;
        this.categorie = categorie;
        this.race = race;
        this.prix = prix;
        this.origine = origine;
        this.datePublication = date;
        this.srcImage = src;
    }

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