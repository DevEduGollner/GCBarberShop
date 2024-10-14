import './styles.css';
import imgBarber from '../../assets/Barber.gif';

export default function InformationBarber() {
    return (
        <div className="information-barber">
          <h2>Sobre Mim</h2>
          <div className="apresentation-barber">
            <img src={imgBarber} alt="Foto do Barbeiro" />
            <div className="description-barber">
              <p>
              Seja muito bem vindo, meu nome é Gerson, sou barbeiro da GC BARBER e gostaria de me apresentar melhor:
              </p>
                <button>Apresentar-se</button>
            </div>
          </div>
        </div>
    );
}