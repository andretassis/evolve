import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

function LoginPage() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [erro, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email.trim() !== 'aluno@teste.com' || senha.trim() !== 'aluno123') {
            setError('Login ou Senha incorretos')
            return
        }

        navigate('/profile')
    }


    return (
        <>

            <div className="d-flex justify-content-center">

                <p>Entre com e-mail e senha para acessar</p>

            </div>

            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">E-mail</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(event) => setEmail(event.target.value)} />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={senha} onChange={(event) => setSenha(event.target.value)} />
                        <a href="#" className="esqueci-senha">Recuperar senha</a>
                    </div>

                    {erro && <p className="error">{erro}</p>}
                    <button type="submit" class="btn btn-primary">Entrar</button>
                </form>
            </div>
        </>
    )
}

export default LoginPage