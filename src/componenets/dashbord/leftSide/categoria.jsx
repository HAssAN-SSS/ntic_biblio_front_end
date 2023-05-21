import { useState } from 'react'
import './categoria.css'
import Sub_categoria from './sub_categoria'

export default function Kategoria(props) {
    console.log(props.subCategorias)
    let [subCategorias,setSubCaterogias] = useState([])
    let [showSub,setShowSub] = useState(false)
    let [up_down,set_up_down] = useState('down')

    function sub_categoriesToggel() {
        if(!showSub) {
            
            let lista = props.subCategorias.map((elt,index) => {
                    return(
        
                        <Sub_categoria  sub_categorie={elt} key={index} />
                    )
                }
            )
          setSubCaterogias(lista) 
          setShowSub(true)
          set_up_down('up')

        }else {
          setShowSub(false)
          set_up_down('down')


        }

    }

    return(

    <div className='categoria' >
        <div className='self-categoria' onClick={sub_categoriesToggel}>

        <span >{props.llave}</span> 
        <span className='down-up'>

            <img src={`/img/${up_down}.png`} alt="down" width="100%" />
            
            

        </span>
        </div>

        <div className='sub_categories '>
            
            {showSub ? subCategorias : ''}

            {showSub ? <div className='more-toggel'>
                more<span className='down-up'><img src={`/img/${'down'}.png`} alt="down" width="100%" /></span>
            </div> : ''}

        </div>
    </div>
        )
    
}