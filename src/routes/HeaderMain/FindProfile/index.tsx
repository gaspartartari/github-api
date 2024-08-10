import Button from '../../../components/Button';
import './styles.css';

export default function FindProfile() {
    return (
        <main >
            <div className='desafio-container '>
                <div className='find-profile-card'>
                    <h1>Encontre um perfil Github</h1>
                    <form action="">
                        <div>
                            <input className='find-profile-input' name='user' type="text" placeholder='Usuário Github' />
                        </div>
                    </form>
                    <div className='desafio-btn-container'>
                        <Button name="Encontrar" />
                    </div>
                </div>

            </div>

        </main>
    )
}