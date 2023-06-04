import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {

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

                    Connexion

                    </span>
                    <span className='inscrire-icon'>

                        <img src="/img/loginIcon.png" alt="" srcset="" width={'100%'} height={'100%'}/>

                    </span>
                    

                </div>
                    
                <div className='inputs'>

                    <input type="text" placeholder='Entrer votre CEF' name='cef'/>
                    <input type="text" placeholder='Entrer Votre Nom' name='nom_prenome'/>
                    <input type="text" placeholder='Entrer Votre Prenom' name='prenom_prenome'/>
                    <input type="text" placeholder='Entrer Votre mot de passe' name='password'/>
                
                    <Link to={'/dashbord'} className='login-btn btn-submit'>

                        submit

                    </Link>




                </div>
                
        </div>

    </div>
    )
}