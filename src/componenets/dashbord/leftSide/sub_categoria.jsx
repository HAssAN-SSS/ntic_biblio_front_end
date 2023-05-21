import { useState } from 'react'
import './sub_categoria.css'

export default function Sub_categoria(props) {
    let [amarillo,setAmarillo] = useState('')
    
    function sub_categorieClick() {
        console.log('click')
        if(amarillo === '') {
            setAmarillo('amarillo')
        }
        else {
            setAmarillo('')
        }
    }


    return(
        <span className={`sub_categorie ${amarillo} `} onClick={sub_categorieClick} >

            {props.sub_categorie}

             <span>
             {amarillo === 'amarillo' ? ' -' : ' +'}
            </span>
            
        </span>
    )
}