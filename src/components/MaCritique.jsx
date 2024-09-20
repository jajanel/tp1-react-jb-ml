export default function MaCritique({estOuvertCritique, toggleModalCritique, race, categorie, id}) {
    return (<>
            <div>
                {estOuvertCritique && (
                    <div className="popup">
                        <div className={"card border-0 "}>


                            <div className={"row"}>
                                <p>Rédiger ma critique pour: {categorie} {race} (ID #{id})</p>
                                <p>Note:</p>
                                <p>Tempérament:</p>
                                <p>Beauté:</p>
                                <p>Utilisation:</p>
                                <div className={"btn-wrapper text-center d-flex justify-content-evenly"}>
                                    <button className={"btn btn-danger "} data-toggle="modal"
                                            onClick={toggleModalCritique}>Annuler
                                    </button>
                                    {/*Le bouton "Ajouter" doit trigger l'action de sérialisation qui ajoute l'oiso au "JSON" */}
                                    <button className={"btn btn-success"} data-toggle="modal"
                                            onClick={toggleModalCritique}>Ajouter
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