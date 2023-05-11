import './LoginPage.css'

function LoginPage() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <a className="navbar-brand titulo" href="#"><strong>Evolve</strong> Fitness Studio</a>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="#">Aulas</a>
                            <a className="nav-link" href="#">Planos</a>
                            <a className="nav-link" href="#">Horário</a>
                            <a className="nav-link" href="#">Área do aluno</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="d-flex justify-content-center">

                <p>Entre com e-mail e senha para acessar</p>
            </div>

            <div className="d-flex justify-content-center">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">E-mail</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>


                    <button type="submit" class="btn btn-primary">Entrar</button>
                </form>
            </div>
        </>
    )
}

export default LoginPage