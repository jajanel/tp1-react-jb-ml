import { useState, useEffect } from 'react';
import { getNotes } from "../classes/gestionCatalogueCritique.js";

export default function CatalogueStatistiques(props) {
    //valeur de base des moyennes
    const [moyennes, setMoyennes] = useState({ tous: 0, poule: 0, canard: 0, oie: 0, dinde: 0 });

    //Si le modal est ouvert, on calcule les moyennes des notes pour chaque catégorie
    useEffect(() => {
        if (props.estOuvertStatistiques) {
            setMoyennes({
                tous: getNotes("tous"),
                poule: getNotes("poule"),
                canard: getNotes("canard"),
                oie: getNotes("oie"),
                dinde: getNotes("dinde")
            });
        }
    }, [props.estOuvertStatistiques]);

    return (
        <>
            <div>
                {
                    props.estOuvertStatistiques &&
                    (<div className="border-bottom border-3 border-black pb-3">
                            <div className="card border-0 ">
                                <div className="row text-center">
                                    <div className="card-header pb-3">
                                        <h2 className="my-3 card-title text-center display-4">Statistiques</h2>
                                        <h6 className="card-subtitle display-6"> Les oiseaux du catalogue ci-dessous sont maintenant triés par note.</h6>
                                    </div>
                                    <hr/>
                                    <div className="row d-flex text-center p-5">
                                        <div className="col noteOiseau">Tous:<br/> {moyennes.tous}/100</div>
                                        <div className="col noteOiseau">Poules:<br/> {moyennes.poule}/100</div>
                                        <div className="col noteOiseau">Canards:<br/> {moyennes.canard}/100</div>
                                        <div className="col noteOiseau">Oies: <br/>{moyennes.oie}/100</div>
                                        <div className="col noteOiseau">Dindes: <br/>{moyennes.dinde}/100</div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="row">
                                    <div className="btn-wrapper text-center d-flex justify-content-evenly modal-footer">
                                        <button className="btn btn-dark btn-lg" onClick={() => props.fermerStatistiquesToggle()}>Fermer le mode statistique</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </>
    )
}