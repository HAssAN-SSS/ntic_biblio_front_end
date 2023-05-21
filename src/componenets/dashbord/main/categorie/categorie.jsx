import Book from '../book/book'
import './categorie.css'

export default function Categorie() {

    return(

        <div className='categorie'>

            <div className='categorie-bar'>
                
                <span className='left-hr'>
                    ________
                </span >
                <span className='categorie-item'>
                    categorie

                </span>

                <span className='right-hr'>
                    ___________________________________________________________________________________________________________
                </span>

            </div>

            <div className='book-list'>
                <Book />
                <Book />
                <Book />
                


            </div>

        </div>
    )
}