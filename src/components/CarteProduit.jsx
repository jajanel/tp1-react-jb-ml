import {useState} from "react";
import DescriptionOiseau from "./DescriptionOiseau.jsx";
import MaCritique from "./MaCritique.jsx";
import ConfirmationSupression from "./ConfirmationSupression.jsx";

export default function CarteProduit({srcImage, race, categorie, prix, origine, datePublication, id}) {

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


    return (<>
            <div className="card m-3 border-primary border-2 bg-secondary shadow">

                <img src={srcImage} className="card-img-top" alt="image d'oiseau"/>
                <div className="card-body">
                    <h4 className="card-title text-uppercase">{categorie} {race}</h4>
                </div>
                <div className="btn-wrapper text-center d-flex justify-content-center m-3">
                    <a className="btn btn-sm btn-success shadow boutonCarte me-4"
                       onClick={toggleModalDescription}> description</a>
                    <DescriptionOiseau
                        id={id}
                        categorie={categorie}
                        race={race}
                        prix={prix}
                        origine={origine}
                        date={datePublication}
                        srcImage={srcImage}
                        estOuvertDescription={estOuvertDescription}
                        toggleModalDescription={toggleModalDescription}
                        toggleModalModifierDescription={toggleModalModifierDescription}/>
                    <a className="btn btn-sm btn-info shadow boutonCarte" onClick={toggleModalCritique}> critiques</a>
                    <MaCritique estOuvertCritique={estOuvertCritique} toggleModalCritique={toggleModalCritique}/>

                </div>
                <div className="card-footer">
                    <div className="btn-wrapper text-center d-flex justify-content-between">
                        <p className="modal-title text-muted">Supprimer l'oiseau</p>
                        <button type="button" className="btn btn-dark text-white btn-sm"
                                data-bs-dismiss="modal" onClick={toggleModalConfirmation}>
                            <span aria-hidden="true" onClick={toggleModalConfirmation}>&times;</span>

                        </button>
                        <ConfirmationSupression estOuvertConfirmation={estOuvertConfirmation}
                                                toggleModalConfirmation={toggleModalConfirmation}/>

                    </div>
                </div>
            </div>
        </>);
}