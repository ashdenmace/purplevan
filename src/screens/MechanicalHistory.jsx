import React, { useEffect, useState } from "react";
import "../styles/MechanicalHistory.css";

// IMPORTANT: MAKE SURE PICTURE DOESNT LEAK ABOVE NAVBAR BEFORE DEPLOY

const images = [
  "https://purplevan-photos.s3.us-east-1.amazonaws.com/hazevan-photos%2F20190925_133630.jpg",
  "https://purplevan-photos.s3.us-east-1.amazonaws.com/hazevan-photos%2F20190925_133729.jpg",
  // Add more image URLs as needed
];

function MechanicalHistory() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 6000); // change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
  <>
    <div className="page-layout">
      <div className="image-section">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className={index === currentImageIndex ? "active" : ""}
            alt={`Van ${index + 1}`}
          />
        ))}
      </div>

      <div className="text-section" id="text">
        <h4>Mechanical History of the Van</h4>
        <h5>Owner: William Duncan - 7725 Seattle Ave, Bay City, OR 97107</h5>
        <p>48,067 – Brakes serviced</p>
        <p>55,502 – Road Ryder Classic Gas shocks (Les Schwab, 11/15/2001)</p>
        <p>56,180 – New battery (Les Schwab, 8/15/2002)</p>
        <h5>Sold to Michael Simpson, Rockaway Beach – $800 on 12/12/2004</h5>
        <p>60,453 – Replaced clutch, inspected transmission</p>
        <p>60,788 – 3 new tires</p>
        <h5>Sold to Robin Bock, Rockaway Beach – $5,000 in 2019</h5>
        <h6>62,156 – Service by German Autowerks, Hillsboro on 7/8/2019</h6>
        <p>Front brakes: Master Cylinder ($180), Pad Set ($70), Rotors ($132)</p>
        <p>Calipers (Left & Right) – $320</p>
        <p>Brake hoses (2) – $50</p>
        <p>Rear brake drum – $200, Rear shoe kits (2) – $150</p>
        <p>Wheel cylinders (2) – $40, Wheel seals (6) – $12</p>
        <p>Drive axles (2) – $174, Wheel bearings – $20</p>
        <p>Fuel system: Pump ($80), Filter ($15), Hose ($20)</p>
        <p>Engine: Oil filter ($12), Oil (4 quarts) – $16, Spark Plugs (4) – $29</p>
        <p>Battery – $80, Cylinder head w/ valves – $1,400</p>
        <p>Head gasket set – $280, Engine seal – $95</p>
        <p>Rebuilt carburetors, Cleaned/Painted engine tin</p>
        <p>Inspected heater box, Cleaned fan shroud</p>
        <p>Resealed oil cooler, Checked clutch & flywheel</p>
        <p>Adjuster screw – $128, Gasket (4) – $1.60, O-rings (4) – $4</p>
        <p>Injector seal – $4.80, Engine paint – $25</p>
        <p>Motor oil – $16</p>
        <p>Windshield and rubber replacement with body work – $616</p>
        <p>Body work alone – $345</p>
        <h6>7/11/2019 – Maaco Paint & Body</h6>
        <p>Interior & exterior paint, bodywork, powder-coated wheels, canvas top installed</p>
        <h6>Beaverton Auto Upholstery – Steven Mackley</h6>
        <p>New seat covers, soundproofing, full upholstery replacement</p>
        <h6>62,299 – 11/11/2019 – Halsey Automotive</h6>
        <p>Ball joints – $550, Tie rod bars – $110, Starter linkage – $330</p>
        <p>Front bushing & rear coupler replacement, Pivot pin – $330</p>
        <p>Windshield washer switch – $165, Fuse box – $82.60, Fuses</p>
        <p>Scope set basics – $165, Steam clean – $770</p>
        <p>Horn – $16.50, 2 window cranks – $16</p>
        <p>Vacuum hoses (2), Voltage regulator</p>
        <p>Gear shift couplers (4) – $18, Shifting bushings – $500</p>
        <p>4-way switch, Headlight – $22, 3 bulbs, 1 elbow</p>
        <h6>62,439 – 01/07/2020 – Halsey Automotive (Towed after gas spill)</h6>
        <p>Lowered engine/transmission, replaced gas tank vent and sensor – $763.95</p>
        <p>Charging system check – $82.50, New voltage regulator – $55</p>
        <p>Fixed oil leak (thermostat wheel) – $55</p>
        <p>Repaired rear shock mount – $110, New fuel filter – $15</p>
        <p>62,776 – 1/23/2020 – AL3 Thrust alignment – $89.99</p>
        <p>63,120 – 3/4/2020 – Young’s Old Volks Home (Bend)</p>
        <p>Fuel filter – $75, part – $15</p>
        <p>Best Buy – New stereo and speakers</p>
        <h6>4/22/2020 – Double E RV Repair (Madras)</h6>
        <p>Installed pop top lift assist – $120, Part – $74</p>
        <p>67,097 – 9/10/2020 – Silverlake Auto (Brookfield, WI)</p>
        <p>Spark plug wires, distributor cap, rotor – $605.04</p>
        <p>9/3/2020 – Joetown Garage – Fuel filter – $20</p>
        <p>70,502 – 10/6/2020 – Honeycomb Auto (Boise, ID)</p>
        <p>Valve cover replacements – $451.98</p>
        <p>70,630 – 10/15/2020 – Precision Import Auto Repair</p>
        <p>Overfill oil removal</p>
        <p>06/2021 – Halsey Auto – V-belt replacement and full check</p>
        <p>71,307 – 4/15/2021 – Les Schwab</p>
        <p>New tires, suspension check, alignment – $804.31</p>
        <p>71,518 – 5/3/2021</p>
        <p>Brake fluid flush, fuel filter, V-belt, oil change, rear shock – $194.00</p>
        <p>73,609 – 7/13/2021</p>
        <p>R&R carbs, jets, header, muffler, oil/filter, lower valance – $1045.50</p>
        <p>76,268 – 1/27/2022 – Autobahn Motorworks</p>
        <p>Oil change – $94.55</p>
        <p>76,330 – 1/28/2022 – Wedge Automotive</p>
        <p>Replaced alternator belt, new battery cables – $298.78</p>
        <p>5/17/2024 – Halsey Auto Repair</p>
        <p>Throttle pedal repair – $1022.74</p>
        <p>Replaced: light bulbs, fuel filter, carburetor, heater hose</p>
      </div>
    </div>
    </>
  );
}

export default MechanicalHistory;
