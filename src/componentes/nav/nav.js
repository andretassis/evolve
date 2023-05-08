import './nav.css'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <a className="navbar-brand titulo" href="#"><strong>Evolve</strong> Fitness Studio</a>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="#">Aulas</a>
                        <a className="nav-link" href="#">Preços</a>
                        <a className="nav-link" href="#">Contato</a>
                        <a className="nav-link" href="#">Área do aluno</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav