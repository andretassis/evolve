import musculacao from '../../imagens/musculacao.jpg'
import ct from '../../imagens/cross-training.jpg'
import yoga from '../../imagens/yoga.jpg'
import horario from '../../imagens/clock.svg'
import intensidade from '../../imagens/battery-charging.svg'
import dumbell from '../../imagens/dumbbell-solid.svg'
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
        </>
    )
}

export default Aulas