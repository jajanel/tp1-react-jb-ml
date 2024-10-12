import ModifierOiseau from "./ModifierOiseau.jsx";
import {useState} from "react";

export default function DescriptionOiseau(props) {
    const [estOuvertModifDescription, setEstOuvertModifDescription] = useState(false);

    const toggleModalModifDescription = () => {
        setEstOuvertModifDescription(!estOuvertModifDescription);
    };

    return (

        <>
            <div>
                {props.estOuvertDescription &&
                    (<div className="popup bg-dark-subtle">

                                {/*Afficher soit modifier description ou description comme titre dépendamment du state*/}
                                {props.estOuvertModifDescription ?
                                    <h5 className="text-uppercase display-6 m-3 text-start">Modifier description</h5> :
                                    <h5 className="text-uppercase display-6 m-3 text-start">Description</h5>
                                }
                            <hr/>
                            <div className="card-body ">
                                <div className="row">
                                    <div className="col-xl-4 col-xxl-3 col-md-12 col-lg-6 align-content-center">
                                        <div className="ajouterPhoto rounded-3">
                                            <h4 className="form-label"></h4>
                                            <img src={props.srcImage} className="card-img "
                                                 alt="image selectionnée par l'utilisateur"/>
                                        </div>
                                        <div className="pb-4 text-start">
                                            <div className="input-group">
                                                <span className="input-group-text">ID</span>
                                                <input type="text" className="form-control form-control-lg"
                                                       defaultValue={props.id} disabled/></div>
                                        </div>

                                    </div>
                                    <div className="col mx-5 text-start">
                                        <div className="pb-4">
                                            <h4 className="form-label">Catégorie</h4>
                                            <input type="text" className="form-control form-control-lg"
                                                   defaultValue={props.categorie} disabled/></div>
                                        <div className="pb-4">
                                            <h4 className="form-label">Race</h4>
                                            <input value={props.race} type="text"
                                                   className="form-control form-control-lg" id="race"
                                                   disabled/>
                                        </div>
                                        <div className="pb-4 ">
                                            <h4 className="form-label">Prix</h4>
                                            <div className="input-group">
                                                <span className="input-group-text">$</span>
                                                <input type="text" className="form-control form-control-lg"
                                                       defaultValue={props.prix} disabled/>
                                            </div>
                                        </div>
                                        <div className="pb-4 ">
                                            <h4 className="form-label">Origine</h4>
                                            <input type="text" className="form-control form-control-lg"
                                                   defaultValue={props.origine} disabled/>


                                        </div>
                                        <div className="pb-4">
                                            <h4 className="form-label">Date de publication</h4>
                                            <input disabled type="date"
                                                   className="form-control disabled form-control-lg"
                                                   id="datePublication" name="datePublication" value={props.date}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div
                                    className="btn-wrapper text-center d-flex justify-content-evenly modal-footer">
                                    <button className="btn btn-danger  btn-lg" onClick={props.toggleModalDescription}>Annuler
                                    </button>
                                    {/*Afficher soit Confirmer ou Modifier comme titre dépendamment du state*/}
                                    {props.estOuvertModifDescription ?
                                        <button className="btn btn-success  btn-lg"
                                                onClick={toggleModalModifDescription}>Confirmer</button> :
                                        <button className="btn btn-success  btn-lg"
                                                onClick={toggleModalModifDescription}>Modifier</button>}
                                </div>
                            </div>
                        </div>
                    )}
            </div>
            <ModifierOiseau
                id={props.id}
                categorie={props.categorie}
                race={props.race}
                prix={props.prix}
                origine={props.origine}
                date={props.date}
                srcImage={props.srcImage}
                tuerOiseau={props.tuerOiseau}
                toggleModalModifDescription={toggleModalModifDescription}
                estOuvertModifDescription={estOuvertModifDescription}

            />
        </>
    )
}