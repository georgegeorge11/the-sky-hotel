import { Link } from "react-router-dom"


export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-light border-top py-3">
    <div className="container d-flex flex-wrap justify-content-between align-items-center">
      <div className="col-md-4 d-flex align-items-center">
        <span className="text-muted">
          © {year}, Since 2024 | Powered by React + Bootstrap
        </span>
      </div>
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <Link to="/terms" className="nav-link px-2 text-muted">
            Terms and Conditions
          </Link>
        </li>
        <li className="nav-item">
          <a
            target="_blank"
            className="nav-link px-2 text-muted"
          >
            Developed by Florin
          </a>
        </li>
      </ul>
    </div>
  </footer>
  );
}
