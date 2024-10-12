import './styles.css';

export default function Header() {

    return (
        <header>
        <nav className="nav-bar container">
          <div className="logo">
            <img src="assets/GCBarber-Logo.png" alt="" />
          </div>
  
          <div className="list-navegation">
            <ul>
              <li className="nav-item"><a href="">Inicio</a></li>
              <li className="nav-item"><a href="#sla123">Serviços</a></li>
              <li className="nav-item"><a href="">Sobre Nós</a></li>
              <li className="nav-item"><a href="">Fale Conosco</a></li>
            </ul>
          </div>
  
          <div className="mobile-menu-icon">
            <button >
              <img
                className="icon"
                src="assets/menu-items-white.svg"
                alt="Abrir Opções"
              />
            </button>
          </div>
        </nav>
  
        <div className="mobile-menu">
          <ul>
            <li className="nav-item"><a href="">Inicio</a></li>
            <li className="nav-item"><a href="">Serviços</a></li>
            <li className="nav-item"><a href="">Sobre Nós</a></li>
            <li className="nav-item"><a href="">Fale Conosco</a></li>
          </ul>
        </div>
      </header>
    );
}
