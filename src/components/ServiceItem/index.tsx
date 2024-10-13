import "./style.css";

export default function ServiceItem() {
  return (
    <div className="services-item">
      <div className="img-services">
        <img src="assets/corte-de-cabelo-1.jpg" alt="Corte de Cabelo" />
      </div>
      <div className="description-services">
        <h3>Corte de Cabelo</h3>
        <h4>R$ 20.00</h4>
      </div>
    </div>
  );
}
