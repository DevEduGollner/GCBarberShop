import { Link } from "react-router-dom";
import "./styles.css";

export default function DescriptionBarberShop() {
  return (
    <>
      <h1>Sobre Nós</h1>
      <div className="home-page-descriptions-barber-shop">
        <div className="card-description-barber-shop-left">
          <h2>Sobre a Barbearia</h2>
          <div className="card-description-barber-shop-bottom-left">
            <p>
              A GC Barber Shop é uma barbearia fundada em 2024 que mesmo com
              pouco tempo vem conquistando o seu espaço no bairro aonde está
              localizada, em MARIA ORTIZ. E isso é devido ao grande carisma e
              habilidades de Gerson Souza, que sempre foi dedicado e
              perseverante, com sua barbearia não será e nem está sendo
              diferente, venha já e por um ÓTIMO PREÇO garanta um corte de
              qualidade.
              <p>
                <br />
                <h2>Nossos diferenciais</h2>
                <div className="card-description-barber-shop-bottom-right">
                  <p>
                    Talvez você esteja se perguntando o por que deve escolher a
                    GC Barber Shop, então se liga só nos nossos diferenciais:
                  </p>
                  <br />
                  <p>- Atendimento de qualidade.</p>
                  <p>
                    - Preços ótimos.
                    <Link to="/more-details">
                      Clique aqui para conferir os preços
                    </Link>
                    .
                  </p>
                  <p>- Ambiente tranquilo e limpo.</p>
                </div>
              </p>
            </p>
          </div>
        </div>
        <div className="card-description-barber-shop-right">
          <h1>Sobre Mim</h1>
          <div className="description-barber-informations">
            <p>
              Eu sempre tive um grande sonho de ser jogador de futebol. Por
              conta de algumas questões na época, eu tive que escolher se
              investia em um curso ou continuaria buscando realizar meu sonho de
              jogador profissional. <br /> <br />
              Por fim, quando acabei o ensino médio, já não pensavam mais no
              futebol. Mas fiquei em dúvida por qual curso fazer. E eu sempre me
              amarrei em cortes de cabelo e lá no fundo sempre pensava em como
              seria se envolver nessa profissão. Até que no começo do ano de
              2023 eu comecei a cursa o curso na área da barbearia na “ESCABEL”
              em Serra ÉS. Apartir dali, começou um sonho e um desejo de sempre
              trazer a melhor versão das pessoas, através de um corte de cabelo.
              <br /> <br />
              Terminando meu curso, comecei a usar a garagem da minha casa para
              cortar cabelo de amigos e conhecidos. Mas algo que era pequeno,
              foi começando a tomar forma e se torna algo muito grande e numa
              velocidade que nem eu esperava. Lembro que fui até o ponto que
              hoje tenho a minha barbearia com 1000$ no bolso, para começar meu
              próprio negócio. Aluguei o ponto e no dia 7 de abril de 2024
              inaugurei a barbearia “GC BARBER”. <br /> <br />
              Desde então, estou nessa trajetória e Deus tem cuidado de cada
              detalhe. Espero que tenham curtido um pouco da minha história,
              creio que é só o começo de tudo que o senhor tem para minha vida
              na área da barbearia!! Por isso, nunca desista dos seus sonhos! Um
              grande abraço!!! 🙏🏾
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
