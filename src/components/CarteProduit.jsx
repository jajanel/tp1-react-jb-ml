import {useState} from "react";
import DescriptionOiseau from "./DescriptionOiseau.jsx";
import MaCritique from "./MaCritique.jsx";

export default function CarteProduit({srcImage, race, categorie, prix, datePublication, origine, id}) {

    const [estOuvertDescription, setEstOuvertDescription] = useState(false);
    const [estOuvertCritique, setEstOuvertCritique] = useState(false);
    const [estOuvertConfirmation, setEstOuvertConfirmation] = useState(false);


    const toggleModalDescription = () => {
        setEstOuvertDescription(!estOuvertDescription);
    };

    const toggleModalCritique = () => {
        setEstOuvertCritique(!estOuvertCritique);
    };

    const toggleModalConfirmation = () => {
        setEstOuvertCritique(!estOuvertCritique);
    };


    return (
        <>
                        <div className="card m-3 border-primary border-2 bg-secondary shadow">

                            <img src={srcImage} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title text-uppercase">{categorie} {race}</h4>
                            </div>
                            <div className="btn-wrapper text-center d-flex justify-content-center m-3">
                                <a className="btn btn-sm btn-success shadow boutonCarte me-4" onClick={toggleModalDescription} > description</a>
                                <DescriptionOiseau
                                    race={race}
                                    prix={prix}
                                    categorie={categorie}
                                    srcImage={srcImage}
                                    date={datePublication}
                                    origine={origine}
                                    id={id}
                                    estOuvertDescription={estOuvertDescription}
                                    toggleModalDescription={toggleModalDescription}/>
                                <a className="btn btn-sm btn-info shadow boutonCarte" onClick={toggleModalCritique}> critiques</a>
                                <MaCritique estOuvertCritique={estOuvertCritique} toggleModalCritique={toggleModalCritique}/>

                            </div>
                            <div className="card-footer">
                                <div className="btn-wrapper text-center d-flex justify-content-between ">
                                    <p className="modal-title text-muted">Supprimer l'oiseau</p>
                                    <button type="button" className="btn btn-dark text-white btn-sm"
                                            data-bs-dismiss="modal">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
        </>
    );
}