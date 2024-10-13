import IntroductionDescription from "../../components/IntroductionDescription";
import "./styles.css";

export default function HomePage() {
  return (
    <main>
    <section className="home-page-introduction">
      <div className="home-page-content container">
        <IntroductionDescription />
      </div>
    </section>
    </main>
  );
}
