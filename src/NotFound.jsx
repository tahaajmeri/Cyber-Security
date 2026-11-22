import { Link } from "react-router-dom";

function NotFound() {

  return (

    <section className="page-section not-found">

      <div className="container">

        <span>
          // ERROR_404
        </span>

        <h1>
          ACCESS <em>DENIED</em>
        </h1>

        <p>
          The requested route does not exist.
        </p>


        <Link
          to="/"
          className="btn-neon"
        >
          RETURN HOME
        </Link>

      </div>

    </section>

  );
}

export default NotFound;