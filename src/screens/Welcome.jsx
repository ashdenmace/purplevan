import bgImage from "../../images/background.jpg";
import { useRef } from "react";

import ImageSlider from "../components/ImageSlider";
import "../styles/Welcome.css";

function Welcome() {
  const aboutSectionRef = useRef(null);

  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const aboutPhotos = [
    "https://purplevan-photos.s3.us-east-1.amazonaws.com/celebrations%2F73191.jpeg",
    "https://purplevan-photos.s3.us-east-1.amazonaws.com/current%2F01.jpg",
    "https://purplevan-photos.s3.us-east-1.amazonaws.com/celebrations%2F20230704_083846.jpg",
  ];
  const thPhotos = [
    "https://purplevan-photos.s3.us-east-1.amazonaws.com/current%2F20220131_125419.jpg",
    "https://purplevan-photos.s3.us-east-1.amazonaws.com/current%2FFB_IMG_1664118456598.jpg",
    "https://purplevan-photos.s3.us-east-1.amazonaws.com/current/FB_IMG_1720133851098.jpg",
    "https://purplevan-photos.s3.us-east-1.amazonaws.com/celebrations/20230704_083829.jpg",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="hero-overlay"></div>
        <h1 className="hero-title fade-in">Purple Haze the Van</h1>
        <button className="scroll-button fade-in" onClick={scrollToAbout}>
          Learn More
        </button>
      </section>
      <hr></hr>
      {/* About Section */}
      <section ref={aboutSectionRef} className="about-section">
        <div className="about-photo-container">
          <ImageSlider images={aboutPhotos} interval={6000} />
        </div>
        <div className="about-container">
          <h2 className="about-title">About the Van</h2>
          <p className="about-paragraph">
            Purple Haze is a van for fun and adventures! People adore her and
            want their photo taken with her. She loves being the center of
            attention in holiday parades like the 4th of July, Winder holidays,
            and Trunk or Treat. She likes to go to Farmers markets, set up her
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
      <img
        className="mb-photo"
        src="https://purplevan-photos.s3.us-east-1.amazonaws.com/current/01.jpg"
      ></img>
      <hr></hr>
      {/* Trip Enhancements  */}
      <section className="trip-enhancements-section">
        <div className="trip-enhancements">
          <h2>Trip Enhancements Included with Haze</h2>

          <h3>Cooking & Dining</h3>
          <ul>
            <li>Three roll-up camp tables for cooking, eating, and supplies</li>
            <li>
              Two-burner Coleman stove with propane and a single-burner butane
              stove
            </li>
            <li>Plastic dishes, bowls, and cooking utensils</li>
            <li>
              White water hose for filling tanks and an extension cord for
              external power
            </li>
            <li>Small cooler sized to fit between the two front seats</li>
          </ul>

          <h3>Comfort & Privacy</h3>
          <ul>
            <li>
              Reflectix window covers and matching curtains with earth magnets
              for easy setup and removal
            </li>
            <li>Front and rear divider curtains for nighttime privacy</li>
            <li>
              Large EZ-Up side awning with room walls for extra space or bad
              weather
            </li>
          </ul>

          <h3>Lighting & Power</h3>
          <ul>
            <li>Bluetti solar generator with solar panel</li>
            <li>
              Battery-operated light bars with Velcro mounting and remotes
            </li>
            <li>
              Solar-powered exterior lights with magnetic attachment for night
              camping
            </li>
          </ul>

          <h3>Van Accessories</h3>
          <ul>
            <li>Heavy-duty wood entry step</li>
            <li>
              Small kitchen ladder for upper bunk access, extra seating, or
              reaching high spaces
            </li>
            <li>Chrome table leg and removable interior table</li>
            <li>Two folding chairs (optional)</li>
            <li>Sand carpets for outside use</li>
          </ul>

          <h3>Vehicle Equipment</h3>
          <ul>
            <li>Library of over 10 Volkswagen manuals and books</li>
            <li>New radio with remote control</li>
            <li>
              Two boxes of spare parts (light bulbs, cables, oil and fuel
              filters)
            </li>
            <li>Slow-moving vehicle sign for mountain driving</li>
          </ul>
        </div>
        <div className="te-photo-container">
          <ImageSlider images={thPhotos} />
        </div>
      </section>
    </div>
  );
}

export default Welcome;
