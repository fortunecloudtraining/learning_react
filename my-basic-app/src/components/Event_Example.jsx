const Event_Example =() => {

  // Arrow function event handler
  const showMessage = () => {
    alert("Button was clicked!");
  };
    const showMessage2 = (name2) => {
    alert("Hello " + name2);
  };

  const handleInput =(event)=>{
    console.clear();
   console.log("Value : " + event.target.value)
  }
  const handleMouseOver = () =>console.log("Mouse is hover on tex");
  const handleDblClick = () =>console.log("Mouse is double click");

  return (
    <div className="container my-5">
      <h2>Arrow Function Event Example</h2>

      <button className="btn btn-primary mt-3"onClick={showMessage}>
    Click Me
      </button>
      <button className="btn btn-primary mt-3" onClick={()=>alert("Hello welcome")}>On Click</button>

       <h2>Button Click With Parameter</h2>

      <button 
        className="btn btn-success mt-3"
        onClick={() => showMessage2("Deepak")}
      >
        Click Me
      </button>

      <h3>Enter Name</h3>
      <input type="text" onChange={handleInput} placeholder="Enter Name"/>

      <p onMouseOver={handleMouseOver} onDoubleClick={handleDblClick}>Hove on text and doble click</p>
    </div>
  );
}

export default Event_Example;
