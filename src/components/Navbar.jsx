export default function Navbar({ surChangementCategorie }) {

    const handleChoixCategorie = (categorieOiseau) => {
        surChangementCategorie(categorieOiseau);
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
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                Statistiques
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item">Poules</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" >Canards</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" >Oies</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" >Dindes</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}