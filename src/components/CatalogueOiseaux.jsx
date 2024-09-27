import AjouterOiseau from "./AjouterOiseau.jsx";
import CarteProduit from "./CarteProduit.jsx";
import {useState} from "react";

export default function CatalogueOiseaux(props) {
    const [estOuvert, setEstOuvert] = useState(false);
    const [dataOiseau, setDataOiseau] = props.dataOiseauState;
    const [dataCritiques, setDataCritiques] = props.dataCritiqueState;
    const [locations, setLocations] = dataOiseau;

    const toggleModal = () => {
        setEstOuvert(!estOuvert);
    };

    function handleTuerOiseau(idOiseau) {

        //Ici tuer oiseau
        console.log("Fonction TuerOiseau appelé pour l'oiseau #" + idOiseau);

        setLocations(oldLocations => oldLocations.filter(
            location => location.id !== Number(event.target.parentNode.children[0].id)
        ));
        setDataOiseau(updatedOiseaux);
        setDataCritiques(updatedCritiques);

    }

    return (
        <>
            <div className={"row"}>
                <button className="btn btn-sm btn-secondary" onClick={toggleModal}>
                    Ajouter un oiseau
                </button>
                <AjouterOiseau estOuvert={estOuvert} toggleModal={toggleModal}/>
            </div>
            <div className="container-fluid">
                <div className="row">
                    {
                        props.oiseauxFiltre.map((oiseau) => (
                            <div className="col-xl-4 col-xxl-3 col-md-6 col-lg-6 align-content-center"
                                 key={oiseau.idOiseau}>
                                <CarteProduit
                                    tuerOiseau={()=>handleTuerOiseau(oiseau.idOiseau)}
                                    id={oiseau.idOiseau}
                                    categorie={oiseau.categorie}
                                    race={oiseau.race}
                                    origine={oiseau.origine}
                                    prix={oiseau.prix}
                                    srcImage={oiseau.srcImage}
                                    datePublication={oiseau.datePublication}
                                    dataCritiques={dataCritiques}
                                    dataOiseau={dataOiseau}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </>

    )

}