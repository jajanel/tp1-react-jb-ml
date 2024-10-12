import {useState, useEffect} from "react";
import './App.css';
import Navbar from "./components/Navbar.jsx";
import CatalogueOiseaux from "./components/CatalogueOiseaux.jsx";
import {dataOiseau, dataOiseau as donnesOiseauxDefaut} from "./assets/oiseaux.js";
import {dataCritiques, dataCritiques as donneesCritiquesDefaut} from "./assets/critiques.js";
import {filtrerEtMettreAJourOiseaux, supprimerOiseau} from "./classes/gestionCatalogueOiseaux.js";
import  {filtrerEtMettreAJourCritiques} from "./classes/gestionCatalogueCritique.js";
import {DataoiseauContext} from "./components/contexts/DataOiseauContext.jsx";
import {DataCritiqueContext} from "./components/contexts/DataCritiqueContext.jsx";
import Footer from "./components/Footer.jsx";

// Fonction pour obtenir les données du local storage ou utiliser les données par défaut
const getDonneesLocalStorage = (key, donneesParDefaut) => {
    const donnees = localStorage.getItem(key);
    return donnees ? JSON.parse(donnees) : donneesParDefaut;
};

function App() {
    //Initialisé la catégorie sélectionnée à tous au départ de l'app
    const [categorieSelectionne, setCategorieSelectionne] = useState("tous");
    //Initialiser le state à faux pour s'il faut trier le catalogue par note moyenne ou pas.
    const [boolOiseauTrie, setBoolOiseauTrie] = useState(false);

    // Initialiser le state avec les données du local storage, ou sinon avec les données par défaut (la liste directement prise du fichier "json")
    const [dataOiseau,  setDataOiseau] = useState(() => getDonneesLocalStorage("dataOiseau", donnesOiseauxDefaut));
    const [dataCritiques,  setDataCritiques] = useState(getDonneesLocalStorage("dataCritiques", donneesCritiquesDefaut));
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

    // Fonction pour supprimer un oiseau du catalogue et mettre à jour les données
    const handleTuerOiseau = (idOiseau) => {
        supprimerOiseau(idOiseau);
        filtrerEtMettreAJourOiseaux(idOiseau, setDataOiseau);
        filtrerEtMettreAJourCritiques(idOiseau, setDataCritiques);
    };

    // Fermer le modal statistiques (utilisé pour fermer la section statiostique lorsqu'on change la catégorie utilisée) pour revenir au mode normal.
    const fermerStatistiquesToggle = () => {
        ouvertStatistiquesState[1](false);
        setBoolOiseauTrie(false);
    }

    return (
        <>
            <DataoiseauContext.Provider value={[dataOiseau, setDataOiseau]}>
                <DataCritiqueContext.Provider value={[dataCritiques, setDataCritiques]}>
                    <Navbar
                        surChangementCategorie={handleChangementCategorie}
                        dataCritiqueState={[dataCritiques, setDataCritiques]}
                        dataOiseauState={[dataOiseau, setDataOiseau]}
                        oiseauxFiltre={oiseauxFiltre}
                        oiseauxTri={[boolOiseauTrie, setBoolOiseauTrie]}
                        ouvertStatistiquesState={ouvertStatistiquesState}
                        fermerStatistiquesToggle={fermerStatistiquesToggle}
                    />
                    <CatalogueOiseaux
                        oiseauxFiltre={oiseauxFiltre}
                        oiseauxTriBool={[boolOiseauTrie, setBoolOiseauTrie]}
                        dataOiseauState={[dataOiseau, setDataOiseau]}
                        dataCritiqueState={[dataCritiques, setDataCritiques]}
                        tuerOiseau={handleTuerOiseau}
                        ouvertStatistiquesState={ouvertStatistiquesState}
                        fermerStatistiquesToggle={fermerStatistiquesToggle}
                    />
                </DataCritiqueContext.Provider>
            </DataoiseauContext.Provider>
            <Footer/>
        </>
    );
}

export default App;