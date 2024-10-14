import HeaderHomePage from "../../components/HeaderHomePage";
import InformationContact from "../../components/InformationContact";
import IntroductionDescription from "../../components/IntroductionDescription";
import "./styles.css";

export default function HomePage() {

  return (
    <>
      <HeaderHomePage />
      <main>
        <section className="home-page-introduction">
          <div className="home-page-content container">
            <IntroductionDescription />
          </div>
        </section>
      </main>
      <InformationContact />
    </>
  );
}
