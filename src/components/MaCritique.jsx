export default function MaCritique(props) {
    return (<>
        <div>
            <form id="critiqueForm" onSubmit={props.ajouterCritique}>
                <div className="card border-3">
                    <div className="row text-start m-4">
                        <div className="col col-11">
                            <h5 className="text-uppercase card-title">Rédiger ma critique pour: {props.categorie} {props.race} </h5>
                            <hr/>
                            <div className="pb-4">
                                <label htmlFor="note" className="form-label">Note globale:</label>
                                <input type="number" className="form-control" name="note" id="note"/>
                            </div>
                            <div className="pb-4">
                                <label className="form-label">Tempérament:</label>
                                <input type="text" className="form-control" name="temperament" id="temperament"/>
                            </div>
                            <div className="pb-4">
                                <label className="form-label">Beauté:</label>
                                <input type="text" className="form-control" name="beaute" id="beaute"/>
                            </div>
                            <div className="pb-4">
                                <label className="form-label">Utilisation:</label>
                                <input type="text" className="form-control" name="utilisation" id="utilisation"/>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="text-center text-uppercase"> ID #{props.id}</div>
                        </div>
                    </div>
                    <div className="btn-wrapper text-center d-flex justify-content-end ">
                        {/* TODO Le bouton "Ajouter" doit trigger l'action de sérialisation qui ajoute la critique a la liste de crituque js" */}
                        <button type='submit' className={"btn btn-success m-3"}
                                data-toggle="modal">Ajouter
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </>)
}