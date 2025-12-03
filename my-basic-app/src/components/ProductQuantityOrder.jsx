import { useState } from "react";

const ProductQuantity = ({ name, price }) => {
  const [qty, setQty] = useState(1);

  return (
    <div className="container my-4">
      <div className="row justify-content-center">

        <div className="col-md-12 card p-4 shadow">

          <h3>{name}</h3>
          <p>Price: ₹{price}</p>

          {/* Quantity Row ( +  qty  - ) */}
          <div className="d-flex align-items-center justify-content-between mt-3">

            {/* + Button */}
            <button
              className="btn btn-success"
              style={{ width: "60px" }}
              onClick={() => setQty(qty + 1)}
            >
              +
            </button>

            {/* Quantity in Middle */}
            <span
              className="fw-bold"
              style={{
                fontSize: "1.5rem",
                minWidth: "50px",
                textAlign: "center"
              }}
            >
              {qty}
            </span>

            {/* - Button */}
            <button
              className="btn btn-danger"
              style={{ width: "60px" }}
              onClick={() => qty > 1 && setQty(qty - 1)}
            >
              -
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductQuantity;

// import { useState } from "react";

// const ProductQuantity = ({ name, price }) => {
//   const [qty, setQty] = useState(1);

//   return (
//     <div className="card shadow-lg p-4 my-4" style={{ maxWidth: "350px" }}>
      
//       {/* Product Name */}
//       <h4 className="fw-bold text-primary text-center">{name}</h4>

//       {/* Price */}
//       <h5 className="text-success text-center mb-3">
//         ₹{price.toLocaleString()}
//       </h5>

//       {/* Quantity Section */}
//       <div className="d-flex justify-content-center align-items-center my-3">

//         {/* Decrease Button */}
//         <button
//           className="btn btn-outline-danger btn-lg rounded-circle"
//           onClick={() => qty > 1 && setQty(qty - 1)}
//         >
//           -
//         </button>

//         {/* Quantity Badge */}
//         <span
//           className="badge bg-dark mx-3"
//           style={{ fontSize: "1.3rem", padding: "10px 20px" }}
//         >
//           {qty}
//         </span>

//         {/* Increase Button */}
//         <button
//           className="btn btn-outline-success btn-lg rounded-circle"
//           onClick={() => setQty(qty + 1)}
//         >
//           +
//         </button>

//       </div>

//       {/* Total Price */}
//       <div className="text-center mt-3">
//         <h5 className="fw-bold">
//           Total: <span className="text-info">₹{(qty * price).toLocaleString()}</span>
//         </h5>
//       </div>
//     </div>
//   );
// };

// export default ProductQuantity;
