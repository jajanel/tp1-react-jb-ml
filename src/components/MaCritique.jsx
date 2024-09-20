export default function MaCritique(props) {
    return (
        <>
            <div>
                {props.estOuvertCritique &&
                    (
                        <div className="popup">
                            <div className={"card border-0 "}>


                                <div className={"row"}>
                                    <p>Critique</p>
                                    <div className={"btn-wrapper text-center d-flex justify-content-evenly"}>
                                        <button className={"btn btn-danger "} data-toggle="modal"
                                                onClick={props.toggleModalCritique}>Annuler
                                        </button>
                                        {/*Le bouton "Ajouter" doit trigger l'action de sérialisation qui ajoute l'oiso au "JSON" */}
                                        <button className={"btn btn-success"} data-toggle="modal"
                                                onClick={props.toggleModalCritique}>Ajouter
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