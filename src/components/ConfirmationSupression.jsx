export default function ConfirmationSupression({estOuvertConfirmation, toggleModalConfirmation}) {
    return (
        <>
            <div>
                {
                    estOuvertConfirmation && (
                        <div className="popup">
                            <div className={"card border-0 "}>
                                <h1>Êtes-vous certain de vouloir supprimer cet oiseau ?</h1>
                                <p> Cette action est définitive.</p>
                                <div className={"row"}>


                                </div>
                                <div className={"row"}>
                                    <div className={"btn-wrapper text-center d-flex justify-content-evenly modal-footer"}>
                                        <button className={"btn btn-dark "} data-toggle="modal"
                                                onClick={toggleModalConfirmation}>Annuler
                                        </button>
                                        {/*Ajouter le onClick qui appellera la fonction de suppression de l'oiseau, aussi ajouter une confirmation de supression dans le bas de l'écran par exemple.*/}
                                        <button className={"btn btn-danger"} data-toggle="modal">Supprimer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </>
    )
}