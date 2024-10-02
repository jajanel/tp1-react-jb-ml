import Statistique from "./Statistique.jsx";
import {getNotes} from "../classes/gestionCatalogueCritique.js";

export default function CatalogueStatistiques(props) {

    function moyenne(categorie){

        let avg = 0;

        console.log(getNotes());


        return avg;
    }

    return (
        <>
            <div>
                {
                    props.estOuvertStatistiques &&
                    (<div className="popup">
                            <div className="card border-0 ">
                                <div className="row">
                                    <h1 className="my-3 card-title">Statistiques</h1>
                                    <hr/>
                                    <div>
                                        <ul>
                                            <li>Tous: {moyenne("tous")}/100</li>
                                            <li>Poules: {moyenne("poule")}/100</li>
                                            <li>Canards: {moyenne("canard")}/100</li>
                                            <li>Oies: {moyenne("oie")}/100</li>
                                            <li>Dindes: {moyenne("dinde")}/100</li>
                                        </ul>
                                    </div>
                                    <hr/>
                                    <Statistique/>
                                    <hr/>
                                </div>
                                <div className="row">
                                    <div className="btn-wrapper text-center d-flex justify-content-evenly modal-footer">
                                        <button className="btn btn-dark "
                                                onClick={() => props.toggleModalStatistiques("tous")}>Fermer
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