// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <div className="container">
//         <Link className="navbar-brand fw-bold" to="/">MyReactApp</Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#menu"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="menu">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <NavLink className="navbar-brand fw-bold" to="/">MyReactApp</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link activeLink" : "nav-link active"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link activeLink" : "nav-link active"
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "nav-link activeLink" : "nav-link active"
                }
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link activeLink" : "nav-link active"
                }
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Header;

