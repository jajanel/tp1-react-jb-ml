export default function DescriptionOiseau(props) {

// Changer le "disabled" par un context ou redux pour permettre la modification des champs selon le bouton modifier cliqué ou non.
    return (

        <>
            <div>
                {props.estOuvertDescription &&
                    (<div className="popup">
                            <div className="card border-0 ">
                                <div className="card-header bg-white">
                                    <h5 className="card-title text-uppercase">Description</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-4 col-xxl-3 col-md-12 col-lg-6 align-content-center">
                                            <div className="ajouterPhoto rounded-3">
                                                <img src={props.srcImage} className="card-img "
                                                     alt="image selectionnée par l'utilisateur"/>
                                            </div>
                                            <div className={"pb-4 text-start"}>
                                                <label className="form-label">ID</label>
                                                <p className="form-control disabled">{props.id}</p>
                                            </div>

                                        </div>
                                        <div className="col mx-5 text-start">
                                            <div className={"pb-4"}>
                                                <label className="form-label">Catégorie</label>
                                                <select
                                                    className="form-select" disabled>
                                                    <option defaultValue={props.categorie}>{props.categorie}</option>
                                                    <hr/>
                                                    {/*Ici il faut utiliser une .map sur les différentes catégories existante.
                                                     La catégorie en cours ne sera pas en double dans la liste de choix à sélectionner*/}
                                                    <option value="">Poule</option>
                                                    <option value="">Canard</option>
                                                    <option value="">Oie</option>
                                                    <option value="">Dinde</option>
                                                </select>
                                            </div>
                                            <div className="pb-4">
                                                <label htmlFor="race" className="form-label">Race</label>
                                                <select className="form-select" disabled>
                                                    <option defaultValue={props.race}> {props.race}</option>
                                                    {/*Ici il faut utiliser une .map sur les différentes catégories existante.
                                                     La catégorie en cours ne sera pas en double dans la liste de choix à sélectionner*/}
                                                    <option value="">Poule</option>
                                                    <option value="">Canard</option>
                                                    <option value="">Oie</option>
                                                    <option value="">Dinde</option>
                                                </select>
                                            </div>
                                            <div className="pb-4">

                                                <label htmlFor="prix" className="form-label">Prix</label>
                                                <p className="form-control disabled">{props.prix}</p>
                                            </div>
                                            <div className="pb-4">

                                                <label className="form-label">Origine</label>
                                                {/*Ici il faut utiliser une .map sur les différentes catégories existante.
                                                     La catégorie en cours ne sera pas en double dans la liste de choix à sélectionner*/}
                                                <select
                                                    className="form-select" disabled>
                                                    <option value=""  defaultValue={props.origine }>{props.origine}</option>
                                                    <option value="afrique">Afrique</option>
                                                    <option value="amerique">Amérique</option>
                                                    <option value="europe">Europe</option>
                                                    <option value="asie">Asie</option>
                                                    <option value="oceanie">Océanie</option>
                                                </select>
                                            </div>
                                            <div className="pb-4">

                                                <label className="form-label">Date de publication</label>
                                                <br/>
                                                <input disabled type="date" className="form-control disabled" id="datePublication" name="datePublication" value={props.date}/>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="row">
                                    <div
                                        className="btn-wrapper text-center d-flex justify-content-evenly modal-footer">
                                        <button className="btn btn-danger" onClick={props.toggleModalDescription}>Annuler
                                        </button>
                                        <button className="btn btn-success" onClick={props.toggleModalModifierDescription}>Modifier
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