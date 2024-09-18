export default function DescriptionOiseau({estOuvertDescription, toggleModalDescription, srcImage, origine, race, prix, categorie, date}) {


    return (

        <>
            <div>            {estOuvertDescription && (<div className="popup">
                <div className={"card border-0 "}>
                    <div className={"card-header bg-white"}>
                        <h5 className={"card-title text-uppercase"}>Description</h5>
                    </div>
                    <div className={"card-body"}>
                        <div className={"row"}>
                            <div className={"col-xl-4 col-xxl-3 col-md-12 col-lg-6 align-content-center"}>
                                <div className={"ajouterPhoto rounded-3"}>
                                    <img src={srcImage} className={"card-img "}
                                         alt={"image selectionnée par l'utilisateur"}/>
                                    </div>

                            </div>
                            <div className={"col mx-5"}>
                                <div className={"pb-4"}>
                                    <label className="form-label">Catégorie</label>
                                    <p>{categorie}</p>
                                </div>
                                <div className={"pb-4"}>
                                    <label htmlFor="race" className="form-label">Race</label>
                                    <p>{race}</p>
                                </div>
                                <div className={"pb-4"}>

                                    <label htmlFor="prix" className="form-label">Prix</label>
                                    <p>{prix} $</p>
                                </div>
                                <div className={"pb-4"}>

                                    <label className="form-label">Origine</label>
                                    <p>{origine}</p>
                                </div>
                                <div className={"pb-4"}>

                                    <label className="form-label">Date de publication</label>
                                    <br/>
                                    <p>{date}</p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"btn-wrapper text-center d-flex justify-content-evenly modal-footer"}>
                            <button className={"btn btn-danger "} data-toggle="modal" onClick={toggleModalDescription}>Annuler
                            </button>
                        </div>
                    </div>
                </div>
            </div>)}        </div>
        </>)
}