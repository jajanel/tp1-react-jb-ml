import MaCritique from "./MaCritique.jsx";

export default function ListeCritiques(props) {

    return (<>
        <div>
            {props.estOuvertCritique && (<div className="popup  ">
                    {/*Header avec appel du component ma critique*/}

                    <MaCritique
                        id={props.id}
                        categorie={props.categorie}
                        race={props.race}
                    />

                    {/*Liste de toutes les critiques*/}
                    <div className="card border-0">

                            <h5 className="d-flex justify-content-start"> Liste des critiques: </h5>

                            {/*Ici il faut utiliser une .map sur les différentes critiques existante.*/}
                            <div className="row text-start m-4">
                                <div className="col col-11">
                                    <div className="pb-4">
                                        <label className="form-label">Note globale:</label>
                                        <input
                                            type="number" className="form-control" id="note" disabled/>
                                    </div>
                                    <div className="pb-4">

                                        <label className="form-label">Tempérament:</label>
                                        <input
                                            type="text" className="form-control" id="temperament" disabled/>
                                    </div>
                                    <div className="pb-4">
                                        <label className="form-label">Beauté:</label>
                                        <input type="text" className="form-control" id="beaute" disabled/>
                                    </div>
                                    <div className="pb-4">

                                        <label className="form-label">Utilisation:</label>
                                        <input
                                            type="text" className="form-control" id="utilisation" disabled/>
                                    </div>
                                </div>
                            </div>
                    </div>
                    {/*Footer avec bouton pour annuler*/}
                    <div className="row">
                        <div className="btn-wrapper text-center d-flex justify-content-start modal-footer">
                            <button className="btn btn-danger " data-toggle="modal"
                                    onClick={props.toggleModal}>Annuler
                            </button>
                        </div>
                    </div>


                </div>
            )}
        </div>
    </>)

}