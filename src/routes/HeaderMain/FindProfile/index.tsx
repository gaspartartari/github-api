import {  useState } from 'react';
import './styles.css';
import axios from 'axios';
import CardUserDetails from '../../../components/CardUserDetails';
import {User} from '../../../models/user.tsx';

type FormData = {
    user: string;
}




export default function FindProfile() {

    const [formData, setFormData] = useState<FormData>({
        user: ''
    })

    const [userData, setUserData] = useState<User>();

    const [error, setError] = useState<string>('');



    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleSubmit(event: any) {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${formData.user}`)
            .then(response => {
                console.log(response.data)
                setUserData(response.data)
            })
            .catch(() => {
                setError('Erro ao buscar usuário')
                setUserData(undefined)
            })
    }


    return (
        <main >
            <div className='desafio-container '>
                <div className='find-profile-card'>
                    <h1>Encontre um perfil Github</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <input
                                className='find-profile-input'
                                name='user'
                                type="text"
                                placeholder='Usuário Github'
                                value={formData.user}
                                onChange={(event) => setFormData({ ...formData, user: event.target.value })}
                            />
                        </div>
                        <div className='desafio-btn-container'>
                            <button type='submit' className='button'>Encontrar</button>
                        </div>
                    </form>

                </div>
                
                { 
                    userData ? 
                    <CardUserDetails user={userData} /> 
                    : error ? <h1 className='error'>{error}</h1> : null
                }
            </div>



        </main>
    )
}
