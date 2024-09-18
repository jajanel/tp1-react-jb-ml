export default function DescriptionOiseau({estOuvertDescription, toggleModalDescription, srcImage, nom, prix}) {


    return (

        <>
            <div>

                {estOuvertDescription && (<div className="popup">
                    <div className={"card border-0 "}>
                        <h1>Description</h1>
                        <div className={"row"}>
                            <div className={"col-xl-3 col-xxl-3 col-md-6 col-lg-6 align-content-center"}>
                                <img className={"rounded-3"} src={srcImage} alt="..."/>
                            </div>
                            <div className={"col"}>
                                <p>{nom}</p>
                                <p>{prix} $</p>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"btn-wrapper text-center d-flex justify-content-evenly"}>
                                <button className={"btn btn-danger "} data-toggle="modal"
                                        onClick={toggleModalDescription}>Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>)}        </div>
        </>)
}