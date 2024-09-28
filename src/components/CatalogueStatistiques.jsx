import Statistique from "./Statistique.jsx";

export default function CatalogueStatistiques(props) {

    const noteTous = 0;
    /*
    const notePoules;
    const noteOies;
    const noteCanards;
    const noteDindes;
    */

    /*
    function moyenne(){
        let nbNotes = 0;
        let note = 0;
        props.dataCritiqueState.map((critique) =>(
            note += critique.note;
            nbNotes++;
        ))

        return note / nbNotes;
    }
*/
    return (
        <>
            <div>
                {
                    props.estOuvertStatistiques &&
                    (<div className="popup">
                            <div className="card border-0 ">
                                <div className="row">
                                    <h1 className="my-3 card-title">Statistiques</h1>
                                    <hr/>
                                    <div>
                                        <ul>
                                            <li>Tous: {noteTous}/100</li>
                                            <li>Poules: /100</li>
                                            <li>Canards: /100</li>
                                            <li>Oies: /100</li>
                                            <li>Dindes: /100</li>
                                        </ul>
                                    </div>
                                    <hr/>
                                    <Statistique/>
                                    <hr/>
                                </div>
                                <div className="row">
                                    <div className="btn-wrapper text-center d-flex justify-content-evenly modal-footer">
                                        <button className="btn btn-dark " data-toggle="modal"
                                                onClick={() => props.toggleModalStatistiques("tous")}>Fermer
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