import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar(props) {

    return(
        <div className='navbar'>
            
            <div className="biblio-logo">
                    <Link to={'/dashbord'}>
                    <img src="/img/ismontic_biblio_logo.png" alt="" srcset="" width={'100%'}/>
                    </Link>
            </div>

            <div className='navbar-right-side'>
                
                <div className='search-icon icon'>

                    <img src="/img/searchicon.png" alt="" srcset="" width={'100%'}/>

                </div>

                <div className='cart icon'>
            
                    <img src="/img/carticon.png" alt="" srcset="" width={'100%'} onClick={props.vesion} />

                </div>

                <div className='person icon'>

                <img src="/img/personicon.png" alt="" srcset="" width={'100%'}/>

                </div>
             
            </div>

        </div>
    )
}