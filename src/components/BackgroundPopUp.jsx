export default function BackgroundPopUp({ estOuvert, toggleModal }) {
    return (
        <>
            <div>
                {estOuvert && (
                    /*Le popup fonctionne seulement et SEULEMENT si la classe est "popup"*/

                    <div className="popup">
                        <button className={"btn btn-dark "} data-toggle="modal" onClick={toggleModal}>Close</button>
                        <div className={"modal-header"}>
                            <h5 className={"modal-title"}>Ajouter un oiseau</h5>
                        </div>
                        <div className={"modal-body"}>
                            dfgdfgdzfhdzgh
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}