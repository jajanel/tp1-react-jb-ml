export default function DescriptionOiseau({estOuvertDescription, toggleModalDescription, srcImage}) {


    return (

        <>
            <div>

                {estOuvertDescription && (<div className="popup">
                    <div className={"card border-0 "}>
                        <h1>Description</h1>
                        <div className={"row"}>

                        </div>
                        <p>prix</p>
                        <p>nom</p>
                        <img src={srcImage} alt="..."/>
                        <div className={"row"}>
                        <div className={"btn-wrapper text-center d-flex justify-content-evenly"}>
                                <button className={"btn btn-danger "} data-toggle="modal"
                                        onClick={toggleModalDescription}>Annuler
                                </button>
                                {/*Le bouton "Ajouter" doit trigger l'action de sérialisation qui ajoute l'oiso au "JSON" */}
                                <button className={"btn btn-success"} data-toggle="modal"
                                        onClick={toggleModalDescription}>Ajouter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>)}        </div>
        </>)
}