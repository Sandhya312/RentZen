import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          R RentZen
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Location
              </a>
              <ul className="dropdown-menu select_city ">
                <li>
                  <p>Noida</p>
                </li>
                <li>
                  <p>Bihar</p>
                </li>
                <li>
                  <p>Delhi</p>
                </li>
                <li>
                  <p>Pune</p>
                </li>
                <li>
                  <p>Noida</p>
                </li>
                <li>
                  <p>Noida</p>
                </li>
                <li>
                  <p>Noida</p>
                </li>
                <li>
                  <p>Noida</p>
                </li>
                <li>
                  <p>Pune</p>
                </li>
                <li>
                  <p>Pune</p>
                </li>
                <li>
                  <p>Pune</p>
                </li>
                <li>
                  <p>Pune</p>
                </li>
                <li>
                  <p>Pune</p>
                </li>
              </ul>
            </li>
            <li
              className="nav-item"
              style={{
                width: "60rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <form
                className="d-flex"
                role="search"
                style={{
                  width: "80%",
                }}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </li>

            <li className="nav-item cart-nav">
              <button className="btn btn-sm w-100 d-flex align-items-center justify-content-center cartBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart-dash"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
                <p>Cart</p>
              </button>
            </li>
            <li className="nav-item">
              <button className=" signupBtn btn btn-primary btn-sm">
                Signup/Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
