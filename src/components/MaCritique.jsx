
export default function MaCritique(props) {
    return (<>
        <div className="bg-warning-subtle rounded-3 p-3">
            <form id="critiqueForm" onSubmit={(event) => props.creerCritique(event, props.id)}>

                    <div className="row text-start m-4" >
                        <div className="col col-11">
                            <h5 className="text-uppercase display-6 m-3 text-start">Rédiger ma critique pour: {props.categorie} {props.race} </h5>
                            <hr/>
                            <div className="pb-4">
                                <h4 htmlFor="note" className="form-label ">Note globale:</h4>
                                <input type="range" className=" form-range form-select-lg" name="note" min={0} max={100}/>
                            </div>
                            <div className="pb-4">
                                <h4 className="form-label">Tempérament:</h4>
                                <input type="text" className="form-control form-select-lg" name="temperament"/>
                            </div>
                            <div className="pb-4">
                                <h4 className="form-label">Beauté:</h4>
                                <input type="text" className="form-control form-select-lg" name="beaute"/>
                            </div>
                            <div className="pb-4">
                                <h4 className="form-label">Utilisation:</h4>
                                <input type="text" className="form-control form-select-lg" name="utilisation"/>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="text-center text-uppercase form-select-lg"> ID #{props.id}</div>
                        </div>
                    </div>
                <hr/>
                    <div className="btn-wrapper text-center d-flex justify-content-end ">
                        <button type="submit" className={"btn btn-success  btn-lg m-3"}>Ajouter</button>
                    </div>

            </form>
        </div>
    </>)
}