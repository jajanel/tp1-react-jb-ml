import ConfirmationSupression from "./ConfirmationSupression.jsx";

export default function CritiquePrecedente(props) {

    return (<>
            <div className="bg-light rounded-3 p-2 my-5">

                <div className="pb-4">
                    <label className="form-label">ID de la critique</label>
                    <input type="" className="form-control" id="note" disabled value={props.idCritique}/>
                </div>
                <div className="pb-4">
                    <label className="form-label">Note globale:</label>
                    <input type="number" className="form-control" id="note" disabled value={props.note}/>
                </div>
                <div className="pb-4">

                    <label className="form-label">Tempérament:</label>
                    <input
                        type="text" className="form-control" id="temperament" value={props.temperament} disabled/>
                </div>
                <div className="pb-4">
                    <label className="form-label">Beauté:</label>
                    <input type="text" className="form-control" id="beaute" disabled value={props.beaute}/>
                </div>
                <div className="pb-4">

                    <label className="form-label">Utilisation:</label>
                    <input type="text" className="form-control" id="utilisation" disabled value={props.utilisation}/>
                </div>
                <hr/>
                <div className="btn-wrapper text-center d-flex justify-content-between">
                    <p className="modal-title text-muted">Supprimer la critique</p>
                    <button type="button" className="btn btn-dark text-white btn-sm"
                            data-bs-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                    </button>

                </div>
            </div>


        </>

    )
}