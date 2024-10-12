import { supprimerCritique } from '../classes/gestionCatalogueCritique.js';

export default function CritiquePrecedente(props) {

    /**
     * Fonction pour supprimer une critique de la liste des critiques, affiche message d'alerte
     * @param idCritique l'id de la critique à supprimer
     */
    const handleSupprimerCritique = (idCritique) => {
        supprimerCritique(idCritique);
        props.setDataCritiques(prevCritiques => prevCritiques.filter(critique => critique.idCritique !== idCritique));
        alert("Critique #" + idCritique + " supprimée");
    };

    return (
        <div className=" rounded-3 p-2 my-5">
            <div className="pb-4">
                <h4 className="form-label">ID de la critique</h4>
                <input type="text" className="form-control form-select-lg" id="note" disabled value={props.idCritique} />
            </div>
            <div className="pb-4">
                <h4 className="form-label">Note globale:</h4>
                <input type="number" className="form-control form-select-lg" id="note" disabled value={props.note} />
            </div>
            <div className="pb-4">
                <h4 className="form-label">Tempérament:</h4>
                <input type="text" className="form-control form-select-lg" id="temperament" value={props.temperament} disabled />
            </div>
            <div className="pb-4">
                <h4 className="form-label">Beauté:</h4>
                <input type="text" className="form-control form-select-lg" id="beaute" disabled value={props.beaute} />
            </div>
            <div className="pb-4">
                <h4 className="form-label">Utilisation:</h4>
                <input type="text" className="form-control form-select-lg" id="utilisation" disabled value={props.utilisation} />
            </div>
            <hr />
            <div className="btn-wrapper text-center d-flex justify-content-between">
                <p className="modal-title text-muted">Supprimer la critique</p>
                <button type="button" className="btn btn-dark text-white btn-sm" onClick={() => handleSupprimerCritique(props.idCritique)}>Supprimer</button>
            </div>
        </div>
    );
}