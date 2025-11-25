// src/components/Home.jsx
import ReactLogo from "../assets/react.svg";
// import "../assets/css/anand.css"
// import "../App.css";
import style from "../components/Home.module.css"; 
const headingColor = {
    color:"red",
    backgroundColor:"yellow",
    fontSize:"50"
}

const Home = () => {
    const paraColor = {
    color:"blue",
    backgroundColor:"aqua",
    fontSize:"20",
    border: "3px solid red",
    padding:"10",
}
  return (

    <div id="home"  className="container my-5">
      <div className="row align-items-center">
        <h5 className={style.heading5}>i am from pune</h5>
        <div className="col-md-6">
          <h1  style={headingColor} >Welcome to React UI</h1>
          <h2 className="hello anand">pramod</h2>
          <p style={{color:"blue",backgroundColor:"aqua"}} className="lead">
            This is a beautiful landing page created using Bootstrap & React Functional Components.
          </p>
          <p style={paraColor}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis provident ipsam. Numquam voluptatem nemo expedita quaerat mollitia repellat consectetur optio culpa laudantium molestiae tenetur beatae amet illum, ducimus atque.</p>

          <button className="btn btn-primary btn-lg me-2">Get Started</button>
          <button className="btn btn-outline-primary btn-lg">Learn More</button>
        </div>

        <div className="col-md-6 text-center">
          <img 
            src={ReactLogo}
            className="img-fluid rounded shadow w-100"
            alt="React UI"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
