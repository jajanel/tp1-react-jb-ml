export default function ConfirmationSupression({estOuvertConfirmation, toggleModalConfirmation}) {
    return (<>
            <div>
                {estOuvertConfirmation && (<div className="popup">
                        <div className={"card border-0 "}>
                            <row>
                                <h2 className={"my-3 card-title"}>Êtes-vous certain de vouloir supprimer cet oiseau
                                    ?</h2>
                                <h3 className={"text-danger my-3"}> Cette action est définitive.</h3>
                                <hr/>

                                <img src={"src/assets/images/confirmation.png"} className={"img-confirmation my-3"}
                                     alt="are you sure ? Please reconsider your life choices as you may want to keep this bird."/>
                                <hr/>
                            </row>
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
                    </div>)}
            </div>
        </>)
}