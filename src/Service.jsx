import { Link } from "react-router-dom";

import {
  FaShieldHalved,
  FaCode,
  FaServer,
  FaChartLine,
  FaArrowRight
} from "react-icons/fa6";


function Services() {

  const services = [

    {
      icon: <FaShieldHalved />,
      title: "SECURITY UI",
      text: "Cybersecurity dashboards, alert panels and security interfaces."
    },

    {
      icon: <FaCode />,
      title: "FRONTEND DEVELOPMENT",
      text: "Modern React websites with reusable components and routing."
    },

    {
      icon: <FaServer />,
      title: "SYSTEM DASHBOARD",
      text: "Terminal inspired administration and monitoring interfaces."
    },

    {
      icon: <FaChartLine />,
      title: "DATA VISUALIZATION",
      text: "Beautiful metrics, logs, cards and system status components."
    }

  ];


  return (

    <section className="page-section">

      <div className="container">

        <div className="page-title">

          <span>
            // AVAILABLE_MODULES
          </span>

          <h1>
            SYSTEM <em>SERVICES</em>
          </h1>

          <p>
            Explore our fictional cyber modules.
          </p>

        </div>


        <div className="services-grid">


          {services.map((service, index) => (

            <div
              className="service-card"
              key={index}
            >

              <span className="service-number">
                0{index + 1}
              </span>


              <div className="service-icon">
                {service.icon}
              </div>


              <h2>
                {service.title}
              </h2>


              <p>
                {service.text}
              </p>


              <Link to="/contact">

                INITIALIZE

                <FaArrowRight />

              </Link>

            </div>

          ))}


        </div>

      </div>

    </section>

  );
}

export default Services;