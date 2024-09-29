import MaCritique from "./MaCritique.jsx";
import CritiquePrecedente from "./CritiquePrecedente.jsx";

export default function ListeCritiques(props) {

    function ajouterCritique(event, idOiseau){
        event.preventDefault();
        const formData = new FormData(event.target);

        const test = {
            note: formData.get("note"),
            temperament: formData.get("temperament"),
            beaute: formData.get("beaute"),
            util: formData.get("utilisation")
        }

        console.log(test);

        const nouvelleCritique = {
            idCritique: 99,
            idOiseau: idOiseau,
            note: formData.get('note'),
            temperament: formData.get('temperament'),
            beaute: formData.get('beate'),
            util: formData.get('utilisation'),
            dateCritique: Date.now()
        }
    }

    return (
        <>
            <div>
                {props.estOuvertCritique && (
                    <div className="popup">
                        <MaCritique
                            id={props.id}
                            categorie={props.categorie}
                            race={props.race}
                            ajouterCritique={ajouterCritique}
                        />
                        <div className="card border-0 my-4">
                            <div className="row text-start m-4">
                                <div className="col my-2">
                                    <h5 className="text-uppercase card-title">Visualiser les critiques</h5>
                                    <hr/>
                                    {props.dataCritiques.map((critique) => (
                                       <CritiquePrecedente
                                             key={critique.idCritique}
                                             idCritique={critique.idCritique}
                                             note={critique.note}
                                             temperament={critique.temperament}
                                             beaute={critique.beaute}
                                             utilisation={critique.utilisation}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="btn-wrapper text-center d-flex justify-content-start modal-footer">
                                <button className="btn btn-danger" data-toggle="modal" onClick={props.toggleModalCritique}>
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}