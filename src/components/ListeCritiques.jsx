import MaCritique from "./MaCritique.jsx";
import CritiquePrecedente from "./CritiquePrecedente.jsx";
import {ajouterCritique} from "../classes/gestionCatalogueCritique.js";
import {dataCritiques} from "../assets/critiques.js";

export default function ListeCritiques(props) {

    function dateFormat(date) {
        return date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

    function creerCritique(event, idOiseau) {
        event.preventDefault();
        const formData = new FormData(event.target);
        let date = new Date();
        date.getSeconds()

        // load
        let critiques = JSON.parse(localStorage.getItem("dataCritique"));

        console.log(critiques);

        const nouvelleCritique = {
            idCritique: JSON.parse(localStorage.getItem("dataCritique")).length + 1,
            idOiseau: idOiseau,
            note: formData.get('note'),
            temperament: formData.get('temperament'),
            beaute: formData.get('beaute'),
            utilisation: formData.get('utilisation'),
            dateCritique: dateFormat(new Date)
        }

        ajouterCritique(nouvelleCritique);
        console.log(critiques);
    }

    const handleSupprimerCritique = (idCritique) => {
        supprimerCritique(idCritique);
        props.setDataCritiques(prevCritiques => prevCritiques.filter(critique => critique.idCritique !== idCritique));
    };

    return (
        <>
            <div>
                {props.estOuvertCritique && (
                    <div className="popup">
                        <MaCritique
                            id={props.id}
                            categorie={props.categorie}
                            race={props.race}
                            creerCritique={creerCritique}
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
                                            setDataCritiques={props.setDataCritiques}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="btn-wrapper text-center d-flex justify-content-start modal-footer">
                                <button className="btn btn-danger" onClick={props.toggleModalCritique}>
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