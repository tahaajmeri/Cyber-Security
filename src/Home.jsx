import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaLock,
  FaBug,
  FaNetworkWired,
  FaCode,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa6";


function Home() {

  const slides = [

    {
      number: "01",
      title: "THINK LIKE",
      green: "A HACKER.",
      text: "Build modern cybersecurity inspired interfaces with React."
    },

    {
      number: "02",
      title: "MONITOR.",
      green: "ANALYZE.",
      text: "Explore a futuristic security operations dashboard."
    },

    {
      number: "03",
      title: "CODE BEYOND",
      green: "THE FIREWALL.",
      text: "Create powerful frontend experiences with modern technology."
    }

  ];


  const [slide, setSlide] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setSlide((old) => (old + 1) % slides.length);

    }, 5000);

    return () => clearInterval(timer);

  }, []);


  const previous = () => {

    setSlide(
      (slide - 1 + slides.length) % slides.length
    );

  };


  const next = () => {

    setSlide(
      (slide + 1) % slides.length
    );

  };


  return (

    <>

      {/* HERO */}

      <section className="hero">

        <div className="container hero-container">

          <div className="hero-content">

            <div className="eyebrow">

              <span className="online-dot"></span>

              SYSTEM ONLINE // {slides[slide].number}

            </div>


            <h1>

              {slides[slide].title}

              <br />

              <span>
                {slides[slide].green}
              </span>

            </h1>


            <p>
              {slides[slide].text}
            </p>


            <div className="hero-buttons">

              <Link
                to="/services"
                className="btn-neon"
              >
                EXPLORE SYSTEM
                <FaArrowRight />
              </Link>


              <Link
                to="/about"
                className="btn-outline"
              >
                READ MANIFESTO
              </Link>

            </div>


            <div className="command-line">

              root@neon:~$ system_status

              <span>_</span>

            </div>

          </div>


          {/* TERMINAL */}

          <div className="terminal">

            <div className="terminal-header">

              <span>● ● ●</span>

              <b>
                security_console
              </b>

              <span>
                v2.6
              </span>

            </div>


            <div className="terminal-body">

              <p>
                <span>$</span> booting neon-root...
              </p>

              <p className="green">
                [OK] firewall online
              </p>

              <p className="green">
                [OK] encryption layer ready
              </p>

              <p className="yellow">
                [!] 03 demo alerts detected
              </p>

              <p>
                <span>$</span> system scan
              </p>


              <div className="progress">

                <div></div>

              </div>


              <p className="green">
                SCAN COMPLETE — 100%
              </p>


              <div className="terminal-stats">

                <div>
                  <strong>128</strong>
                  <small>NODES</small>
                </div>

                <div>
                  <strong>24</strong>
                  <small>LOGS</small>
                </div>

                <div>
                  <strong>0</strong>
                  <small>BREACHES</small>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* SLIDER BUTTONS */}

        <div className="slider-buttons">

          <button onClick={previous}>
            <FaChevronLeft />
          </button>


          {slides.map((item, index) => (

            <button
              key={index}
              onClick={() => setSlide(index)}
              className={
                index === slide ? "slider-active" : ""
              }
            >
              {item.number}
            </button>

          ))}


          <button onClick={next}>
            <FaChevronRight />
          </button>

        </div>

      </section>


      {/* FEATURES */}

      <section className="section">

        <div className="container">

          <div className="section-title">

            <span>
              // CORE_MODULES
            </span>

            <h2>
              CYBER <em>FEATURES</em>
            </h2>

          </div>


          <div className="feature-grid">


            <div className="feature-card">

              <div className="feature-icon">
                <FaLock />
              </div>

              <h3>
                SECURE UI
              </h3>

              <p>
                Dark glass panels and futuristic
                cybersecurity inspired design.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                <FaNetworkWired />
              </div>

              <h3>
                NETWORK
              </h3>

              <p>
                Visual network monitoring interface
                with system status information.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                <FaBug />
              </div>

              <h3>
                THREAT LAB
              </h3>

              <p>
                Fictional security alerts and threat
                monitoring components.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                <FaCode />
              </div>

              <h3>
                REACT CORE
              </h3>

              <p>
                Built with React components and
                React Router navigation.
              </p>

            </div>


          </div>

        </div>

      </section>


      {/* STATS */}

      <section className="stats">

        <div className="container stats-grid">

          <div>
            <strong>05</strong>
            <span>PAGES</span>
          </div>

          <div>
            <strong>20+</strong>
            <span>COMPONENTS</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>RESPONSIVE</span>
          </div>

          <div>
            <strong>0</strong>
            <span>REAL ATTACKS</span>
          </div>

        </div>

      </section>

    </>

  );
}

export default Home;