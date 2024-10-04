import CatalogueStatistiques from "./CatalogueStatistiques.jsx";
import {useState} from "react";

export default function Navbar(props) {

    const [estOuvertStatistiques,setEstOuvertStatistiques] = props.ouvertStatistiquesState;

    const toggleModalStatistiques = () => {
        setEstOuvertStatistiques(estOuvertStatistiques=>!estOuvertStatistiques);
    };

    // Changer la catégorie des oiseaux affichés dans le catalogue selon la catégorie cliquée par l'utilisateur et ferme la section stats si ouverte.
    const handleChoixCategorie = (categorieOiseau) => {
        props.surChangementCategorie(categorieOiseau);
        fermerStatistiquesToggle();
    };

    // Fermer le modal statistiques (utilisé pour fermer la section statiostique lorsqu'on change la catégorie utilisée) pour revenir au mode normal.
    const fermerStatistiquesToggle = () => {
        setEstOuvertStatistiques(false);
    }

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
                        <div className="dropdown">
                            <button onClick={toggleModalStatistiques} className="btn btn-secondary" type="button" id="dropdownMenuButton"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                Statistiques
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}