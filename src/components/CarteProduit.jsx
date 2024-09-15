export default function CarteProduit({srcImage, race, categorie, origine, prix, datePublication}) {
    return (
        <>
                        <div className="card m-5 border-primary border-2 bg-secondary">
                            <div className="card-header">
                                <div className="btn-wrapper text-center d-flex justify-content-between ">
                                    <p className="modal-title text-muted" >Supprimer l'oiseau</p>
                                    <button type="button" className="btn btn-dark text-white btn-sm" data-bs-dismiss="modal">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <img src={srcImage} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">{race}</h4>
                                <h5 className="card-subtitle">Catégorie: {categorie}</h5>
                                <div className="text-center d-flex justify-content-between ">

                                <p className="card-text">{prix} $</p>
                                <p className="card-text">Origine: {origine}</p>
                                </div>
                            </div>
                            <div className="btn-wrapper text-center d-flex justify-content-between m-3">
                                <a className="btn btn-sm btn-success">Voir description</a>
                                <a className="btn btn-sm btn-info">Voir critiques</a>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Publié le {datePublication}</small>
                            </div>
                        </div>
        </>
    );
}