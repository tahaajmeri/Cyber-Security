import {
  FaFingerprint,
  FaEye,
  FaMicrochip,
  FaUserSecret
} from "react-icons/fa6";


function About() {

  return (

    <section className="page-section">

      <div className="container">

        <div className="page-title">

          <span>
            // IDENTITY_FILE
          </span>

          <h1>
            ABOUT <em>NEON//ROOT</em>
          </h1>

          <p>
            A futuristic cybersecurity inspired
            frontend project created with React.
          </p>

        </div>


        <div className="about-grid">


          <div className="terminal">

            <div className="terminal-header">

              <b>
                identity.log
              </b>

              <span>
                READ_ONLY
              </span>

            </div>


            <pre>

{`> loading profile...

> designation: NEON//ROOT
> clearance: FRONTEND
> specialty: UI / UX
> stack: REACT
> mission: BUILD
> threat_level: NONE
> status: ONLINE`}

            </pre>

          </div>


          <div className="about-points">


            <div className="about-point">

              <FaFingerprint />

              <div>

                <h3>
                  DIGITAL IDENTITY
                </h3>

                <p>
                  Unique cyber visual identity
                  using neon colors and terminal
                  inspired elements.
                </p>

              </div>

            </div>


            <div className="about-point">

              <FaEye />

              <div>

                <h3>
                  VISIBILITY
                </h3>

                <p>
                  Status indicators and dashboard
                  components make information easy
                  to understand.
                </p>

              </div>

            </div>


            <div className="about-point">

              <FaMicrochip />

              <div>

                <h3>
                  MODERN STACK
                </h3>

                <p>
                  React, React Router, CSS and
                  reusable components.
                </p>

              </div>

            </div>


            <div className="about-point">

              <FaUserSecret />

              <div>

                <h3>
                  FICTIONAL SECURITY
                </h3>

                <p>
                  This is a frontend concept and
                  does not perform real hacking.
                </p>

              </div>

            </div>


          </div>

        </div>

      </div>

    </section>

  );
}

export default About; 