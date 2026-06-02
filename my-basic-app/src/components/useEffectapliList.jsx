// import { useState, useEffect } from "react";

// function UserList() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//         console.log("hii"); // UI update
//       });
//   }, []);

//   return (
//     <div>
//       <h2>User List</h2>

//       <table className="border">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Website</th>
//           </tr>
//         </thead>

//         <tbody>
//           {users.map((u) => (
//             <tr key={u.id}>
//               <td>{u.name}</td>
//               <td>{u.email}</td>
//               <td>{u.phone}</td>
//               <td>{u.website}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default UserList;
import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        // setProducts(data.products.slice(0, 15));
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Product List</h2>

      <div className="row">
        {products.map((p) => (
          <div className="col-md-4 mb-4" key={p.id}>
            <div className="card h-100 shadow">
              
              <img
                src={p.thumbnail}
                className="card-img-top p-3"
                alt={p.title}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>

                <p className="card-text">
                  <strong>Category:</strong> {p.category}
                </p>

                <p className="card-text">
                  <strong>Price:</strong> ${p.price}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;