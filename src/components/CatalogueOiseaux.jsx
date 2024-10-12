import AjouterOiseau from "./AjouterOiseau.jsx";
import CarteProduit from "./CarteProduit.jsx";
import {useState} from "react";
import CatalogueStatistiques from "./CatalogueStatistiques.jsx";
import {getNoteOiseauSpecifique} from "../classes/gestionCatalogueCritique.js";
import Footer from "./Footer.jsx";

export default function CatalogueOiseaux(props) {
    const [estOuvert, setEstOuvert] = useState(false);
    const [dataOiseau, setDataOiseau] = props.dataOiseauState;
    const [dataCritiques, setDataCritiques] = props.dataCritiqueState;
    const [estOuvertStatistiques, setEstOuvertStatistiques] = props.ouvertStatistiquesState;

    const toggleModalAjouterOiseau = () => {
        setEstOuvert(!estOuvert);
    };



    return (<>
        {/*afficher la section des stats*/}
        {estOuvertStatistiques && <CatalogueStatistiques
            dataCritiqueState={props.dataCritiqueState}
            estOuvertStatistiques={estOuvertStatistiques}
            fermerStatistiquesToggle={() => props.fermerStatistiquesToggle()}
        />}
        <div className="container-fluid ">

            <div className="row mb-4">
                <button className="btn btn-secondary btn-lg" onClick={toggleModalAjouterOiseau}>Ajouter un oiseau
                </button>
                <AjouterOiseau
                    estOuvert={estOuvert}
                    toggleModal={toggleModalAjouterOiseau}
                    dataCritiqueState={[dataOiseau, setDataOiseau]}
                    dataOiseauState={[dataCritiques, setDataCritiques]}

                />
            </div>
            <div className="row px-5">
                {/*Boucle pour afficher les cartes produits filtrées soit par leur notes moyenne(si stats est ouvert) ou normalement (oiseauFiltre)*/}
                {(props.oiseauxTriBool[0] ? props.oiseauxFiltre.toSorted((a, b) => getNoteOiseauSpecifique(b.idOiseau) - getNoteOiseauSpecifique(a.idOiseau)) : props.oiseauxFiltre).map((oiseau) => (
                    <div className="col-xl-4 col-xxl-3 col-md-6 col-lg-6 align-content-center" key={oiseau.idOiseau}>
                        <CarteProduit
                            key={oiseau.idOiseau}
                            tuerOiseau={props.tuerOiseau}
                            id={oiseau.idOiseau} categorie={oiseau.categorie}
                            race={oiseau.race} origine={oiseau.origine}
                            prix={oiseau.prix} srcImage={oiseau.srcImage}
                            datePublication={oiseau.datePublication}
                            dataCritiques={dataCritiques}
                            setDataCritiques={setDataCritiques}
                        />
                    </div>
                ))}
            </div>
        </div>

    </>);
}