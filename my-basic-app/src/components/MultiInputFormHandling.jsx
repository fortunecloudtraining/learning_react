import { useState } from "react";

function ControlledFormWithValidation() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    city: "",
    gender: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    //  const { name, value, type, checked } = e.target;
    const { name, value} = e.target;

    setForm({
      ...form,
      [name]: value,
    //    [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validation Logic
  const validate = () => {
    let error = {};

    // Full Name
    if (!form.fullName.trim()) {
      error.fullName = "Full Name is required";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      error.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      error.email = "Invalid email format";
    }

    // Password
    const passRegex = /^(?=.*[0-9]).{6,}$/;
    if (!form.password) {
      error.password = "Password is required";
    } else if (!passRegex.test(form.password)) {
      error.password = "Min 6 chars & must include one number";
    }

    // City
    if (!form.city) {
      error.city = "Please select a city";
    }

    // Gender
    if (!form.gender) {
      error.gender = "Please select gender";
    }

    // Checkbox
    // if (!form.agree) {
    //   error.agree = "You must accept terms & conditions";
    // }

    setErrors(error);

    return Object.keys(error).length === 0;
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully ✔");
      console.log(form);
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "500px" }}>
      <h3 className="text-center mb-3">Controlled Form with Validation</h3>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">

        {/* Full Name */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <div className="invalid-feedback">{errors.fullName}</div>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        {/* City */}
        <div className="mb-3">
          <label className="form-label">Select City</label>
          <select
            className={`form-select ${errors.city ? "is-invalid" : ""}`}
            name="city"
            value={form.city}
            onChange={handleChange}
          >
            <option value="">Choose City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Nashik">Nashik</option>
          </select>

          {errors.city && (
            <div className="invalid-feedback">{errors.city}</div>
          )}
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label">Gender</label> <br />

          <input
            type="radio"
            name="gender"
            value="Male"
            checked={form.gender === "Male"}
            onChange={handleChange}
          />{" "}
          Male <br />

          <input
            type="radio"
            name="gender"
            value="Female"
            checked={form.gender === "Female"}
            onChange={handleChange}
          />{" "}
          Female

          {errors.gender && (
            <div className="text-danger small mt-1">{errors.gender}</div>
          )}
        </div>

        {/* Checkbox */}
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className={`form-check-input ${
              errors.agree ? "is-invalid" : ""
            }`}
            name="agree"
            checked={form.agree}
            onChange={handleChange}
          />

          <label className="form-check-label">
            I Agree to Terms & Conditions
          </label>

          {errors.agree && (
            <div className="invalid-feedback">{errors.agree}</div>
          )}
        </div> */}

        <button className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}

export default ControlledFormWithValidation;
