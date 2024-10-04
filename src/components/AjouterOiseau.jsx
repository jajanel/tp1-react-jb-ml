import { useState } from "react";
import { getOiseaux, ajouterOiseau } from "../classes/gestionCatalogueOiseaux.js";

export default function AjouterOiseau(props) {
    // Valeur par défaut de l'image à afficher dans le formulaire pour l'ajout de l'oiseau
    const [srcImgForm, setSrcImgForm] = useState("https://via.placeholder.com/300");

    function dateFormat(date) {
        return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

    function creerOiseau(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        let idOiseau = getOiseaux().length + 1;

        const nouveauOiseau = {
            idOiseau: idOiseau,
            categorie: formData.get("categorie"),
            race: formData.get("race"),
            prix: formData.get("prix"),
            origine: formData.get("origine"),
            datePublication: dateFormat(new Date),
            srcImage: formData.get("imageChoisi").name
        }

        ajouterOiseau(nouveauOiseau);
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

    return (
        <>
            <div>
                {props.estOuvert && (
                    <div className="popup">
                        <form id="oiseauForm" onSubmit={creerOiseau}>
                            <div className="card border-0">
                                <div className="card-header bg-white">
                                    <h5 className="card-title text-uppercase">Ajouter un oiseau</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-4 col-xxl-3 col-md-12 col-lg-6 align-content-center">
                                            <div className="ajouterPhoto rounded-3">
                                                <label htmlFor="formFile" className="form-label">Choisir votre image</label>
                                                <img src={srcImgForm} className="card-img image-choisie" alt="image selectionnée par l'utilisateur"  />
                                                <input className="form-control form-control mb-5" id="imageChoisi" name="imageChoisi" type="file" accept="image/*" onChange={handleChoixImage} />
                                            </div>
                                        </div>
                                        <div className="col mx-5">
                                            <div className="pb-4">
                                                <label htmlFor="categorie" className="form-label">Catégorie</label>
                                                <select className="form-select" name="categorie">
                                                    <option defaultValue="Choisir la catégorie de volaille" value="" >Choisir la catégorie de volaille</option>
                                                    <option value="poule">Poule</option>
                                                    <option value="canard">Canard</option>
                                                    <option value="Oie">Oie</option>
                                                    <option value="dinde">Dinde</option>
                                                </select>
                                            </div>
                                            <div className="pb-4">
                                                <label htmlFor="race" className="form-label">Race</label>
                                                <input type="text" className="form-control" id="race" name="race" />
                                            </div>
                                            <div className="pb-4">
                                                <label htmlFor="prix" className="form-label">Prix</label>
                                                <input type="number" className="form-control" id="prix" name="prix" />
                                            </div>
                                            <div className="pb-4">
                                                <label htmlFor="origine" className="form-label">Origine</label>
                                                <select className="form-select" name="origine">
                                                    <option defaultValue="Choisir la région d'origine">Choisir la région d'origine</option>
                                                    <option value="afrique">Afrique</option>
                                                    <option value="amerique">Amérique</option>
                                                    <option value="europe">Europe</option>
                                                    <option value="asie">Asie</option>
                                                    <option value="oceanie">Océanie</option>
                                                </select>
                                            </div>
                                            <div className="pb-4">
                                                <label htmlFor="datePublication" className="form-label">Date de publication</label>
                                                <br />
                                                <input disabled type="date" className="form-control" id="datePublication" name="datePublication" value="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="btn-wrapper text-center d-flex justify-content-evenly modal-footer">
                                        <button className="btn btn-danger" type="button" onClick={handleRemettrePlaceholder}>Annuler</button>
                                        <button className="btn btn-success" type="submit"> Ajouter</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    )
}