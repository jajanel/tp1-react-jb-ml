import AjouterOiseau from "./AjouterOiseau.jsx";
import CarteProduit from "./CarteProduit.jsx";
import {useContext, useState} from "react";
import {DataoiseauContext} from "./contexts/DataOiseauContext.jsx";
import CatalogueStatistiques from "./CatalogueStatistiques.jsx";

export default function CatalogueOiseaux(props) {
    const [estOuvert, setEstOuvert] = useState(false);
    //const [dataOiseau, setDataOiseau] = useContext(DataoiseauContext);
   // const [dataCritiques, setDataCritiques] = useContext(DataoiseauContext);
    const [dataOiseau, setDataOiseau] = props.dataOiseauState;
    const [dataCritiques, setDataCritiques] = props.dataCritiqueState;
    const [estOuvertStatistiques,setEstOuvertStatistiques] = props.ouvertStatistiquesState;

    const toggleModalAjouterOiseau = () => {
        setEstOuvert(!estOuvert);
    };



    return (<>
        {/*afficher stats*/}
        {estOuvertStatistiques&&<CatalogueStatistiques
            dataCritiqueState={props.dataCritiqueState}
            oiseauxFiltre={props.oiseauxFiltre}
            estOuvertStatistiques={estOuvertStatistiques}
            toggleModalStatistiques={()=>setEstOuvertStatistiques(estOuvertStatistiques=>!estOuvertStatistiques)}
        />}

        <>
            <div className={"row"}>
                <button className="btn btn-sm btn-secondary" onClick={toggleModalAjouterOiseau}>
                    Ajouter un oiseau
                </button>
                <AjouterOiseau
                    estOuvert={estOuvert}
                    toggleModal={toggleModalAjouterOiseau}
                    dataCritiqueState={[dataOiseau, setDataOiseau]}
                    dataOiseauState={[dataCritiques, setDataCritiques]}

                />
            </div>
            <div className="container-fluid">
                <div className="row">
                    {props.oiseauxFiltre.map((oiseau) => (
                        <div className="col-xl-4 col-xxl-3 col-md-6 col-lg-6 align-content-center" key={oiseau.idOiseau}>
                            <CarteProduit
                                key={oiseau.idOiseau}
                                tuerOiseau={props.tuerOiseau}
                                id={oiseau.idOiseau}
                                categorie={oiseau.categorie}
                                race={oiseau.race}
                                origine={oiseau.origine}
                                prix={oiseau.prix}
                                srcImage={oiseau.srcImage}
                                datePublication={oiseau.datePublication}
                                dataCritiques={dataCritiques}
                                setDataCritiques={setDataCritiques}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    </>);
}