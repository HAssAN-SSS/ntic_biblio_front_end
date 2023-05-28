import { Link } from 'react-router-dom'
import './login_admin.css'

export default function Login_admin() {

    return(
    <div className='login'>
        

            <Link to={'/'}>
                <div className='logo'>
                    <img src="/img/ismontic_biblio_logo.png" alt="" srcset="" width={'60%'} />

                </div>
            </Link>

        <div className='login-panal'>

                <div className='title-inscrire-icon'>

                    <span className='title-inscrire'>

                    Bienvenue Admin

                    </span>
                    <span className='inscrire-icon'>

                        <img src="/img/login_admin.icon.png" alt="" srcset="" width={'90%'} height={'100%'}/>

                    </span>
                    

                </div>
                    
                <div className='inputs'>

                    <input type="text" placeholder='Pseudo Admin' name='cef'/>
                    <input type="text" placeholder='Mot de Passe Admin ' name='password'/>
                
                    <Link to={'/Dashbord_admin'} className='login-btn btn-submit'>

                        submit

                    </Link>




                </div>
                
        </div>

    </div>
    )
}