import Book_info from '../../../book_info/book_info'
import './book.css'
import { Link } from 'react-router-dom'

export default function Book() {

    return(
        <div className='book'>

            <div className='book-img'>
                <Link to={'/booke_info'}>
                    <img src="./img/book_img.jpg" alt="" srcset="" width={'100%'} height={'100%'}/>
                </Link>
            </div>

            <div className='book-info'>

                <h2>Book title</h2>
                <div className='auther'>
                    auther name
                </div>

                <div className='pages'>
                    354 pages
                </div>

                <div className='disponible'>
                    Disponible
                </div>

            </div>

        </div>
    )
}