import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"
import Caso1 from "../../clases/clase9/Caso1"
import Caso2 from "../../clases/clase9/Caso2"
import { Input } from "../../clases/clase9/Input"
import Intercambiabilidad from "../../clases/clase9/Intercambiabilidad"

import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getFetchOne } from "../../helpers/getFetch"

const ItemDetailConatainer = () => {
    const [producto, setProducto] = useState({})

    const { id } = useParams()

    console.log(id)

    useEffect(() => {
        getFetchOne()
            .then((resp) => setProducto(resp))
            .catch(err => console.log(err))            
    }, [])

    
    
    return (
        <div className="border border-1 border-danger">
            <ItemDetail producto={producto} />
            {/* <Input /> */}
            <Intercambiabilidad />
            {/* <Caso1 /> */}
            {/* <Caso2 /> */}
        </div>
    )
}
export default ItemDetailConatainer