import IntroductionDescription from "../IntroductionDescription";
import "./styles.css";

export default function HomePage() {
  return (
    <section className="home-page-introduction">
      <div className="home-page-content container">
        <IntroductionDescription />
      </div>
    </section>
  );
}
