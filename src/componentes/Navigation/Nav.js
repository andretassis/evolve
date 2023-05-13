import { useNavigate } from 'react-router-dom'
import './Nav.css'

function Nav() {

    const navigate = useNavigate()

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <a className="navbar-brand titulo" href="#" onClick={() => navigate('/home')}><strong>Evolve</strong> Fitness Studio</a>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="#">Sobre nós</a>
                            <a className="nav-link" href="#">Contato</a>
                            <a className="nav-link" href="#" onClick={() => navigate('/login')}>Área do aluno</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav