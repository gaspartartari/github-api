import './styles.css';

import { User } from '../../models/user';

type CardUserDetailsProps = {
    user: User
}

export default function CardUserDetails(userData: CardUserDetailsProps) {

    return (
        <section >
            <div className='card-user-details'>
                <div className='card-user-details-img'>
                    <img src={userData.user.avatar_url} alt={userData.user.name} />
                </div>
                <div className='card-user-details-text'>
                    <h1>Informações</h1>
                    <div className='card-user-details-text-info'>
                        <div className='card-info'>
                           <b>Perfil:</b>  <a href={userData.user.html_url} target='vblank' rel="noopener noreferrer">{userData.user.html_url}</a>
                        </div>
                        <div className='card-info'>
                            <b>Seguidores:</b> {userData.user.followers}
                        </div>
                        <div className='card-info'>
                            <b>Localidade:</b> {userData.user.location}
                        </div>
                        <div className='card-info'>
                            <b>Nome:</b> {userData.user.name}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}