const Contact = () => {
  return (
    <div className="container my-5">
      <h1 className="text-primary fw-bold mb-4">Contact Us</h1>

      <div className="card shadow p-4 col-md-6 mx-auto">

        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea rows="4" className="form-control"></textarea>
          </div>

          <button className="btn btn-primary w-100">Send Message</button>
        </form>

      </div>

    </div>
  );
};

export default Contact;
