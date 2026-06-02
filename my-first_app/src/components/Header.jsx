// src/components/Header.jsx
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">MyReactApp</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse fw-bold" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
// import { useState } from "react";

// const Header = () => {

//   const [activeMenu, setActiveMenu] = useState("home");

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
//       <div className="container">

//         <a className="navbar-brand fw-bold" href="#">
//           MyReactApp
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#menu"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse fw-bold" id="menu">

//           <ul className="navbar-nav ms-auto">

//             <li className="nav-item">
//               <a
//                 className={`nav-link ${activeMenu === "home" ? "active" : ""}`}
//                 href="#home"
//                 onClick={() => setActiveMenu("home")}
//               >
//                 Home
//               </a>
//             </li>

//             <li className="nav-item">
//               <a
//                 className={`nav-link ${activeMenu === "about" ? "active" : ""}`}
//                 href="#about"
//                 onClick={() => setActiveMenu("about")}
//               >
//                 About
//               </a>
//             </li>

//             <li className="nav-item">
//               <a
//                 className={`nav-link ${activeMenu === "services" ? "active" : ""}`}
//                 href="#services"
//                 onClick={() => setActiveMenu("services")}
//               >
//                 Services
//               </a>
//             </li>

//             <li className="nav-item">
//               <a
//                 className={`nav-link ${activeMenu === "contact" ? "active" : ""}`}
//                 href="#contact"
//                 onClick={() => setActiveMenu("contact")}
//               >
//                 Contact
//               </a>
//             </li>

//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
