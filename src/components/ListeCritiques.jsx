import MaCritique from "./MaCritique.jsx";
import {dataCritiques} from "../assets/critiques.js";

export default function ListeCritiques(props) {

    return (<>
        <div>
            {props.estOuvertCritique && (<div className="popup  ">
                    {/*Header avec appel du component ma critique*/}

                    <MaCritique
                        id={props.id}
                        categorie={props.categorie}
                        race={props.race}
                    />

                    {/*Liste de toutes les critiques*/}
                    <div className="card border-0 my-4">


                        <div className="row text-start m-4">
                            <div className="col">
                                <h5 className="text-uppercase card-title">Visualiser les critiques</h5>
                                <hr/>
                                {/*Ici il faut utiliser une .map sur les différentes critiques existantes.*/}



                                <hr/>
                            </div>

                        </div>


                    </div>

                    {/*Footer avec bouton pour annuler*/}
                    <div className="row">
                        <div className="btn-wrapper text-center d-flex justify-content-start modal-footer">
                            <button className="btn btn-danger " data-toggle="modal"
                                    onClick={props.toggleModalCritique}>Fermer
                            </button>
                        </div>
                    </div>


                </div>)}
        </div>
    </>)

}