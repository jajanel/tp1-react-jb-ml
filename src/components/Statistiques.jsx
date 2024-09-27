export default function Statistiques(props) {

    return (
        <>
            <div>
                {
                    props.estOuvertStatistiques &&
                    (<div className="popup">
                            <div className="card border-0 ">
                                <div className="row">
                                    <h1 className="my-3 card-title">Statistiques {props.categorie}</h1>
                                    <hr/>
                                    <hr/>
                                </div>
                                <div className="row">
                                    <div className="btn-wrapper text-center d-flex justify-content-evenly modal-footer">
                                        <button className="btn btn-dark " data-toggle="modal"
                                                onClick={props.toggleModalStatistiques}>Fermer
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