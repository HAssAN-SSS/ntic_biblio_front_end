import './dashbord_admin.css'
import Respo_data_row from './respo_data_row'

export default function Dashbord_admin() {

    return (
        <div className='Dashbord_admin'>
            <div className='left-admin'>
                <div className='logo-admin'>
                    <img src="/img/ismontic_biblio_logo.png" alt=""  width={'100%'}/>
                </div>
                <div className='admin-left-btn'>

                    <button className='Livre_Info'>Livre Info</button>
                    <button className='Bloquer_utilisateur'>Bloquer utilisateur</button>

                </div>

                
            </div>

            <div className='medio-admin'>

                <input type="text" name='id' placeholder='Entrez ID'/>
                <input type="text" name='name' placeholder='Entrez Nom'/>
                <input type="text" name='prenom' placeholder='Entrez Prenom'/>
                <input type="password" name='pasword' placeholder='Entrez Password'/>
                <input type="email" name='email' placeholder='Entrez E-mail'/>
                <input type="tel" name='tel' placeholder='Entrez Tel'/>
                <input type="text" name='date_debut' placeholder='Entrez Date Debut Activite'/>

            </div>

            <div className='right-admin'>
            <div className='admin-right-btn'>

                    <button className='Read_Responsable'>Read Responsable</button>
                    <button className='Add_Responsable'>Add Responsable</button>

                </div>
            </div>

            {/* ------------------------------------data view gride------------------------------------ */}

            <div className='data_gride'>
                <div className='data-grid-labels'>

                    <span>id Responsable</span>
                    <span>Password</span>
                    <span>Action</span>

                </div>
                <hr />
                <Respo_data_row />
                <Respo_data_row />
                <Respo_data_row />
                <Respo_data_row />
                <Respo_data_row />
                <Respo_data_row />
                <Respo_data_row />
                <Respo_data_row />
                <Respo_data_row />
                <Respo_data_row />
                <Respo_data_row />
                <Respo_data_row />
                <Respo_data_row />
                <Respo_data_row />

            </div>
        </div>
    )
}