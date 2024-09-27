import {useState} from "react";
import DescriptionOiseau from "./DescriptionOiseau.jsx";
import MaCritique from "./MaCritique.jsx";
import ConfirmationSupression from "./ConfirmationSupression.jsx";
import ListeCritiques from "./ListeCritiques.jsx";
import CatalogueStatistiques from "./CatalogueStatistiques.jsx";

export default function CarteProduit(props) {
    const [estOuvertDescription, setEstOuvertDescription] = useState(false);
    const [estOuvertCritique, setEstOuvertCritique] = useState(false);
    const [estOuvertConfirmation, setEstOuvertConfirmation] = useState(false);
    const [estOuvertModifierDescrition, setEstOuvertModifierDescription] = useState(false);

    const toggleModalDescription = () => {
        setEstOuvertDescription(!estOuvertDescription);
    };

    const toggleModalModifierDescription = () => {
        setEstOuvertModifierDescription(!estOuvertModifierDescrition);
    };

    const toggleModalCritique = () => {
        setEstOuvertCritique(!estOuvertCritique);
    };

    const toggleModalConfirmation = () => {
        setEstOuvertConfirmation(!estOuvertConfirmation);
    };

    // Filter critiques for the specific bird
    const filteredCritiques = props.dataCritiques.filter(critique => critique.idOiseau === props.id);

    return (
        <>
            <div className="card m-3 border-primary border-2 bg-secondary shadow">
                <img src={props.srcImage} className="card-img-top" alt="image d'oiseau"/>
                <div className="card-body">
                    <h4 className="card-title text-uppercase">{props.categorie} {props.race}</h4>
                </div>
                <div className="btn-wrapper text-center d-flex justify-content-center m-3">
                    <a className="btn btn-sm btn-success shadow boutonCarte me-4"
                       onClick={toggleModalDescription}> description</a>
                    <DescriptionOiseau
                        id={props.id}
                        categorie={props.categorie}
                        race={props.race}
                        prix={props.prix}
                        origine={props.origine}
                        date={props.datePublication}
                        srcImage={props.srcImage}
                        estOuvertDescription={estOuvertDescription}
                        toggleModalDescription={toggleModalDescription}
                    />
                    <a className="btn btn-sm btn-info shadow boutonCarte" onClick={toggleModalCritique}> critiques</a>
                    <ListeCritiques
                        id={props.id}
                        categorie={props.categorie}
                        race={props.race}
                        estOuvertCritique={estOuvertCritique}
                        toggleModalCritique={toggleModalCritique}
                        dataCritiques={filteredCritiques} // Pass filtered critiques here
                    />
                </div>
                <div className="card-footer">
                    <div className="btn-wrapper text-center d-flex justify-content-between">
                        <p className="modal-title text-muted">Supprimer l'oiseau</p>
                        <button type="button" className="btn btn-dark text-white btn-sm"
                                data-bs-dismiss="modal" onClick={toggleModalConfirmation}>
                            <span aria-hidden="true" onClick={toggleModalConfirmation}>&times;</span>
                        </button>
                        <ConfirmationSupression
                            estOuvertConfirmation={estOuvertConfirmation}
                            toggleModalConfirmation={toggleModalConfirmation}
                            tuerOiseau={props.tuerOiseau}
                            id={props.id}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}