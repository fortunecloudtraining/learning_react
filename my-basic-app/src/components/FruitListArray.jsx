function FruitListArray() {
    //array
  const fruits = ["Apple", "Banana", "Mango", "Orange"]; // Array

  //   Using Spread Operator
   const vegetable1 = ["Palak", "Methi", "Dhaniya"];
   const vegetable2 = ["Carrot", "Tomato", "Onion"];
  const combinedItems = [...vegetable1, ...vegetable2];  // BEST way
  //const combinedItems = vegetable1.concat(vegetable2);

   // Array of Objects
   const students = [
    { id: 1, name: "Deepak", age: 20 },
    { id: 2, name: "Saurabh", age: 22 },
    { id: 3, name: "Rahul", age: 21 },
  ]; 
  return (
    <div className="container my-4">
      <h2>Fruit List (Array Example)</h2>
 {/* curent value and current position */}
      <ul>
        {fruits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr/>

      <h2>Combined Array Example</h2>
      <ul>
        {combinedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

     <hr/>
      <h2>Student List (Array of Objects Example)</h2>

      {students.map((student) => (
        <div key={student.id} className=" col-md-3 p-2 border my-2 rounded">
          <h4>Name: {student.name}</h4>
          <p>Age: {student.age}</p>
        </div>
      ))}
    </div>
  );
}

export default FruitListArray;

// map():

// loops through array
// returns new JSX elements
// mostly used for dynamic UI rendering in React
// const Filter_Example = () => {

//   const names = ["Anand", "Rahul", "Amit", "Sneha"];

//   const result = names.filter((name) => {
//     return name.startsWith("A");
//   });

//   return (
//     <div className="container my-5">

//       <h1>Filter Example</h1>

//       {result.map((item, index) => (
//         <h3 key={index}>{item}</h3>
//       ))}

//     </div>
//   );
// };

// export default Filter_Example;