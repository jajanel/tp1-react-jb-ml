import {useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import {dataOiseau} from "./assets/oiseaux.js";
import CatalogueOiseaux from "./components/CatalogueOiseaux.jsx";
import {dataCritiques} from "./assets/critiques.js";

function App() {

    const [categorieSelectionne, setCategorieSelectionne] = useState("tous");
    const dataOiseauState = useState(dataOiseau);
    const dataCritiqueState = useState(dataCritiques);


    //Change la valeur de la catégorie montrée dans le catalogue en utilisant le setter setCategorieSelectionne
    const handleChangementCategorie = (categorieOiseau) => {
        setCategorieSelectionne(categorieOiseau);
    };

    //Filtre les oiseaux selon la catégorie sélectionnée par l'utilsateur (valeur par défaut est tous les oiseaux)
    const oiseauxFiltre = categorieSelectionne === "tous"
        ? dataOiseau
        : dataOiseau.filter(oiseau => oiseau.categorie === categorieSelectionne);


    return (
        <>
            <Navbar surChangementCategorie={handleChangementCategorie} dataCritiqueState={dataCritiqueState} dataOiseauState={dataOiseauState} oiseauxFiltre={oiseauxFiltre}/>
            <CatalogueOiseaux oiseauxFiltre={oiseauxFiltre} dataOiseauState={dataOiseauState} dataCritiqueState={dataCritiqueState}/>
        </>
    );
}

export default App;