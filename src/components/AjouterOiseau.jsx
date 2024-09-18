export default function AjouterOiseau({estOuvert, toggleModal}) {
    return (<>
        <div>            {estOuvert && (<div className="popup">
            <div className={"card border-0 "}>
                <div className={"card-header"}><h5 className={"modal-title"}>Ajouter un oiseau</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={toggleModal}></button>
                </div>
                <div className={"card-body"}>
                    <div className={"row"}>
                        <div className={"col"}><label htmlFor="formFileLg" className="form-label">Choisir votre
                            image</label>
                            <div className={"ajouterPhoto rounded-3"}><input className="form-control form-control-lg"
                                                                             id="formFileLg" type="file"/></div>
                        </div>
                        <div className={"col"}>
                            <div className={"col-6"}><label htmlFor="categorie">Catégorie</label> <select
                                className={"form-select"}>
                                <option value="">Poule</option>
                                <option value="">Canard</option>
                                <option value="">Oie</option>
                                <option value="">Dinde</option>
                            </select></div>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"btn-wrapper text-center d-flex justify-content-evenly"}>
                        <button className={"btn btn-danger "} data-toggle="modal" onClick={toggleModal}>Annuler</button>
                        {/*Le bouton "Ajouter" doit trigger l'action de sérialisation qui ajoute l'oiso au "JSON" */}
                        <button className={"btn btn-success"} data-toggle="modal" onClick={toggleModal}>Ajouter</button>
                    </div>
                </div>
            </div>
        </div>)}        </div>
    </>)
}