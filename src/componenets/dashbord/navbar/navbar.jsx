import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar(props) {

    function toggelCart() {
        if(props.vesion) {
            props.vesion()
        }
        if(props.setShowCart && !props.inDashbord) {
            if(props.showCart === 'show' ) {
                props.setShowCart(false)
                // setCartStyle({ display: "none" }) ;
            }
            else{
                props.setShowCart('show')
                // setCartStyle({ display: "block" }) ;
            }
            
        }
      }

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

                <div className='cart_icon' onClick={toggelCart}> 
            
                    <img src="/img/carticon.png" alt=""  width={'100%'} onClick={toggelCart} />

                </div>

                <div className='person icon'>

                <img src="/img/personicon.png" alt="" srcset="" width={'100%'}/>

                </div>
             
            </div>

        </div>
    )
}