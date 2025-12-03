import { useRef, useState } from "react";

function UncontrolledForm() {
  // Refs for all inputs
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cityRef = useRef();
  const maleRef = useRef();
  const femaleRef = useRef();
  const agreeRef = useRef();

  const [errors, setErrors] = useState({});

  // Validation
  const validate = (data) => {
    let error = {};

    if (!data.fullName.trim()) {
      error.fullName = "Full Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email) {
      error.email = "Email is required";
    } else if (!emailRegex.test(data.email)) {
      error.email = "Invalid email format";
    }

    const passRegex = /^(?=.*[0-9]).{6,}$/;
    if (!data.password) {
      error.password = "Password is required";
    } else if (!passRegex.test(data.password)) {
      error.password = "Min 6 chars & must include a number";
    }

    if (!data.city) {
      error.city = "Please select a city";
    }

    if (!data.gender) {
      error.gender = "Please select gender";
    }

    if (!data.agree) {
      error.agree = "You must accept terms & conditions";
    }

    setErrors(error);
    return Object.keys(error).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Read values from DOM
    const formData = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      city: cityRef.current.value,
      gender: maleRef.current.checked
        ? "Male"
        : femaleRef.current.checked
        ? "Female"
        : "",
      agree: agreeRef.current.checked,
    };

    if (validate(formData)) {
      console.log(formData);
      alert("Form Submitted Successfully (Uncontrolled) ✔");
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "500px" }}>
      <h3 className="text-center mb-3">Uncontrolled Form Example</h3>

      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">

        {/* Full Name */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            ref={fullNameRef}
            className={`form-control ${errors.fullName ? "is-invalid" : " "}`}
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
            ref={emailRef}
            className={`form-control ${errors.email ? "is-invalid" : " "}`}
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
            ref={passwordRef}
            className={`form-control ${errors.password ? "is-invalid" : " "}`}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        {/* City */}
        <div className="mb-3">
          <label className="form-label">Select City</label>
          <select
            ref={cityRef}
            className={`form-select ${errors.city ? "is-invalid" : " "}`}
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

          <input type="radio" name="gender" value="Male" ref={maleRef} /> Male<br />
          <input type="radio" name="gender" value="Female" ref={femaleRef} /> Female

          {errors.gender && (
            <div className="text-danger small mt-1">{errors.gender}</div>
          )}
        </div>

        {/* Checkbox */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className={`form-check-input ${
              errors.agree ? "is-invalid" : " "
            }`}
            ref={agreeRef}
          />
          <label className="form-check-label">
            I Agree to Terms & Conditions
          </label>
          {errors.agree && (
            <div className="invalid-feedback">{errors.agree}</div>
          )}
        </div>

        <button className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;

// import { useRef } from "react";

// function UncontrolledForm() {
//   // Refs for inputs
//   const fullNameRef = useRef();
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const cityRef = useRef();
//   const maleRef = useRef();
//   const femaleRef = useRef();
//   const agreeRef = useRef();

//   // Refs for error messages
//   const fullNameErr = useRef();
//   const emailErr = useRef();
//   const passwordErr = useRef();
//   const cityErr = useRef();
//   const genderErr = useRef();
//   const agreeErr = useRef();

//   // Helper → clear all previous errors
//   const clearErrors = () => {
//     fullNameErr.current.innerText = "";
//     emailErr.current.innerText = "";
//     passwordErr.current.innerText = "";
//     cityErr.current.innerText = "";
//     genderErr.current.innerText = "";
//     agreeErr.current.innerText = "";
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     clearErrors();

//     let isValid = true;

//     const fullName = fullNameRef.current.value.trim();
//     const email = emailRef.current.value;
//     const password = passwordRef.current.value;
//     const city = cityRef.current.value;
//     const gender = maleRef.current.checked
//       ? "Male"
//       : femaleRef.current.checked
//       ? "Female"
//       : "";
//     const agree = agreeRef.current.checked;

//     // Full Name
//     if (!fullName) {
//       fullNameErr.current.innerText = "Full Name is required";
//       isValid = false;
//     }

//     // Email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email) {
//       emailErr.current.innerText = "Email is required";
//       isValid = false;
//     } else if (!emailRegex.test(email)) {
//       emailErr.current.innerText = "Invalid email";
//       isValid = false;
//     }

//     // Password
//     const passRegex = /^(?=.*[0-9]).{6,}$/;
//     if (!password) {
//       passwordErr.current.innerText = "Password is required";
//       isValid = false;
//     } else if (!passRegex.test(password)) {
//       passwordErr.current.innerText =
//         "Min 6 chars & must include a number";
//       isValid = false;
//     }

//     // City
//     if (!city) {
//       cityErr.current.innerText = "Please select a city";
//       isValid = false;
//     }

//     // Gender
//     if (!gender) {
//       genderErr.current.innerText = "Please select gender";
//       isValid = false;
//     }

//     // Agree to Terms
//     if (!agree) {
//       agreeErr.current.innerText = "You must accept T&C";
//       isValid = false;
//     }

//     if (isValid) {
//       alert("Form Submitted Successfully ✔ (Uncontrolled + useRef)");
//       console.log({
//         fullName,
//         email,
//         password,
//         city,
//         gender,
//         agree,
//       });
//     }
//   };

//   return (
//     <div className="container mt-4" style={{ maxWidth: "500px" }}>
//       <h3 className="text-center mb-3">Uncontrolled Form (useRef + DOM Validation)</h3>

//       <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">

//         {/* Full Name */}
//         <div className="mb-3">
//           <label className="form-label">Full Name</label>
//           <input type="text" ref={fullNameRef} className="form-control" />
//           <small ref={fullNameErr} className="text-danger"></small>
//         </div>

//         {/* Email */}
//         <div className="mb-3">
//           <label className="form-label">Email Address</label>
//           <input type="email" ref={emailRef} className="form-control" />
//           <small ref={emailErr} className="text-danger"></small>
//         </div>

//         {/* Password */}
//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input type="password" ref={passwordRef} className="form-control" />
//           <small ref={passwordErr} className="text-danger"></small>
//         </div>

//         {/* City */}
//         <div className="mb-3">
//           <label className="form-label">Select City</label>
//           <select ref={cityRef} className="form-select">
//             <option value="">Choose City</option>
//             <option value="Mumbai">Mumbai</option>
//             <option value="Pune">Pune</option>
//             <option value="Nashik">Nashik</option>
//           </select>
//           <small ref={cityErr} className="text-danger"></small>
//         </div>

//         {/* Gender */}
//         <div className="mb-3">
//           <label className="form-label">Gender</label> <br />
//           <input type="radio" name="gender" ref={maleRef} /> Male <br />
//           <input type="radio" name="gender" ref={femaleRef} /> Female
//           <br />
//           <small ref={genderErr} className="text-danger"></small>
//         </div>

//         {/* Checkbox */}
//         <div className="mb-3 form-check">
//           <input type="checkbox" ref={agreeRef} className="form-check-input" />
//           <label className="form-check-label">I Agree to Terms & Conditions</label>
//           <br />
//           <small ref={agreeErr} className="text-danger"></small>
//         </div>

//         <button className="btn btn-primary w-100">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default UncontrolledForm;
