// src/components/About.jsx
import ReactLogo from "../assets/react.svg";
const About = () => {
  return (
    <>
    <section className="mt-5">
    
    
    <div id="about" className="container my-5  mt-5">

      <div className="row align-items-center">

        <div className="col-md-6">
          <img
            src={ReactLogo}
            alt="About"
            className="img-fluid rounded shadow w-100"
          />
        </div>

        <div className="col-md-6">
       <h5 className="heading5">i am from pune</h5>
          <h2 className="fw-bold">About Us</h2>
          <p className="lead">
            We are passionate developers teaching React, JavaScript, 
            and full-stack development using simple examples.
          </p>

          <p>
            Our goal is to make learning easy and enjoyable for every student 
            with real-world examples and hands-on projects.
          </p>

          <button className="btn btn-outline-primary btn-lg">Read More</button>
        </div>

      </div>

    </div>
    </section>
    </>
  );
};

export default About;
