// src/components/Services.jsx

const Services = () => {
  return (
    <div id="services" className="container my-5 ">
      <h2 className="text-center fw-bold mb-4">Our Services</h2>

      <div className="row g-4">
           <h2 className="hello anand">dinesh</h2>
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title fw-bold">Web Development</h5>
              <p className="card-text">
                Build responsive and modern web applications using React.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title fw-bold">UI/UX Design</h5>
              <p className="card-text">
                Beautiful designs using Bootstrap, Figma and modern trends.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title fw-bold">Mobile Apps</h5>
              <p className="card-text">
                Create cross-platform apps using React Native.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
