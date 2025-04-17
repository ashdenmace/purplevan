import bgImage from "../../images/background.jpg";
import { useRef } from "react";
import "../styles/Welcome.css";

function Welcome() {
  const aboutSectionRef = useRef(null);

  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="hero-overlay"></div>
        <h1 className="hero-title">Purple Haze the Van</h1>
        <button className="scroll-button" onClick={scrollToAbout}>
          Learn More
        </button>
      </section>

      {/* About Section */}
      <section ref={aboutSectionRef} className="about-section diagonal-box">
        <div className="pic-container">
          <img src={"../../images/desert.jpg"}></img>
        </div>
        <div className="about-container">
          <h2 className="about-title">About the Van</h2>
          <p className="about-paragraph">
            Purple Haze is a van for fun and adventures! People adore her and
            want their photo taken with her. She loves being the center of
            attention in holiday parades like the 4th of July, Winder holidays, and
            Trunk or Treat. She likes to go to Farmers markets, set up her
            tables, and sell baked goods. Her magnetic daises dress her up for
            the high way honking!
          </p>
          <p className="about-paragraph">
            When I retired, I found Haze needing love in my neighbors garage at
            the start of my retirement. She had been there for 14 years. The
            interior was pretty much wrecked, so we started at the beginning,
            and did about $55,000 of enhancements. She was totally painted
            inside and out, the hard engine work was done, she got new brakes
            and great tires.
          </p>
          <p className="about-paragraph">
            A new sound system, interior sound proofing, insulation in the
            walls, and upholstery. Basic cabinet for storage, but you could redo
            it.
          </p>
          <p className="about-paragraph">
            I love this van, but at 71 years of age, I no longer am able to
            safely drive her.
          </p>
          <p className="about-paragraph">
            A young family or die hard VW lover needs to come to the northern
            Oregon coast and take her off my hands for $42,500. I will pick up a
            buyer at the airport if you want to take her on a camping trip to
            your house.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
