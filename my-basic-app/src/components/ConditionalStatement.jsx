const ConditionalStatement = () =>{
     const age = 111;
     const isAdmin = true;
    const hasPermission = true;

function Admin() {
  return <h4>Admin Panel</h4>;
}
function User() {
  return <h4>User Dashboard</h4>;
}
 const isAdminOrUser = false;

 const items = [];

  const marks = 25;

     return (
        <>
        
    <div className="container">
    <h3>Ex1 - Simple if condition (variable based)</h3>
      <h4>Your Age: {age}</h4>

      {age >= 18 ? <p>You are an Adult</p> : <p>You are a Minor</p>}
      <hr />
    <h3>Ex2 - Show only if condition is true (&& operator)</h3>
    {isAdmin && <p>Welcome Admin ✔</p>}
     <hr />
    <h3>Example 3 — Hide content based on condition</h3>
    <div>
      {hasPermission ? <p>Access Granted</p> : <p>Access Denied</p>}
    </div>
    <hr />
  <div>
    <h3>Example 4 - Render different components based on condition</h3>
      {isAdminOrUser ? <Admin /> : <User />}
    </div>
     <hr />
     <h3>Example 5 -Render only if an array has items</h3>
        <div>
      <h4>Items</h4>

      {items.length > 0 ? (
        <p>You have {items.length} items.</p>
      ) : (
        <p>No items found.</p>
      )}
    </div>
    <hr />
    <h2>Marks Result</h2>

      <p
        style={{
          color: marks >= 35 ? "green" : "red",
          fontWeight: "bold",
          fontSize: "20px"
        }}
      >
        {marks >= 35 ? "Pass" : "Fail"}
      </p>

    </div>
    

        </>
    );
};
export default ConditionalStatement



// function App() {
//   const role = "manager";

//   let message;

//   if (role === "admin") {
//     message = "Admin Access Granted";
//   } 
//   else if (role === "manager") {
//     message = "Manager Access Granted";
//   } 
//   else if (role === "teacher") {
//     message = "Teacher Access Granted";
//   } 
//   else {
//     message = "Normal User Access";
//   }

//   return (
//     <div>
//       <h2>{message}</h2>
//     </div>
//   );
// }

// export default App;
