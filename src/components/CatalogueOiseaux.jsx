import AjouterOiseau from "./AjouterOiseau.jsx";
import CarteProduit from "./CarteProduit.jsx";
import {useState} from "react";
import {dataOiseau} from "../assets/oiseaux.js";

export default function CatalogueOiseaux({oiseauxFiltre}) {
    const [estOuvert, setEstOuvert] = useState(false);

    const toggleModal = () => {
        setEstOuvert(!estOuvert);
    };

    return(
        <>
            <div className={"row"}>
                <button className={"btn btn-sm btn-secondary"} onClick={toggleModal}>
                    Ajouter un oiseau
                </button>
                <AjouterOiseau estOuvert={estOuvert} toggleModal={toggleModal}/>
            </div>
            <div className="container-fluid">
                <div className="row">
                    {oiseauxFiltre.map((oiseau) => (
                        <div className="col-xl-4 col-xxl-3 col-md-6 col-lg-6 align-content-center"
                             key={oiseau.idOiseau}>
                            <CarteProduit
                                id={oiseau.idOiseau}
                                categorie={oiseau.categorie}
                                race={oiseau.race}
                                origine={oiseau.origine}
                                prix={oiseau.prix}
                                srcImage={oiseau.srcImage}
                                datePublication={oiseau.datePublication}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>

    )

}