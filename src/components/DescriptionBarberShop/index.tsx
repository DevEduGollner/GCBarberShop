import { Link } from "react-router-dom";
import "./styles.css";

export default function DescriptionBarberShop() {
  return (
    <>
      <h1>Sobre Nós</h1>
      <div className="home-page-descriptions-barber-shop">
        <div className="card-description-barber-shop-left">
          <h2>Barbearia</h2>
          <div className="card-description-barber-shop-bottom-left">
            <p>
              A GC Barber Shop é uma barbearia fundada em 2024 que mesmo com
              pouco tempo vem conquistando o seu espaço no bairro aonde está
              localizada, em MARIA ORTIZ. E isso é devido ao grande carisma e
              habilidades de Gerson Souza, que sempre dedicando e perseverante.{" "}
            </p>
          </div>
        </div>
        <div className="card-description-barber-shop-right">
          <h2>Nossos diferenciais</h2>
          <div className="card-description-barber-shop-bottom-right">
            <p>
              Talvez você esteja se perguntando o por que deve escolher a GC
              Barber Shop, então se liga só nos nossos diferenciais:{" "}
            </p>
            <br />
            <p>- Atendimento de qualidade.</p>
            <p>
              - Preços ótimos.{" "}
              <Link to="/more-details#section-services">
                Clique aqui para conferir os preços
              </Link>
              .
            </p>
            <p>- Ambiente tranquilo e limpo.</p>
          </div>
        </div>
      </div>
    </>
  );
}
