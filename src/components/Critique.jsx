export default function Critique(props){
    return(
        <>
            <div className="bg-light rounded-3 p-2 m-2">

                <div className="pb-4">
                    <label className="form-label">ID</label>
                    <input type="" className="form-control" id="note" disabled/>
                </div>
                <div className="pb-4">
                    <label className="form-label">Note globale:</label>
                    <input type="number" className="form-control" id="note" disabled/>
                </div>
                <div className="pb-4">

                    <label className="form-label">Tempérament:</label>
                    <input
                        type="text" className="form-control" id="temperament" disabled/>
                </div>
                <div className="pb-4">
                    <label className="form-label">Beauté:</label>
                    <input type="text" className="form-control" id="beaute" disabled/>
                </div>
                <div className="pb-4">

                    <label className="form-label">Utilisation:</label> <input
                    type="text" className="form-control" id="utilisation" disabled/>
                </div>
            </div>
        </>
    );
}