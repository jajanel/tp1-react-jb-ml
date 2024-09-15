import './App.css'
import Navbar from "./components/Navbar.jsx";
import CarteProduit from "./components/CarteProduit.jsx";
import {dataOiseau} from "./assets/oiseaux.js";
import { useState } from 'react';

function App() {
    const [categorieSelectionne, setCategorieSelectionne] = useState('all');

    const handleChangementCategorie = (categorieOiseau) => {
        setCategorieSelectionne(categorieOiseau);
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
            <div className="container-fluid">
                <div className="row">
                    {
                        oiseauxFiltre.map((oiseau) => {
                            return (
                                <div className="col-xl-4 col-xxl-3 col-md-6 col-lg-6 align-content-center" key={oiseau.idOiseau}>
                                    <CarteProduit
                                        categorie={oiseau.categorie}
                                        race={oiseau.race}
                                        origine={oiseau.origine}
                                        prix={oiseau.prix}
                                        srcImage={oiseau.srcImage}
                                        datePublication={oiseau.datePublication}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default App;