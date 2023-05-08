import musculacao from '../../imagens/musculacao.jpg'
import ct from '../../imagens/cross-training.jpg'
import yoga from '../../imagens/yoga.jpg'
import horario from '../../imagens/clock.svg'
import './aulas.css'

function Aulas() {
    return (
        <>
            <div className="aulas-titulo">
                <p>Nossas <strong>Aulas</strong></p>
            </div>
            <div className="d-flex justify-content-around container-aulas">
                <div className="aulas-cards d-flex flex-column aulas-container">
                    <img className="img-card" src={musculacao} alt="Musculação"></img>
                    <span className="aulas-nome">Evolve Muscle</span>
                    <div className="aulas-cards d-flex align-items-center flex-column">
                        <img class="horario-img" src={horario} alt="Horário"></img>
                        <p class="horario">Todos os dias</p>
                    </div>
                </div>
                <div className="aulas-cards d-flex flex-column aulas-container">
                    <img className="img-card" src={ct} alt="Cross-training"></img>
                    <span className="aulas-nome">Evolve Cross</span>
                    <div className="aulas-cards d-flex align-items-center flex-column">
                        <img class="horario-img" src={horario} alt="Horário"></img>
                        <p class="horario">Todos os dias</p>
                    </div>
                </div>
                <div className="aulas-cards d-flex flex-column aulas-container">
                    <img className="img-card" src={yoga} alt="Yoga"></img>
                    <span className="aulas-nome">Evolve Yoga</span>
                    <div className="aulas-cards d-flex align-items-center flex-column">
                        <img class="horario-img" src={horario} alt="Horário"></img>
                        <p class="horario">Terça e quinta</p>
                    </div>
                </div>
                <div className="aulas-cards d-flex flex-column aulas-container">
                    <img className="img-card" src={yoga} alt="Yoga"></img>
                    <span className="aulas-nome">Mais aulas</span>
                    <div className="aulas-cards d-flex align-items-center flex-column">
                        <img class="horario-img" src={horario} alt="Horário"></img>
                        <p class="horario">Todos os dias</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aulas