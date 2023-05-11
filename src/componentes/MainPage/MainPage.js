import musculacao from '../../imagens/musculacao.jpg'
import ct from '../../imagens/cross-training.jpg'
import yoga from '../../imagens/yoga.jpg'
import horario from '../../imagens/clock.svg'
import intensidade from '../../imagens/battery-charging.svg'
import dumbell from '../../imagens/dumbbell-solid.svg'
import check from '../../imagens/check-circle.svg'
import negative from '../../imagens/x-circle.svg'
import './MainPage.css'

function MainPage() {
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

            <div className="aulas-titulo">
                <p>Nossas <strong>Aulas</strong></p>
            </div>
            <div className="d-flex justify-content-around container-aulas">
                <div className="aulas-cards d-flex flex-column aulas-container">
                    <img className="img-card" src={musculacao} alt="Musculação"></img>
                    <span className="aulas-nome">Evolve Muscle</span>
                    <div className="d-flex align-items-center justify-content-around flex-row">
                        <div className="aulas-cards d-flex align-items-center flex-column">
                            <img class="horario-img" src={horario} alt="Horário"></img>
                            <p class="horario">45 - 60 min.</p>
                        </div>
                        <div className="aulas-cards d-flex align-items-center flex-column">
                            <img class="intensidade-img" src={intensidade} alt="Intensidade"></img>
                            <p class="horario">Mod. - Alta</p>
                        </div>
                    </div>
                </div>
                <div className="aulas-cards d-flex flex-column aulas-container">
                    <img className="img-card" src={ct} alt="Cross-training"></img>
                    <span className="aulas-nome">Evolve Cross</span>
                    <div className="d-flex align-items-center justify-content-around flex-row">
                        <div className="aulas-cards d-flex align-items-center flex-column">
                            <img class="horario-img" src={horario} alt="Horário"></img>
                            <p class="horario">60 min.</p>
                        </div>
                        <div className="aulas-cards d-flex align-items-center flex-column">
                            <img class="intensidade-img" src={intensidade} alt="Intensidade"></img>
                            <p class="horario">Alta</p>
                        </div>
                    </div>
                </div>
                <div className="aulas-cards d-flex flex-column aulas-container">
                    <img className="img-card" src={yoga} alt="Yoga"></img>
                    <span className="aulas-nome">Evolve Yoga</span>
                    <div className="d-flex align-items-center justify-content-around flex-row">
                        <div className="aulas-cards d-flex align-items-center flex-column">
                            <img class="horario-img" src={horario} alt="Horário"></img>
                            <p class="horario">30 - 60 min.</p>
                        </div>
                        <div className="aulas-cards d-flex align-items-center flex-column">
                            <img class="intensidade-img" src={intensidade} alt="Intensidade"></img>
                            <p class="horario">Leve</p>
                        </div>
                    </div>
                </div>
                <div className="aulas-cards d-flex flex-column aulas-container-mais">
                    <img className="img-card dumbell" src={dumbell} alt="Yoga"></img>
                    <span className="aulas-nome-mais">Mais aulas</span>
                </div>
            </div>

            <div className="mensalidade-titulo">
                <p>Nossos <strong>Planos</strong></p>
            </div>
            <div className="planos-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">Standard</th>
                            <th scope="col">EvolveMAX</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Acesso à ilimitado à área da Evolve Muscle</th>
                            <td></td>
                            <td><img src={check} alt="O"></img></td>
                            <td><img src={check} alt="O"></img></td>
                        </tr>
                        <tr>
                            <th scope="row">Acesso à todas as aulas Evolve Fitness</th>
                            <td></td>
                            <td><img src={negative} alt="X"></img></td>
                            <td><img src={check} alt="O"></img></td>
                        </tr>
                        <tr>
                            <th scope="row">Acesso ao programa de condicionamento EvolveBurn</th>
                            <td></td>
                            <td><img src={negative} alt="X"></img></td>
                            <td><img src={check} alt="O"></img></td>
                        </tr>
                        <tr>
                            <th scope="row">Consulta mensal com Nutricionista</th>
                            <td></td>
                            <td><img src={negative} alt="X"></img></td>
                            <td><img src={check} alt="O"></img></td>
                        </tr>
                        <tr>
                            <th scope="row">Consulta mensal com Fisioterapeuta</th>
                            <td></td>
                            <td><img src={negative} alt="X"></img></td>
                            <td><img src={check} alt="O"></img></td>
                        </tr>
                        <tr>
                            <th scope="row">Estacionamento gratuito</th>
                            <td></td>
                            <td><img src={negative} alt="X"></img></td>
                            <td><img src={check} alt="O"></img></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="container overflow-hidden text-center">
                <div className="row gx-5 precos-container">
                    <div className="col precos-container-indiv">
                        <div className="p-3 precos-titulo">Self</div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item precos-valor">R$ 250,00</li>
                            <li className="list-group-item precos-info">Acesso Standard</li>
                            <li className="list-group-item precos-info">Individual</li>
                            <button type="button" class="btn btn-primary">Saiba mais</button>
                        </ul>
                    </div>
                    <div className="col precos-container-indiv precos-container-meio">
                        <div className="p-3 precos-titulo">SelfMAX</div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item precos-valor">R$ 400,00</li>
                            <li className="list-group-item precos-info">Acesso EvolveMAX</li>
                            <li className="list-group-item precos-info">Individual</li>
                            <button type="button" class="btn btn-primary">Saiba mais</button>
                        </ul>
                    </div>
                    <div className="col precos-container-indiv precos-container-meio">
                        <div className="p-3 precos-titulo">Family</div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item precos-valor">R$ 475,00</li>
                            <li className="list-group-item precos-info">Acesso Standard</li>
                            <li className="list-group-item precos-info">Até 2 pessoas</li>
                            <button type="button" class="btn btn-primary">Saiba mais</button>
                        </ul>
                    </div>
                    <div className="col precos-container-indiv">
                        <div className="p-3 precos-titulo">FamilyMAX</div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item precos-valor">R$ 950,00</li>
                            <li className="list-group-item precos-info">Acesso EvolveMAX</li>
                            <li className="list-group-item precos-info">Até 4 pessoas</li>
                            <button type="button" class="btn btn-primary">Saiba mais</button>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}

export default MainPage