// const Student = (props) => {
//   return (
//     <div>
//       <h3>Name: {props.name}</h3>
//       <p>Age: {props.age}</p>
//       <p>City: {props.city}</p>
//       <hr />
//     </div>
//   );
// };
// export default Student;
const Student = ({ name, age, city }) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <hr />
    </div>
  );
};



export default Student;