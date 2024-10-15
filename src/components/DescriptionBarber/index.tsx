import "./style.css";

export default function DescriptionBarber() {
  function barberInformationsClose() {
    const sectionContacts = document.querySelector(
      ".section-description-barber"
    );
    sectionContacts?.classList.remove("active");
  }

  return (
    <section className="section-description-barber">
      <div className="description-barber-content">
        <h1>Sobre Mim</h1>
        <div className="description-barber-informations">
          <p>
            Fala galera, tudo bem com vocês?! Queria contar para vocês um pouco
            da minha história e o começo da barbearia “GC BARBER”, eu sempre
            tive um grande sonho de ser jogador de futebol. Por conta de algumas
            questões na época, eu tive que escolher se investia em um curso ou
            continuaria buscando realizar meu sonho de jogador profissional.
            <br /> Por fim, quando acabei o ensino médio, já não pensavam mais
            no futebol. Mas fiquei em dúvida por qual curso fazer. E eu sempre
            me amarrei em cortes de cabelo e lá no fundo sempre pensava em como
            seria se envolver nessa profissão. Até que no começo do ano de 2023
            eu comecei a cursa o curso na área da barbearia na “ESCABEL” em
            Serra ÉS. Aparti dali, começou um sonho e um desejo de sempre trazer
            a melhor versão das pessoas, através de um corte de cabelo.
            Terminando meu curso, comecei a usar a garagem da minha casa para
            cortar cabelo de amigos e conhecidos. Mas algo que era pequeno, foi
            começando a tomar forma e se torna algo muito grande e numa
            velocidade que nem eu esperava. Lembro que fui até o ponto que hoje
            tenho a minha barbearia com 1000$ no bolso, para começar meu próprio
            negócio. Aluguei o ponto e no dia 7 de abril de 2024 inaugurei a
            barbearia “GC BARBER”.
            <br /> Desde então, estou nessa trajetória e Deus tem cuidado de
            cada detalhe. Espero que tenham curtido um pouco da minha história,
            creio que é só o começo de tudo que o senhor tem para minha vida na
            área da barbearia!! Por isso, nunca desista dos seus sonhos! Um
            grande abraço!!! 🙏🏾
          </p>
        </div>
        <div className="btn">
          <button onClick={barberInformationsClose}>Fechar</button>
        </div>
      </div>
    </section>
  );
}
