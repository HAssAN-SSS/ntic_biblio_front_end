import { Link } from 'react-router-dom'
import Navbar from '../dashbord/navbar/navbar'
import Bckagrounde_div from './bckagrounde_div'
import './book_info.css'

export default function Book_info() {

    return(
        <div className='book_info'>

            <Navbar className={'navbar'} />
            <Bckagrounde_div className={'Bckagrounde_div'} />
    <div className='book_data'>

{/* ---------------------------------------------left-------------------------------------------- */}
            <div className='left'>
                <div className='book-img'>
                  <img src="/img/book_img.jpg" alt="" srcset="" width={'100%'} />
                </div>
            <Link className='reserver_maintenant' to={'/reserver'}>
                
                Reserver Maintenant
                
            </Link>

                <div className='ajouter'>
                    <span>Ajouter au </span>
                    <span className='cart-icon'>
                       <img src="/img/carticon.png" alt="" srcset="" width={'10%'}/>
                    </span>

                </div>

            </div>
{/* ---------------------------------------------left-------------------------------------------- */}


            <div className='right'>
                <div className='titile_book'>
                Front-End Developer Handbook
                </div>

                <div className='book_auther'>
                By : Cody Lindley
                </div>
{/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^gride_data^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
                <div className='grid_data'>
                    <div className='data_row'>
                        <div>ISBN</div>
                        <div className='seconde_data'>8374693820934</div>
                    </div>
                    <hr />

                    <div className='data_row'>
                        <div>Auteur</div>
                        <div className='seconde_data'>Cody Lindley</div>
                    </div>
                    <hr />

                    <div className='data_row'>
                        <div>Libéré</div>
                        <div className='seconde_data'>2019</div>
                    </div>
                    <hr />

                    <div className='data_row'>
                        <div>Catégorie</div>
                        <div className='seconde_data'>Development/Front-End</div>
                    </div>
                    <hr />

                    <div className='data_row'>
                        <div>Nombre des Pages</div>
                        <div className='seconde_data'>255</div>
                    </div>
                    <hr />

                    <div className='data_row'>
                        <div>Disponibilité</div>
                        <div className='Disponible seconde_data'>
                            <button className='Disponible-btn'>Disponible</button>
                        </div>
                    </div>
                    <hr />

                </div>
{/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^gride_data^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
              <div className='Descritption'>
               <div>Descritption:</div>
               <br />
               <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, quibusdam impedit corrupti ea nesciunt veritatis aspernatur incidunt ipsum illum, iste, minus minima voluptatem nemo vel quidem ullam? Magni, nihil possimus.
               </span><span className='learn_more'>... learn more</span>
              </div>

            </div>
            
            

        </div>
    </div>
    )
}