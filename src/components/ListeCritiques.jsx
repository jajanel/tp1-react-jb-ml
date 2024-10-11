import MaCritique from "./MaCritique.jsx";
import CritiquePrecedente from "./CritiquePrecedente.jsx";
import {ajouterCritique, supprimerCritique} from "../classes/gestionCatalogueCritique.js";
import {getCritiques} from "../classes/gestionCatalogueCritique.js";

export default function ListeCritiques(props) {

    function dateFormat(date) {
        return date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

    function creerCritique(event, idOiseau) {
        event.preventDefault();
        const formData = new FormData(event.target);
        let idCritique = getCritiques().length + 1;

        const nouvelleCritique = {
            idCritique: idCritique,
            idOiseau: idOiseau,
            note: formData.get('note'),
            temperament: formData.get('temperament'),
            beaute: formData.get('beaute'),
            utilisation: formData.get('utilisation'),
            dateCritique: dateFormat(new Date)
        }

        if(verrifierInfos(nouvelleCritique)){
            ajouterCritique(nouvelleCritique);
            alert("La critique #" + idCritique + " a été créée");
        }
        else{
            alert("un ou plusieurs champs sont vides")
        }


    }


    function verrifierInfos(critique){
        let confirme = true;

        if(critique.beaute === "" || critique.temperament === "" || critique.utilisation === ""){
            confirme = false;
        }

        return confirme;
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