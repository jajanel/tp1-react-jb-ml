import {useContext, useState} from "react";
import { ajouterOiseau, newIdOiseau } from "../classes/gestionCatalogueOiseaux.js";
import {DataoiseauContext} from "./contexts/DataOiseauContext.jsx";

export default function AjouterOiseau(props) {
    // Valeur par défaut de l'image à afficher dans le formulaire pour l'ajout de l'oiseau
    const [srcImgForm, setSrcImgForm] = useState("https://via.placeholder.com/300");
    const [dataOiseaux, setDataOiseaux] = useContext(DataoiseauContext);
    let bruitOiseau = new Audio("././assets/sons/chicken_1.mp3");

    function dateFormat(date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }

    function creerOiseau(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        let idOiseau = newIdOiseau();

        const nouveauOiseau = {
            idOiseau: idOiseau,
            categorie: formData.get("categorie"),
            race: formData.get("race"),
            prix: formData.get("prix"),
            origine: formData.get("origine"),
            datePublication: dateFormat(new Date),
            srcImage: srcImgForm
        }

        if(verifierChampsAjouter(nouveauOiseau)){
            setDataOiseaux(oiseaux=> oiseaux.concat(nouveauOiseau))
            ajouterOiseau(nouveauOiseau);
            alert("L'oiseau #" + idOiseau + " a été créée");
            handleRemettrePlaceholder();
            props.toggleModal();
        }

        else {
            alert("un ou plusieurs champs sont vides");
        }
    }

    const jouerBruit = () => {
        bruitOiseau.play();
    }

    function verifierChampsAjouter(oiseau){
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
        setSrcImgForm("https://via.placeholder.com/300");
        props.toggleModal();
    }

    return (<>
        <div>
            {props.estOuvert && (<div className="popup bg-dark-subtle">
                <form id="oiseauForm" onSubmit={creerOiseau}>
                            <h5 className="text-uppercase display-6 m-3">Ajouter un oiseau</h5>
                    <hr/>
                        <div className="card-body">
                            <div className="row mb-4">
                                <div className="col-xl-4 col-xxl-3 col-md-12 col-lg-6 align-content-center">
                                    <div className="ajouterPhoto rounded-3">
                                        <h4 htmlFor="formFile" className="form-label form-select-lg">Choisir votre image</h4>
                                        <img src={srcImgForm} className="card-img image-choisie"
                                             alt="image selectionnée par l'utilisateur"/>
                                        <input className="form-control form-select-lg mb-5" id="imageChoisi"
                                               name="imageChoisi" type="file" accept="image/*"
                                               onChange={handleChoixImage}/>
                                    </div>
                                </div>
                                <div className="col mx-5">
                                    <div className="pb-4">
                                        <h4 htmlFor="categorie" className="form-label">Catégorie</h4>
                                        <select className="form-select form-select-lg" name="categorie">
                                            <option defaultValue="Choisir la catégorie de volaille">Choisir la catégorie de volaille</option>
                                            <option value="poule">Poule</option>
                                            <option value="canard">Canard</option>
                                            <option value="Oie">Oie</option>
                                            <option value="dinde">Dinde</option>
                                        </select>
                                    </div>
                                    <div className="pb-4">
                                        <h4 htmlFor="race" className="form-label">Race</h4>
                                        <input type="text" className="form-control form-select-lg" id="race" name="race"/>
                                    </div>
                                    <div className="pb-4">
                                        <h4 htmlFor="prix" className="form-label">Prix</h4>
                                        <input type="number" className="form-control form-select-lg" id="prix" name="prix"  min={0} max={10000}/>
                                    </div>
                                    <div className="pb-4">
                                        <h4 className="form-label">Origine</h4>
                                        <select className="form-select form-select-lg" name="origine">
                                            <option defaultValue="Choisir la région d'origine">Choisir la région d'origine</option>
                                            <option value="afrique">Afrique</option>
                                            <option value="amerique">Amérique</option>
                                            <option value="europe">Europe</option>
                                            <option value="asie">Asie</option>
                                            <option value="oceanie">Océanie</option>
                                        </select>
                                    </div>
                                    <div className="pb-4">
                                        <h4 htmlFor="datePublication" className="form-label">Date de publication</h4>
                                        <input disabled type="date" className="form-control form-select-lg" id="datePublication" name="datePublication" />
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <div className="row">
                            <div className="btn-wrapper text-center d-flex justify-content-evenly modal-footer">
                                <button className="btn btn-danger" type="button"
                                        onClick={handleRemettrePlaceholder}>Annuler</button>
                                <button className="btn btn-success" type="submit"> Ajouter</button>
                            </div>
                    </div>
                </form>
            </div>)}
        </div>
    </>)
}