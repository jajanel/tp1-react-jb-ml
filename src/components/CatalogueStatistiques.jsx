import {getNotes} from "../classes/gestionCatalogueCritique.js";

export default function CatalogueStatistiques(props) {

    function moyenne(categorie){

    }

    return (
        <>
            <div>
                {
                    props.estOuvertStatistiques &&
                    (<div className="border-bottom border-3 border-black pb-3">
                            <div className="card border-0 ">
                                <div className="row text-center">
                                    <div className="card-header pb-3">
                                    <h1 className="my-3 card-title text-center">Statistiques</h1>
                                    <h6 className="card-subtitle"> Les oiseaux du catalogue ci-dessous sont maintenant triés par note.</h6>
                                    </div>
                                    <hr/>
                                    <div className="row d-flex text-center pb-3">
                                        <div className="col">Poules:<br/> {moyenne("poule")}/100</div>
                                        <div className="col">Canards:<br/> {moyenne("canard")}/100</div>
                                        <div className="col">Oies: <br/>{moyenne("oie")}/100</div>
                                            <div className="col">Dindes: <br/>{moyenne("dinde")}/100</div>
                                    </div>

                                    <hr/>
                                </div>
                                <div className="row">
                                    <div className="btn-wrapper text-center d-flex justify-content-evenly modal-footer">
                                        <button className="btn btn-dark "
                                                onClick={() => props.toggleModalStatistiques("tous")}>
                                            Fermer le mode statistique
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </>
    )
}