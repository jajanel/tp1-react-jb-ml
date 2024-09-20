export default function AjouterOiseau({estOuvert, toggleModal}) {
    return (
        <>
            <div>
                {
                    estOuvert && (
                        <div className="popup">
                            <div className={"card border-0 "}>
                                <div className={"card-header bg-white"}>
                                    <h5 className={"card-title text-uppercase"}>Ajouter un oiseau</h5>
                                </div>
                                <div className={"card-body"}>
                                    <div className={"row"}>
                                        <div className={"col-xl-4 col-xxl-3 col-md-12 col-lg-6 align-content-center"}>

                                            <div className={"ajouterPhoto rounded-3"}>
                                                <label htmlFor="formFile" className="form-label">Choisir votre image</label>
                                                {/*La source de l'image doit être dynamique, elle doit être celle que l'utilisateur a choisi*/}
                                                <img src={"https://via.placeholder.com/300"} className={"card-img "}
                                                     alt={"image selectionnée par l'utilisateur"}/>
                                                <input className="form-control form-control mb-5" id="formFile"
                                                       type="file"/></div>

                                        </div>
                                        <div className={"col mx-5"}>
                                            <div className={"pb-4"}>
                                                <label htmlFor="categorie" className="form-label">Catégorie</label>
                                                <select
                                                    className={"form-select"}>
                                                    <option value="" selected>Choisir la catégorie de volaille</option>
                                                    <hr/>
                                                    <option value="">Poule</option>
                                                    <option value="">Canard</option>
                                                    <option value="">Oie</option>
                                                    <option value="">Dinde</option>
                                                </select>
                                            </div>
                                            <div className={"pb-4"}>
                                                <label htmlFor="race" className="form-label">Race</label>
                                                <input type="text" className="form-control" id="race"/>
                                            </div>
                                            <div className={"pb-4"}>

                                                <label htmlFor="prix" className="form-label">Prix</label>
                                                <input type="number" className="form-control" id="prix"/>
                                            </div>
                                            <div className={"pb-4"}>

                                                <label htmlFor="origine" className="form-label">Origine</label>
                                                <select
                                                    className={"form-select"}>
                                                    <option value="" selected>Choisir la région d'origine</option>
                                                    <hr/>
                                                    <option value="afrique">Afrique</option>
                                                    <option value="amerique">Amérique</option>
                                                    <option value="europe">Europe</option>
                                                    <option value="asie">Asie</option>
                                                    <option value="oceanie">Océanie</option>
                                                </select>
                                            </div>
                                            <div className={"pb-4"}>

                                                <label htmlFor="datePublication" className="form-label">Date de
                                                    publication</label>
                                                <br/>
                                                {/*La date de publication doit automatique être la date du jour et disabled, juste pour montrer à l'utilisateur qu'elle sera initialisé à la date d'aujourd'hui*/}
                                                <input disabled type="date" className="form-control" id="datePublication"
                                                       name="datePublication" value=""/>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"btn-wrapper text-center d-flex justify-content-evenly modal-footer"}>
                                        <button className={"btn btn-danger "} data-toggle="modal"
                                                onClick={toggleModal}>Annuler
                                        </button>
                                        {/*Le bouton "Ajouter" doit trigger l'action de sérialisation qui ajoute l'oiso au "JSON" */}
                                        <button className={"btn btn-success"} data-toggle="modal"
                                                onClick={toggleModal}>Ajouter
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </>)
}