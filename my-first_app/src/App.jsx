// src/App.jsx
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "./assets/css/anand.css"

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
       <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
