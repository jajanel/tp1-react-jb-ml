export default function DescriptionOiseau(props) {


    return (

        <>
            <div>
                {props.estOuvertDescription &&
                    (<div className="popup">
                            <div className={"card border-0 "}>
                                <div className={"card-header bg-white"}>
                                    <h5 className={"card-title text-uppercase"}>Description</h5>
                                </div>
                                <div className={"card-body"}>
                                    <div className={"row"}>
                                        <div className={"col-xl-4 col-xxl-3 col-md-12 col-lg-6 align-content-center"}>
                                            <div className={"ajouterPhoto rounded-3"}>
                                                <img src={props.srcImage} className={"card-img "}
                                                     alt={"image selectionnée par l'utilisateur"}/>
                                            </div>
                                            <div className={"pb-4"}>
                                                <label className="form-label">ID</label>
                                                <p>{props.id}</p>
                                            </div>

                                        </div>
                                        <div className={"col mx-5"}>
                                            <div className={"pb-4"}>
                                                <label className="form-label">Catégorie</label>
                                                <p className={"form-control disabled"}>{props.categorie}</p>
                                            </div>
                                            <div className={"pb-4"}>
                                                <label htmlFor="race" className="form-label">Race</label>
                                                <p className={"form-control disabled"}>{props.race}</p>
                                            </div>
                                            <div className={"pb-4"}>

                                                <label htmlFor="prix" className="form-label">Prix</label>
                                                <p className={"form-control disabled"}>{props.prix}</p>
                                            </div>
                                            <div className={"pb-4"}>

                                                <label className="form-label">Origine</label>
                                                <p className={"form-control disabled"}>{props.origine}</p>
                                            </div>
                                            <div className={"pb-4"}>

                                                <label className="form-label">Date de publication</label>
                                                <br/>
                                                <p className={"form-control disabled"}>{props.date}</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div
                                        className={"btn-wrapper text-center d-flex justify-content-evenly modal-footer"}>
                                        <button className={"btn btn-danger "} data-toggle="modal"
                                                onClick={props.toggleModalDescription}>Annuler
                                        </button>
                                        <button className={"btn btn-success"} data-toggle="modal"
                                                onClick={props.toggleModalModifierDescription}>Modifier
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