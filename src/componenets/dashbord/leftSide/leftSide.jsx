import './leftSide.css';
import { useState } from 'react';
import Kategoria from './categoria';

export default function LeftSide() {
    let [categories,setCategories] = useState([])
    let [show_categories,set_show_Categories] = useState(false)
    let [yellow,setYellow] = useState('')


    let list_categorie= {
        all : {
            'categorie1' : ['sub_categorie1','sub_categorie2','sub_categorie3'],
            'categorie2' : ['sub_categorie1','sub_categorie2','sub_categorie3'],
            'categorie3' : ['sub_categorie1','sub_categorie2','sub_categorie3']

        }
    }
    // !--------------------------------categoria componenet------------------------------
    // !--------------------------------categoria componenet------------------------------
    
    function CategoriasToggel() {

        
        if(!show_categories) {

            set_show_Categories(true)
            setCategories([])

            for(let key in list_categorie.all) {
                console.log(list_categorie.all[key])
                setCategories(prv => [
                    ...prv,
                    <Kategoria down_up={'down' } llave={key} subCategorias={list_categorie.all[key]} />
                    
                    
                ])
                setYellow('yellow')
            }

        }else {

            set_show_Categories(false)
            setCategories([])
            setYellow('')

            

        }

    }

    return (
        <div className='leftSide'>
            <h2>Filter</h2>
            <hr />
            <br />
            <span className={`all sub_categorie ${yellow}`} onClick={CategoriasToggel}>
                All <span className="plus-minus">{!show_categories ? '+' : '-'}</span>
            </span>
            <div>

                {!show_categories ? '' :  categories}

                {show_categories ? <span className='clear_filter'>

                    Clear Filter

                </span> : ''}
                
                
            </div>
                
        </div>
    );
}
