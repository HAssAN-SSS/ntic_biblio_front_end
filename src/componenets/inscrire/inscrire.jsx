import { Link } from 'react-router-dom'
import './inscrire.css'

export default function Inscrire() {

    return(
        <div className='inscrire'>
            <Link to={'/'}>
            <div className='logo'>
                <img src="/img/ismontic_biblio_logo.png" alt="" srcset="" width={'60%'} />

            </div>
            </Link>

            <div className='inscrire-panel'>

                <div className='title-inscrire-icon'>
                    <span className='title-inscrire'>

                    S’inscrire

                    </span>
                    <span className='inscrire-icon'>

                        <img src="/img/inscrireIcon.png" alt="" srcset="" width={'100%'} height={'100%'}/>

                    </span>
                    

                </div>

                <div className='inputs'>
                    <input type="text" placeholder='Entrer votre CEF' name='cef'/>
                    <input type="text" placeholder='Entrer Votre Nom' name='nom'/>
                    <input type="text" placeholder='Entrer Votre Prenom' name='prenom'/>
                    <input type="email" placeholder='Entrer Votre Email'  name='email'/>
                    <input type="password" placeholder='Entrer Votre mot de passe' name='password'/>
                    <input type="password" placeholder='Confirmer le  mot de passe' name='password_confirme'/>
                    
                    <Link to={'/dashbord'} className='inscrire-btn '>

                        submit

                    </Link>





                </div>

            </div>

        </div>

    )
}