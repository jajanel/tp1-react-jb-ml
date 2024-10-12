import {useContext, useState} from "react";
import {DataoiseauContext} from "./contexts/DataOiseauContext.jsx";


export default function ModifierOiseau(props) {
    // Valeur par défaut de l'image à afficher dans le formulaire pour l'ajout de l'oiseau
    const [srcImgForm, setSrcImgForm] = useState(props.srcImage);
    const [dataOiseaux, setDataOiseaux] = useContext(DataoiseauContext);

    function dateFormat(date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }

    /**
     * Fonction qui modifie un oiseau dans le catalogue après avoir vérifié que les champs sont remplis
     * @param event le submit du bouton de modification
     */
    function changerOiseau(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        //Les valeurs du "nouvel oiseau"
        const nouveauOiseau = {
            idOiseau: props.id,
            categorie: formData.get("categorie"),
            race: formData.get("race"),
            prix: formData.get("prix"),
            origine: formData.get("origine"),
            datePublication: props.date,
            srcImage: srcImgForm
        }

        //Appel de vérification des champs
        if(verifierChampsDescription(nouveauOiseau)){
            setDataOiseaux(()=>dataOiseaux.filter((o)=>o.idOiseau !== props.id).concat(nouveauOiseau))
            alert("L'oiseau #" + props.id + " a été modifié");
            props.toggleModalModifDescription();
        }

        else {
            alert("un ou plusieurs champs sont vides");
        }
    }

    /**
     * Fonction qui vérifie si les champs sont remplis
     * @param oiseau les valeurs de l'oiseau à vérifier
     * @returns {boolean} si les champs sont remplis ou non
     */
    function verifierChampsDescription(oiseau){
        let confirme = true;
        if(oiseau.prix === "" || oiseau.race === "" || oiseau.srcImage === "" || oiseau.origine === "Choisir la région d'origine" || oiseau.categorie === "Choisir la catégorie de volaille"){
            confirme = false;
        }
        return confirme;
    }

    /**
     * Fonction qui permet de choisir une image pour l'oiseau
     * @param event l'utilisateur qui choisi une image dans ses fichiers'
     */
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

    return (<>
        <div>
            {props.estOuvertModifDescription && (<div className="popup bg-warning-subtle">
                <form id="oiseauForm" onSubmit={changerOiseau}>
                            <h5 className="text-uppercase display-6 m-3 text-start">Modifier l'oiseau #{props.id}</h5>
                    <hr/>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xl-4 col-xxl-3 col-md-12 col-lg-6 align-content-center">
                                    <div className="ajouterPhoto rounded-3 text-start">
                                        <h4  className="form-label">Choisir votre image</h4>
                                        <img src={srcImgForm} className="card-img image-choisie" alt="image selectionnée par l'utilisateur"/>
                                        <input className="form-control form-select-lg mb-5" id="imageChoisi" name="imageChoisi" type="file" accept="image/*" onChange={handleChoixImage}/>
                                    </div>
                                </div>
                                <div className="col mx-5">
                                    <div className="pb-4 text-start">
                                        <h4  className="form-label">Catégorie</h4>
                                        <select className="form-select form-select-lg" name="categorie">
                                            <option defaultValue="Choisir la catégorie de volaille">Choisir la catégorie de volaille</option>
                                            <option value="poule">Poule</option>
                                            <option value="canard">Canard</option>
                                            <option value="Oie">Oie</option>
                                            <option value="dinde">Dinde</option>
                                        </select>
                                    </div>
                                    <div className="pb-4 text-start">
                                        <h4  className="form-label">Race</h4>
                                        <input defaultValue={props.race} type="text" className="form-control form-select-lg" id="race" name="race"/>
                                    </div>
                                    <div className="pb-4 text-start">
                                        <h4 className="form-label">Prix</h4>
                                        <div className="input-group">
                                            <span className="input-group-text">$</span>
                                            <input type="text" className="form-control form-control-lg"
                                                   defaultValue={props.prix} min={0} max={10000} name="prix"/>
                                        </div>
                                    </div>
                                    <div className="pb-4 text-start">
                                        <h4 className="form-label">Origine</h4>
                                        <select className="form-select form-select-lg " name="origine">
                                            <option defaultValue={props.origine}>Choisir la région d'origine</option>
                                            <option value="afrique">Afrique</option>
                                            <option value="amerique">Amérique</option>
                                            <option value="europe">Europe</option>
                                            <option value="asie">Asie</option>
                                            <option value="oceanie">Océanie</option>
                                        </select>
                                    </div>
                                    <div className="pb-4 text-start">
                                        <h4 className="form-label">Date de publication</h4>
                                        <input disabled value={props.date} type="date" className="form-control form-select-lg" id="datePublication" name="datePublication" />
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        <div className="row">
                            <div className="btn-wrapper text-center d-flex justify-content-evenly modal-footer">
                                <button className="btn btn-danger btn-lg" type="button"
                                        onClick={props.toggleModalModifDescription}>Annuler</button>
                                <button className="btn btn-success btn-lg" type="submit"> Confirmer</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>)}
        </div>
    </>)
}