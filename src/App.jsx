import { useState, useEffect } from 'react'
import { BrowserRouter as Rutas, Routes, Route, Navigate } from 'react-router-dom'

import Menu from './components/Menu/Menu';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailConatainer from './containers/ItemDetailContainer/ItemDetailConatainer';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart/Cart';
import cartera2 from "./assets/img/cartera2.jpg"


// ItemListContainer(nombre)

Swal.fire({
    title: 'Bienvenido a No estoy loca!',
    text: 'Carteras Mochilas bolsos Accesorios',
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })

function App() {    

//    <ItemCount initial={1} stock={10} onAdd={onAdd} />
   
    return (
        <div 
        //    onClick={()=> alert('soy app')} 
           className="border border-3 border-primary"
        >
            <Rutas>
                <Menu />   
                <Routes>
                    <Route index path="/" element={<ItemListContainer />} />
                    <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
                                    
                    <Route path="/detalle/:id" element={<ItemDetailConatainer />} />                
                    <Route path="/cart" element={<Cart />} />               
                    {/* <Route path="/error" element={<Error404 />} />                */}
                    
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
                
            </Rutas>      
        </div>
    )

}


export default App
