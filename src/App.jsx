import { useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar.jsx";
import CatalogueOiseaux from "./components/CatalogueOiseaux.jsx";
import { dataOiseau as donnesOiseauxDefaut } from "./assets/oiseaux.js";
import { dataCritiques as donneesCritiquesDefaut } from "./assets/critiques.js";
import { filtrerEtMettreAJourOiseaux, supprimerOiseau } from "./classes/gestionCatalogueOiseaux.js";
import { filtrerEtMettreAJourCritiques } from "./classes/gestionCatalogueCritique.js";


// Fonction pour obtenir les données du local storage ou utiliser les données par défaut
const getDonneesLocalStorage = (key, donneesParDefaut) => {
    const donnees = localStorage.getItem(key);
    return donnees ? JSON.parse(donnees) : donneesParDefaut;
};

function App() {
    const [categorieSelectionne, setCategorieSelectionne] = useState("tous");

    // Initialiser le state avec les données du local storage, ou sinon avec les données par défaut (la liste directement prise du fichier "json")
    const [dataOiseau, setDataOiseau] = useState(() => getDonneesLocalStorage("dataOiseau", donnesOiseauxDefaut));
    const [dataCritiques, setDataCritiques] = useState(() => getDonneesLocalStorage("dataCritiques", donneesCritiquesDefaut));
    const ouvertStatistiquesState = useState(false);

    // Resauvegarder les données dans le local storage à chauque changement
    useEffect(() => {
        localStorage.setItem("dataOiseau", JSON.stringify(dataOiseau));
    }, [dataOiseau]);
    useEffect(() => {
        localStorage.setItem("dataCritiques", JSON.stringify(dataCritiques));
    }, [dataCritiques]);

    // Changer la valeur de la catégorie montrée dans le catalogue en utilisant le setter setCategorieSelectionne
    const handleChangementCategorie = (categorieOiseau) => {
        setCategorieSelectionne(categorieOiseau);
    };
    // Filtrer les oiseaux selon la catégorie sélectionnée par l'utilisateur (valeur par défaut est tous les oiseaux)
    const oiseauxFiltre = categorieSelectionne === "tous" ? dataOiseau : dataOiseau.filter(oiseau => oiseau.categorie === categorieSelectionne);

    const handleTuerOiseau = (idOiseau) => {
        supprimerOiseau(idOiseau);
        filtrerEtMettreAJourOiseaux(idOiseau, setDataOiseau);
        filtrerEtMettreAJourCritiques(idOiseau, setDataCritiques);
        // TODO À commenter avant de remttre
        console.log("Oiseau supprimé avec l'ID:", idOiseau);
    };

    return (
        <>
            <Navbar
                surChangementCategorie={handleChangementCategorie}
                dataCritiqueState={[dataCritiques, setDataCritiques]}
                dataOiseauState={[dataOiseau, setDataOiseau]}
                oiseauxFiltre={oiseauxFiltre}
                ouvertStatistiquesState={ouvertStatistiquesState}
            />
            <CatalogueOiseaux
                oiseauxFiltre={oiseauxFiltre}
                dataOiseauState={[dataOiseau, setDataOiseau]}
                dataCritiqueState={[dataCritiques, setDataCritiques]}
                tuerOiseau={handleTuerOiseau}
                ouvertStatistiquesState={ouvertStatistiquesState}

            />
        </>
    );
}

export default App;