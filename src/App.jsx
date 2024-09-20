import {useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import CarteProduit from "./components/CarteProduit.jsx";
import {dataOiseau} from "./assets/oiseaux.js";
import AjouterOiseau from "./components/AjouterOiseau.jsx";
import CatalogueOiseaux from "./components/CatalogueOiseaux.jsx";

function App() {
    const [categorieSelectionne, setCategorieSelectionne] = useState("tous");
    const handleChangementCategorie = (categorieOiseau) => {
        setCategorieSelectionne(categorieOiseau);
    };


    const oiseauxFiltre = categorieSelectionne === "tous"
        ? dataOiseau
        : dataOiseau.filter(oiseau => oiseau.categorie === categorieSelectionne);


    return (
        <>
            <Navbar surChangementCategorie={handleChangementCategorie}/>
            <CatalogueOiseaux oiseauxFiltre={oiseauxFiltre}/>
        </>
    );
}

export default App;