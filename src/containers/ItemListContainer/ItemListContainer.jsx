import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { getFetch } from "../../helpers/getFetch";
import Swal from "sweetalert2"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true) 
    
    const { categoriaId } = useParams()

    console.log(categoriaId)
   
    useEffect(()=>{
        if (categoriaId) {
            getFetch()// llamada a la api
            .then((resp)=> {
                    setProductos(resp.filter(producto => producto.categoria === categoriaId ))
                    setLoading(false)
            })
            .catch(err => console.log(err))           
        } else {
            getFetch()// llamada a la api
            .then( (resp)=> setProductos(resp) )
            .catch(err => console.log(err)) 
            .finally(()=> setLoading(false))           
        }
        
        // .finally(()=> )
    }, [categoriaId])

    
   
    return (
        <div>
            { loading ? 
            
                <h1>Cargando...  </h1> 
            :   
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                      <ItemList productos={productos} />                   
                </div>             
            }
        </div>
    )
}






export default ItemListContainer
















        // <div            
        //     className='col-md-4 p-1'                                                
        // >                        
        //     <Link to={`/detalle/${prod.id}`}>
        //         <div className="card w-100 mt-5" >
        //             <div className="card-header">
        //                 {`${prod.name} - ${prod.categoria}`}
        //             </div>
        //             <div className="card-body">
        //                 <img src={prod.foto} alt='' className='w-50' />
        //                 {prod.price}                                                            
        //             </div>
        //             <div className="card-footer">  
        //                 <button className="btn btn-outline-primary btn-block">
        //                     detalle del producto
        //                 </button>                
        //             </div>
        //         </div>
        //     </Link>                                                                                
        // </div>
