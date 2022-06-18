import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {
    /// estado 
    const onAdd = (cant) => {
        console.log(cant)
        // valor
    }

    return (
        <div className="row">
            <div className="col-md-6 mt-5">
                <img src={producto.foto} alt="" className="w-50 m-5" />
            </div>
            <div className="col-md-6 mt-5"> 
                <div className="row mt-5">
                    <h2>nombre: {producto.name}</h2>
                    <h3>categoría: {producto.categoria}</h3>
                    <h4>precio: {producto.price}</h4>
                </div>               
                <div className="row">
                    <div className="col">
                        {/* ternario */}
                        <ItemCount  initial={1} stock={10} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail