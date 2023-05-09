import check from '../../imagens/check-circle.svg'
import negative from '../../imagens/x-circle.svg'
import './precos.css'

function Precos() {
    return (
        <>
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

export default Precos