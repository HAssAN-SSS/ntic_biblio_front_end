import Categorie from './categorie/categorie'
import './main.css'
import { useState } from 'react'

export default function Main(props) {
    
    return(
        <div className='main' >
            <Categorie />
            <Categorie />
            <Categorie />
            <Categorie />
            <Categorie />

        </div>
    )
}