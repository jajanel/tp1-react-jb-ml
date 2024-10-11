import {useContext, useState} from "react";
import {ajouterOiseau, getOiseaux, modifierOiseau} from "../classes/gestionCatalogueOiseaux.js";
import {DataoiseauContext} from "./contexts/DataOiseauContext.jsx";
import Oiseau from "../classes/Oiseau.js";

export default function ModifierOiseau(props) {
    // Valeur par défaut de l'image à afficher dans le formulaire pour l'ajout de l'oiseau
    const [srcImgForm, setSrcImgForm] = useState(props.srcImage);
    const [dataOiseaux, setDataOiseaux] = useContext(DataoiseauContext);

    function dateFormat(date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }

    function changerOiseau(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const nouveauOiseau = {
            idOiseau: props.id,
            categorie: formData.get("categorie"),
            race: formData.get("race"),
            prix: formData.get("prix"),
            origine: formData.get("origine"),
            datePublication: props.date,
            srcImage: srcImgForm
        }

        if(verrifierInfos(nouveauOiseau)){
            setDataOiseaux(oiseaux=> oiseaux.concat(nouveauOiseau))
            props.tuerOiseau(props.id);
            ajouterOiseau(nouveauOiseau);
            alert("L'oiseau #" + props.id + " a été modifié");
            props.toggleModalModifDescription();
        }

        else {
            alert("un ou plusieurs champs sont vides");
        }
    }

    function verrifierInfos(oiseau){
        let confirme = true;

        if(oiseau.prix === "" || oiseau.race === "" || oiseau.srcImage === "" || oiseau.origine === "Choisir la région d'origine" || oiseau.categorie === "Choisir la catégorie de volaille"){
            confirme = false;
        }

        return confirme;
    }

    function handleChoixImage(event) {
        const fichierChoisi = event.target.files[0];
        if (fichierChoisi) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                setSrcImgForm(e.target.result);
            };
            fileReader.readAsDataURL(fichierChoisi);
        }
    }

    function handleRemettrePlaceholder() {
        setSrcImgForm(props.srcImage);
        props.toggleModal();
    }

    return (<>
        <div>
            {props.estOuvertModifDescription && (<div className="popup">
                <form id="oiseauForm" onSubmit={changerOiseau}>
                    <div className="card border-0">
                        <div className="card-header bg-white">
                            <h5 className="card-title text-uppercase">Modifier l'oiseau #{props.id}</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xl-4 col-xxl-3 col-md-12 col-lg-6 align-content-center">
                                    <div className="ajouterPhoto rounded-3">
                                        <label htmlFor="formFile" className="form-label">Choisir votre
                                            image</label>
                                        <img src={srcImgForm} className="card-img image-choisie"
                                             alt="image selectionnée par l'utilisateur"/>
                                        <input className="form-control form-control mb-5" id="imageChoisi"
                                               name="imageChoisi" type="file" accept="image/*"
                                               onChange={handleChoixImage}/>
                                    </div>
                                </div>
                                <div className="col mx-5">
                                    <div className="pb-4">
                                        <label htmlFor="categorie" className="form-label">Catégorie</label>
                                        <select className="form-select" name="categorie">
                                            <option defaultValue="Choisir la catégorie de volaille">Choisir la catégorie de volaille</option>
                                            <option value="poule">Poule</option>
                                            <option value="canard">Canard</option>
                                            <option value="Oie">Oie</option>
                                            <option value="dinde">Dinde</option>
                                        </select>
                                    </div>
                                    <div className="pb-4">
                                        <label htmlFor="race" className="form-label">Race</label>
                                        <input defaultValue={props.race} type="text" className="form-control" id="race" name="race"/>
                                    </div>
                                    <div className="pb-4">
                                        <label htmlFor="prix" className="form-label">Prix</label>
                                        <input defaultValue={props.prix} type="number" className="form-control" id="prix" name="prix"/>
                                    </div>
                                    <div className="pb-4">
                                        <label htmlFor="origine" className="form-label">Origine</label>
                                        <select className="form-select" name="origine">
                                            <option defaultValue={props.origine}>Choisir la région d'origine</option>
                                            <option value="afrique">Afrique</option>
                                            <option value="amerique">Amérique</option>
                                            <option value="europe">Europe</option>
                                            <option value="asie">Asie</option>
                                            <option value="oceanie">Océanie</option>
                                        </select>
                                    </div>
                                    <div className="pb-4">
                                        <label htmlFor="datePublication" className="form-label">Date de
                                            publication</label>
                                        <br/>
                                        <input disabled value={props.date} type="date" className="form-control" id="datePublication" name="datePublication" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="btn-wrapper text-center d-flex justify-content-evenly modal-footer">
                                <button className="btn btn-danger" type="button"
                                        onClick={props.toggleModalModifDescription}>Annuler
                                </button>
                                <button className="btn btn-success" type="submit"> Confirmer
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>)}
        </div>
    </>)
}