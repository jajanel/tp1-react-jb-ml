export default function MaCritique(props) {
    return (<>
        <div>
            {props.estOuvertCritique && (<div className="popup">
                <div className="card border-0 ">


                    <div className="row text-start m-4">
                        <div className="col col-11">
                            <h5 className="text-uppercase card-title">Rédiger ma critique
                                pour: {props.categorie} {props.race} </h5>
                            <hr/>
                            <div className="pb-4">
                                <label className="form-label">Note globale:</label> <input
                                type="number" className="form-control" id="note"/>
                            </div>
                            <div className="pb-4">

                                <label className="form-label">Tempérament:</label> <input
                                type="text" className="form-control" id="temperament"/>
                            </div>
                            <div className="pb-4">
                                <label className="form-label">Beauté:</label>
                                <input type="text" className="form-control" id="beaute"/>
                            </div>
                            <div className="pb-4">

                                <label className="form-label">Utilisation:</label> <input
                                type="text" className="form-control" id="utilisation"/>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="text-center text-uppercase"> ID #{props.id}</div>
                        </div>
                    </div>

                    <div className="btn-wrapper text-center d-flex justify-content-evenly ">
                        <button className={"btn btn-danger "} data-toggle="modal"
                                onClick={props.toggleModalCritique}>Annuler
                        </button>
                        {/*Le bouton "Ajouter" doit trigger l'action de sérialisation qui ajoute l'oiso au "JSON" */}
                        <button className={"btn btn-success"} data-toggle="modal"
                                onClick={props.toggleModalCritique}>Ajouter
                        </button>
                    </div>
                </div>
            </div>)}
        </div>
    </>)
}