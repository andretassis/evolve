import './LoginPage.css'

function LoginPage() {
    return (
        <>

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
                        <a href="#" className="esqueci-senha">Recuperar senha</a>
                    </div>


                    <button type="submit" class="btn btn-primary">Entrar</button>
                </form>
            </div>
        </>
    )
}

export default LoginPage