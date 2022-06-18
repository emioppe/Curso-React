import {useState, useEffect} from 'react'
// import './input.css'


export const Input = () => {
    

    const inputHandle = (event)=>{
        const vocales = ['a', 'e', 'i', 'o', 'u']    
        if (vocales.includes(event.key)) {
            // event.stopPropagation();            
            event.preventDefault() 
            console.log(event.key)       
        }   
    }

    return (
        <div className="box" >
            <div className="border border-1 border-warning" >
                <input 
                    className="m-5" 
                    onKeyDown={ inputHandle } 
                    // onClick={ inputHandle } 
                    type="text" 
                    name="nombre" 
                    id="i"
                />
            </div>
        </div>
    )
}
