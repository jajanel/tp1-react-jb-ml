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
        <div className="bg-light rounded-3 p-2 my-5">
            <div className="pb-4">
                <label className="form-label">ID de la critique</label>
                <input type="text" className="form-control" id="note" disabled value={props.idCritique} />
            </div>
            <div className="pb-4">
                <label className="form-label">Note globale:</label>
                <input type="number" className="form-control" id="note" disabled value={props.note} />
            </div>
            <div className="pb-4">
                <label className="form-label">Tempérament:</label>
                <input type="text" className="form-control" id="temperament" value={props.temperament} disabled />
            </div>
            <div className="pb-4">
                <label className="form-label">Beauté:</label>
                <input type="text" className="form-control" id="beaute" disabled value={props.beaute} />
            </div>
            <div className="pb-4">
                <label className="form-label">Utilisation:</label>
                <input type="text" className="form-control" id="utilisation" disabled value={props.utilisation} />
            </div>
            <hr />
            <div className="btn-wrapper text-center d-flex justify-content-between">
                <p className="modal-title text-muted">Supprimer la critique</p>
                <button type="button" className="btn btn-dark text-white btn-sm" onClick={() => handleSupprimerCritique(props.idCritique)}>Supprimer</button>
            </div>
        </div>
    );
}