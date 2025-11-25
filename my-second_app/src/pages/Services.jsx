const Services = () => {
  return (
    <div className="container my-5">
      <h1 className="text-primary fw-bold mb-4">Our Services</h1>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4>Web Development</h4>
              <p>React, Bootstrap, JavaScript Projects</p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4>UI/UX Design</h4>
              <p>Modern and responsive layouts</p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4>Mobile Apps</h4>
              <p>React Native cross-platform apps</p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
