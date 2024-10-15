import './styles.css';
import imgBarber from '../../assets/foto-gc.jpg';
import DescriptionBarber from '../DescriptionBarber';

export default function InformationBarber() {

  function informationsBarberShow() {
    const sectionContacts = document.querySelector(
      ".section-description-barber"
    );
    sectionContacts?.classList.add("active");
  }

    return (
      <>
              <div className="information-barber">
          <h2>Sobre Mim</h2>
          <div className="apresentation-barber">
            <img src={imgBarber} alt="Foto do Barbeiro" />
            <div className="description-barber">
              <p>
              Seja muito bem vindo, meu nome é Gerson, sou barbeiro da GC BARBER e gostaria de me apresentar melhor:
              </p>
                <button onClick={informationsBarberShow}>Apresentar-se</button>
            </div>
          </div>
        </div>
        <DescriptionBarber />
      </>

    );
}