  // Example1
  // const Function_Example = () => {
  //     function getName(){
  //         return "anand ogale";
  //     }
  //   return (
  //  <div className="container my-5">
  //     <h1>Function Example1</h1>
  //      <h1>Hello {getName()}</h1>
  //     </div>
  //   )
  // };

  // export default Function_Example;

  // Example2
//   const Function_Example = () => {
//       const getName = (yourname) => {
//           return yourname;
//       }
//       const name = "deepak";
//       const name2 = "saurabh";
//     return (
//   <div className="container my-5">
//     <h1>Function Example2</h1>
//       <h1>Hello {getName(name)}</h1>
//         <h1>Hello {getName(name2)}</h1>
//       </div>
//     )
      
  
//   };
// export default Function_Example;

const Function_Example = () => {

    const add = (a, b) => {
        return a + b;
    }

    return (
        <div className="container my-5">
            <h1>Addition Example</h1>

            <h2>10 + 20 = {add(10, 20)}</h2>

            <h2>50 + 30 = {add(50, 30)}</h2>
        </div>
    )
}

export default Function_Example;
