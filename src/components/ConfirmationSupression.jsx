export default function ConfirmationSupression(props) {
    return (
        <>
            <div>
                {props.estOuvertConfirmation && (
                    <div className="popup bg-dark-subtle">
                        <div className="">
                            <div className="row">
                                <h2 className="my-3 card-title display-2">Êtes-vous certain de vouloir supprimer cet oiseau ?</h2>
                                <h3 className="text-danger my-3 display-5"> Cette action est définitive.</h3>
                                <hr/>
                                <div className="img-confirmation my-5">
                                    <img src="src/assets/images/confirmation.png" className="my-3 img-confirmation" alt="est-ce que t'es vraiment vraiment certain ??"/>
                                </div>
                                <hr/>
                            </div>
                            <div className="row">
                                <div className="btn-wrapper text-center d-flex justify-content-evenly">
                                    <button className="btn btn-dark btn-lg " onClick={props.toggleModalConfirmation}>Annuler</button>
                                    <button className="btn btn-danger btn-lg"  onClick={() => {
                                        props.confirmerSuppressionOiseau();
                                        props.toggleModalConfirmation();
                                        alert("L'oiseau a été supprimé");
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