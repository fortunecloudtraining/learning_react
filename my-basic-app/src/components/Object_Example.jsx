function UserCard() {
  const user = {
    name: "Anand",
    city: "Mumbai",
    profession: "Developer",
  }; // Single Object
   const user2 = {
    name: "Mahesh",
    city: "Pune",
    profession: "Manager",
  }; // Single Object

  //Object with Nested Object Example
   const employee = {
    name: "Amit",
    department: "IT",
    address: {
      city: "Nashik",
      pincode: 422001
    }
  };

  //Array of Nested Objects Example (Most Powerful)
  const products = [
    {
      id: 101,
      name: "Laptop",
      price: 45000,
      specs: { ram: "8GB", storage: "512GB SSD" }
    },
    {
      id: 102,
      name: "Mobile",
      price: 20000,
      specs: { ram: "4GB", storage: "128GB" }
    }
    
  ];

  return (
    <>
    <div className="container my-4 p-3 border rounded">
      <h2>User Details (Object Example)</h2>

      <p><b>Name:</b> {user.name}</p>
      <p><b>City:</b> {user.city}</p>
      <p><b>Profession:</b> {user.profession}</p>
      <h2>User2 Details (Object Example)</h2>

      <p><b>Name:</b> {user2.name}</p>
      <p><b>City:</b> {user2.city}</p>
      <hr />
 
      <h2>Nested Object Example</h2>

      <p>Name: {employee.name}</p>
      <p>Department: {employee.department}</p>
      <p>City: {employee.address.city}</p>
      <p>Pincode: {employee.address.pincode}</p>

      <hr />
       <h2>Complex Object in Array Example</h2>

      {products.map((p) => (
        <div key={p.id} className="border p-3 my-2 rounded">
          <h3>{p.id}</h3>
          <p>Price: {p.price}</p>
          <p>RAM: {p.specs.ram}</p>
          <p>Storage: {p.specs.storage}</p>
        </div>
      ))}

    </div>
   
   </>

  );
}

export default UserCard;
