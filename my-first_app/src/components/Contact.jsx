// src/components/Contact.jsx

const Contact = () => {
  return (
    <div id="contact" className="container my-5">
      <h2 className="text-center fw-bold mb-4">Contact Us</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow-sm">
            <div className="card-body">

              <form>
                <div className="mb-3">
                  <label className="form-label fw-bold">Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Message</label>
                  <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
                </div>

                <button className="btn btn-primary w-100">Send Message</button>
              </form>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;
