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

const Function_Example = () => {
    const getName = (yourname) => {
        return yourname;
    }
    const name = "deepak";
    const name2 = "saurabh";
  return (
 <div className="container my-5">
   <h1>Function Example2</h1>
     <h1>Hello {getName(name)}</h1>
      <h1>Hello {getName(name2)}</h1>
    </div>
  )
    
 
};

export default Function_Example;
