
import './getStart.css'
import { Link } from 'react-router-dom'
export default function GetStart () {

    return (
        <div className="getStart">
            <div className="getStart-content">
                <div className="biblio-logo">
                    <img src="/img/ismontic_biblio_logo.png" alt="" srcset="" width={'200%'}/>
                </div>
                <div className='getStart-textDesc'>
                    <h2 className='About-Our-Lebrary'>About Our Lebrary</h2>
                    <h2 className='ISMONTIC-Bibliotheque'>ISMONTIC Bibliothèque</h2>
                    <p className='para1'>
                        Nous sommes heureux d'annoncer que la bibliothèque de notre école sera désormais ouverte au public. Nous accueillons donc tous les étudiants et membres de la communauté locale qui souhaitent explorer notre vaste collection de livres.

                    </p>
                    <p className='para2'>
                        Notre bibliothèque offre un espace calme et confortable pour étudier, travailler et se concentrer.
                    </p>
                    <div className='getStart-buttons'>
                        <Link to={'/inscrire'}>
                        {/* !signup btn */}
                        <button id='getStart-btn'>Sign Up</button>
                        {/* !signup btn */}
                        </Link>

                        <Link to={'/login'}>
                        {/* !logging btn */}
                        <button id='getStart-btn'>Login</button>
                        {/* !logging btn */}
                        </Link>

                    </div>


                </div>
            </div>
            <div className="getStat-img">
                <img src="/img/welcome.jpg" alt="no se" width={'100%'} height={'100%'} />
            </div>
        </div>
    )
}