export default function ConfirmationSupression(props) {
    return (
        <>
            <div>
                {
                    props.estOuvertConfirmation &&
                    (<div className="popup">
                            <div className="card border-0 ">
                                <div className="row">
                                    <h2 className="my-3 card-title">Êtes-vous certain de vouloir supprimer cet oiseau ?</h2>
                                    <h3 className="text-danger my-3"> Cette action est définitive.</h3>
                                    <hr/>
                                    <div className="img-confirmation">
                                    <img src={"src/assets/images/confirmation.png"} className="img-confirmation my-3 img-confirmation"
                                         alt="est-ce que t'es vraiment vraiment certain ??"/>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="row">
                                    <div className="btn-wrapper text-center d-flex justify-content-evenly modal-footer">
                                        <button className="btn btn-dark " data-toggle="modal"
                                                onClick={props.toggleModalConfirmation}>Annuler
                                        </button>
                                        {/*Ajouter le onClick qui appellera la fonction de suppression de l'oiseau, aussi ajouter une confirmation de supression dans le bas de l'écran par exemple.*/}
                                        <button className="btn btn-danger" data-toggle="modal">Supprimer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </>
    )
}