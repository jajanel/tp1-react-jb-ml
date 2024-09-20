import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import CarteProduit from "./components/CarteProduit.jsx";
import { dataOiseau } from "./assets/oiseaux.js";
import AjouterOiseau from "./components/AjouterOiseau.jsx";

function App() {
    const [categorieSelectionne, setCategorieSelectionne] = useState("tous");
    const [estOuvert, setEstOuvert] = useState(false);

    const handleChangementCategorie = (categorieOiseau) => {
        setCategorieSelectionne(categorieOiseau);
    };

    const toggleModal = () => {
        setEstOuvert(!estOuvert);
    };

    let oiseauxFiltre;
    if (categorieSelectionne === "tous") {
        oiseauxFiltre = dataOiseau;
    } else {
        oiseauxFiltre = dataOiseau.filter(oiseau => oiseau.categorie === categorieSelectionne);
    }

    return (
        <>
            <Navbar surChangementCategorie={handleChangementCategorie} />
            <div className={"row"}>
                <button className={"btn btn-sm btn-secondary"} onClick={toggleModal}>
                    Ajouter un oiseau
                </button>
                <AjouterOiseau estOuvert={estOuvert} toggleModal={toggleModal} />
            </div>
            <div className="container-fluid">
                <div className="row">
                    {oiseauxFiltre.map((oiseau) => (
                        <div className="col-xl-4 col-xxl-3 col-md-6 col-lg-6 align-content-center" key={oiseau.idOiseau}>
                            <CarteProduit
                                id = {oiseau.idOiseau}
                                categorie={oiseau.categorie}
                                race={oiseau.race}
                                origine={oiseau.origine}
                                prix={oiseau.prix}
                                srcImage={oiseau.srcImage}
                                datePublication={oiseau.datePublication}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;