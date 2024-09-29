export default function ConfirmationSupression(props) {
    return (
        <>
            <div>
                {props.estOuvertConfirmation && (
                    <div className="popup">
                        <div className="card border-0 ">
                            <div className="row">
                                <h2 className="my-3 card-title">Êtes-vous certain de vouloir supprimer cet oiseau ?</h2>
                                <h3 className="text-danger my-3"> Cette action est définitive.</h3>
                                <hr />
                                <div className="img-confirmation">
                                    <img src={"src/assets/images/confirmation.png"} className=" my-3 img-confirmation" alt="est-ce que t'es vraiment vraiment certain ??" />
                                </div>
                                <hr />
                            </div>
                            <div className="row">
                                <div className="btn-wrapper text-center d-flex justify-content-evenly modal-footer">
                                    {/* Si clique sur annuler le popup se ferme et rien ne se passe*/}
                                    <button className="btn btn-dark " onClick={props.toggleModalConfirmation}>Annuler</button>
                                    {/* Si clique sur supprimer le popup se ferme et l'oiseau est supprimé en appellant le props */}
                                    <button className="btn btn-danger"  onClick={() => {
                                        props.confirmerSuppressionOiseau();
                                        props.toggleModalConfirmation();
                                    }}>Supprimer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}