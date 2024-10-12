import MaCritique from "./MaCritique.jsx";
import CritiquePrecedente from "./CritiquePrecedente.jsx";
import {ajouterCritique, newIdCritique} from "../classes/gestionCatalogueCritique.js";
import {useContext} from "react";
import {DataCritiqueContext} from "./contexts/DataCritiqueContext.jsx";

export default function ListeCritiques(props) {
    const [dataCritique, setDataCritique] = useContext(DataCritiqueContext);

    //Création du format de la date pour affichage correct
    function dateFormat(date) {
        return date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

    /**
     * Fonction pour appeller les fonctions de gestionCatalogueCritique pour créer une critique
     * @param event l'évènement de submit du formulaire
     * @param idOiseau l'id de l'oiseau associé à la critique
     */
    function creerCritique(event, idOiseau) {
        event.preventDefault();
        const formData = new FormData(event.target);
        let idCritique = newIdCritique();
        let formCritique = document.getElementById("critiqueForm");

        const nouvelleCritique = {
            idCritique: idCritique,
            idOiseau: idOiseau,
            note: formData.get("note"),
            temperament: formData.get("temperament"),
            beaute: formData.get("beaute"),
            utilisation: formData.get("utilisation"),
            dateCritique: dateFormat(new Date)
        }

        // Vérifier si les champs sont vides
        if(verifierInfos(nouvelleCritique)){
            setDataCritique(critique=> critique.concat(nouvelleCritique));
            ajouterCritique(nouvelleCritique);
            alert("La critique #" + idCritique + " a été créée");
            formCritique.reset();
        }
        else{
            alert("un ou plusieurs champs sont vides")
        }
    }

    /**
     * Fonction pour vérifier si les champs de la critique sont vides
     * @param critique la critique à vérifier
     * @returns {boolean} si les champs sont vides ou non
     */
    function verifierInfos(critique){
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
                    <div className="popup bg-dark-subtle">
                        <MaCritique
                            id={props.id}
                            categorie={props.categorie}
                            race={props.race}
                            creerCritique={creerCritique}
                        />
                        <div className="  my-4">
                            <div className="row text-start m-4">
                                <div className="col my-2">
                                    <h5 className="text-uppercase display-6 m-3 text-start">Visualiser les critiques</h5>
                                    <hr/>
                                    {dataCritique.filter(critique => critique.idOiseau === props.id).map((critique) => (
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
                        <div className="row px-4">
                            <div className="btn-wrapper text-center d-flex justify-content-start modal-footer">
                                <button className="btn btn-danger btn-lg" onClick={props.toggleModalCritique}>Fermer</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}