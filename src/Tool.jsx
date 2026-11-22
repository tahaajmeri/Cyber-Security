import { useState } from "react";

import {
  FaTerminal,
  FaKey,
  FaCircleCheck,
  FaTriangleExclamation
} from "react-icons/fa6";


function Tools() {

  const [command, setCommand] = useState("");

  return (

    <section className="page-section">

      <div className="container">

        <div className="page-title">

          <span>
            // LOCAL_TOOLKIT
          </span>

          <h1>
            CYBER <em>TOOLS</em>
          </h1>

          <p>
            Safe frontend demonstration tools.
          </p>

        </div>


        <div className="tools-grid">


          {/* TERMINAL */}

          <div className="tool-card">

            <h3>
              <FaTerminal />
              TERMINAL SIMULATOR
            </h3>


            <div className="fake-terminal">

              <p>
                <span>$</span> help
              </p>

              <p>
                Available commands:
              </p>

              <p className="green">
                status
              </p>

              <p className="green">
                about
              </p>

              <p className="green">
                clear
              </p>


              <div className="command-input">

                <span>$</span>

                <input
                  type="text"
                  value={command}
                  onChange={(e) =>
                    setCommand(e.target.value)
                  }
                  placeholder="type command..."
                />

              </div>

            </div>

          </div>


          {/* PASSWORD */}

          <div className="tool-card">

            <h3>
              <FaKey />
              PASSWORD DEMO
            </h3>


            <input
              type="password"
              className="cyber-input"
              placeholder="••••••••••"
            />


            <div className="password-bars">

              <i></i>
              <i></i>
              <i></i>
              <i></i>

            </div>


            <p>
              Visual password strength demo.
            </p>

          </div>


          {/* HEALTH */}

          <div className="tool-card">

            <h3>
              <FaCircleCheck />
              SYSTEM HEALTH
            </h3>


            <div className="health-row">
              <span>Core</span>
              <b className="green">ONLINE</b>
            </div>

            <div className="health-row">
              <span>Database</span>
              <b className="green">ONLINE</b>
            </div>

            <div className="health-row">
              <span>Firewall</span>
              <b className="green">ACTIVE</b>
            </div>

            <div className="health-row">
              <span>Threat Engine</span>
              <b className="yellow">DEMO</b>
            </div>

          </div>


          {/* LOG */}

          <div className="tool-card">

            <h3>
              <FaTriangleExclamation />
              EVENT LOG
            </h3>


            <div className="log">
              15:03:11 &nbsp; auth.service
              <span className="green">
                OK
              </span>
            </div>

            <div className="log">
              15:03:19 &nbsp; ui.router
              <span className="green">
                OK
              </span>
            </div>

            <div className="log">
              15:03:27 &nbsp; demo.alert
              <span className="yellow">
                TEST
              </span>
            </div>

          </div>


        </div>

      </div>

    </section>

  );
}

export default Tools;