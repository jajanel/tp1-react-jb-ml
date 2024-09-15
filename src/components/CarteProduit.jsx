export default function CarteProduit({srcImage, race, categorie, prix}) {
    return (
        <>
                        <div className="card m-3 border-primary border-2 bg-secondary">

                            <img src={srcImage} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title text-uppercase">{categorie} {race}</h4>
                                <div className="text-center d-flex justify-content-between ">
                                    <p className="card-text">{prix} $</p>
                                </div>
                            </div>
                            <div className="btn-wrapper text-center d-flex justify-content-between m-3">
                                <a className="btn btn-sm btn-success">Voir description</a>
                                <a className="btn btn-sm btn-info">Voir critiques</a>
                            </div>
                            <div className="card-footer">
                                <div className="btn-wrapper text-center d-flex justify-content-between ">
                                    <p className="modal-title text-muted">Supprimer l'oiseau</p>
                                    <button type="button" className="btn btn-dark text-white btn-sm"
                                            data-bs-dismiss="modal">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
        </>
    );
}