export default function Navbar(props) {

    // État de la section statistique ouvert ou non
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
                    <button className="btn navbar-brand rounded-3 px-4 text-uppercase btn-outline-light bg-light" onClick={() => handleChoixCategorie("tous")}>Critique Oiso</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 ">
                            <li className="nav-item">
                                <button className="btn btn-secondary mx-2" onClick={() => handleChoixCategorie("tous")}>Tous</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-secondary  mx-2" onClick={() => handleChoixCategorie("poule")}>Poules</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-secondary  mx-2" onClick={() => handleChoixCategorie("canard")}>Canards</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-secondary mx-2" onClick={() => handleChoixCategorie("oie")}>Oies</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-secondary mx-2" onClick={() => handleChoixCategorie("dinde")}>Dindes</button>
                            </li>
                        </ul>
                        <div >
                            <button onClick={toggleModalStatistiques} className="btn btn-success" type="button">Statistiques</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}