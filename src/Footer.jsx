import {
  FaGithub,
  FaDiscord,
  FaXTwitter,
  FaShieldHalved
} from "react-icons/fa6";

function Footer() {

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          <div>

            <div className="footer-logo">
              <span>
                <FaShieldHalved />
              </span>

              NEON<span>//</span>ROOT
            </div>

            <p>
              Cybersecurity inspired frontend interface
              built with React.
            </p>

          </div>


          <div>

            <h6>SYSTEM STATUS</h6>

            <p className="status">
              <i></i>
              All systems operational
            </p>

            <p>Uptime: 99.99%</p>

          </div>


          <div>

            <h6>CONNECT</h6>

            <div className="social-icons">

              <a href="https://github.com" target="_blank">
                <FaGithub />
              </a>

              <a href="https://discord.com" target="_blank">
                <FaDiscord />
              </a>

              <a href="https://x.com" target="_blank">
                <FaXTwitter />
              </a>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          © 2026 NEON//ROOT

          <span>
            ACCESS_GRANTED
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;