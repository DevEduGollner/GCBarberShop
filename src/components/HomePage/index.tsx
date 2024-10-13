import "./styles.css";

export default function HomePage() {
  return (
    <section className="home-page-introduction">
      <div className="home-page-content container">
        <div className="introduction-description">
          <h3>GC Barber Shop</h3>
          <p>
            Está preparado para o MELHOR CORTE de sua vida junto de muita
            resenha? então cola na GC BARBER SHOP.
          </p>
          <p>Clique no botão abaixo para mais detalhes:</p>
          <a href="best-details.html">
            <button>Mais detalhes</button>
          </a>
        </div>
      </div>
    </section>
  );
}
