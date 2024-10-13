import './styles.css';

export default function ServicesOptions() {
    return(
        <div className="services-options">
          <div className="services-item">
            <div className="img-services">
              <img src="assets/corte-de-cabelo-1.jpg" alt="Corte de Cabelo" />
            </div>
            <div className="description-services">
              <h3>Corte de Cabelo</h3>
              <h4>R$ 20.00</h4>
            </div>
          </div>
          <div className="services-item">
            <div className="img-services">
              <img src="assets/corte-de-cabelo-7.jpg" alt="Descoloração" />
            </div>
            <div className="description-services">
              <h3>Descoloração</h3>
              <h4>R$ 100.00</h4>
            </div>
          </div>
          <div className="services-item">
            <div className="img-services">
              <img src="assets/corte-de-cabelo-4.jpg" alt="Pigmentação" />
            </div>
            <div className="description-services">
              <h3>Pigmentação</h3>
              <h4>R$ 40.00</h4>
            </div>
          </div>
          <div className="services-item">
            <div className="img-services">
              <img src="assets/corte-de-cabelo-6.jpg" alt="Luzes/Reflexo" />
            </div>
            <div className="description-services">
              <h3>Luzes/Reflexo</h3>
              <h4>R$ 60.00</h4>
            </div>
          </div>
        </div>
    );
}