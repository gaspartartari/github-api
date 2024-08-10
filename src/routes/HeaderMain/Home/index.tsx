
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import './styles.css';
export default function Home() {

    return (
        <main>
            <div className='home-card'>
                <div className='home-card-text'>
                    <h1>Desafio Github API</h1>
                    <p>DevSuperior - Escola de programação</p>
                </div>
                <div className='desafio-btn-container'>
                    <Link className='no-decoration' to="find-profile"><Button name="Começar" /></Link>
                </div>
            </div>
        </main>
    )
}