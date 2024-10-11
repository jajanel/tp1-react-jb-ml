import CatalogueStatistiques from "./CatalogueStatistiques.jsx";
import {useState} from "react";

export default function Navbar(props) {

    const [estOuvertStatistiques,setEstOuvertStatistiques] = props.ouvertStatistiquesState;

    // Ouvrir la section statistique ET afficher tout les oiseaux.
    const toggleModalStatistiques = () => {
        handleChoixCategorie("tous");
        props.oiseauxTri[1](true);
        setEstOuvertStatistiques(estOuvertStatistiques=>!estOuvertStatistiques);
    };

    // Changer la catégorie des oiseaux affichés dans le catalogue selon la catégorie cliquée par l'utilisateur et ferme la section stats si ouverte.
    const handleChoixCategorie = (categorieOiseau) => {
        props.surChangementCategorie(categorieOiseau);
        props.fermerStatistiquesToggle();
    };


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={() => handleChoixCategorie("tous")}>Critique Oiso</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => handleChoixCategorie("tous")}>Tous</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => handleChoixCategorie("poule")}>Poules</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => handleChoixCategorie("canard")}>Canards</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => handleChoixCategorie("oie")}>Oies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => handleChoixCategorie("dinde")}>Dindes</a>
                            </li>
                        </ul>
                        <div >
                            <button onClick={toggleModalStatistiques} className="btn btn-secondary" type="button">Statistiques</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}