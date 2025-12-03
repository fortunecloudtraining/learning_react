import reactLogo from './assets/react.svg'
import './App.css'
import Function_Example from './components/Function_Example'
import Event_Example from './components/Event_Example'
import FruitListArray from './components/FruitListArray'
import UserCard from './components/Object_Example'
import ConditionalStatement from './components/ConditionalStatement'
import Message from "./components/Message"
import Student from "./components/Student"
import Card from "./components/Card"
import {PassingNumberProps, PassingBoolean, PassingObject, Passingrarray, PassingFunction, PassingImage} from './components/PassingNumberProps'
import img1 from './assets/react.svg'
import Accordion from './components/Accordion'
import UseStateCounter from './components/UseStateCounter'
import InputExample from './components/useStateWithString'
import ToggleExample from './components/useStateWithBoolean'
import ArrayExample from './components/useStatewithArray'
import HideShow from './components/UsestateHideShow'
import ProductQuantity from './components/ProductQuantityOrder'
import LikeButton from './components/LikeButtonStateProps'
import LikeButtonInsta from './components/LikeButtonInsta'
import UseStateExample from './components/UseEffectCounter'
import UserList from './components/useEffectapliList'
import TimerExample from './components/TimerExample'
import SimpleForm from './components/SimpleTextInputHandling'
import MultiInputForm from './components/MultiInputFormHandling'
import LiveTime from './components/LiveTime'
import UncontrolledForm from './components/UseRefFormHandling'

function App() {
const student = { name: "Anand", age: 25, city: "Pune" };
const subjects = ["HTML", "CSS", "JavaScript"];
const showalert = () => {
  alert("Hello from Parent!");
};
  return (
    <>
    {/* <UseStateExample/>
    <UserList/>
    <TimerExample/>
    <LiveTime/> */}
    <SimpleForm/>
    <MultiInputForm/>
    <UncontrolledForm/>
    {/* <UseStateCounter/>
    <InputExample/>
    <ToggleExample/>
    <ArrayExample/>
    <HideShow/>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <ProductQuantity name="Samsung Phone" price={25000}/>
        </div>
        <div className="col-md-4">
           <ProductQuantity name="Vivo Phone" price={35000}/>
        </div>
         <div className="col-md-4">
           <ProductQuantity name="Nokia Phone" price={55000}/>
        </div>
      </div>
    </div>
    <div className="container mt-5 d-flex justify-content-center">
      <LikeButton title="React Tutorial Post" />
       <LikeButton title="anand Tutorial Post" />
      
    </div>
    
    */}

      {/* <h1>Welcomt to FCT</h1> */}
      {/* <Function_Example/>
      <Event_Example/> */}
      {/* <FruitListArray/> */}
      {/* <UserCard/> */}
      {/* <ConditionalStatement/> */}
      {/* <div className='container text-danger'>
        <h2>Passing STRING as props</h2>
        <Message text="Hello Students 👋" />
        <Message text="Welcome to React Props!" />
      </div>

      <div className='container text-primary'>
        <Student name="Anand" age={25} city="Pune" />
        <Student name="Ravi" age={22} city="Mumbai" />
        <Student name="Priya" age={23} city="Delhi" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card title="React Props" description="Props allow data flow." />
          </div>

          <div className="col-md-4">
            <Card title="Bootstrap Card" description="Styled using Bootstrap." />
          </div>
        </div>
      </div>
      <div className="container">
      <PassingNumberProps marks={85}/>

      <PassingBoolean isAdmin={true}/>

      <PassingObject info={student}/>

      <Passingrarray list={subjects} />
        <h2>Passing Function as prop</h2>
      <PassingFunction clickMe ={showalert}/>
      <PassingImage photo={img1}/>
      </div>

       <div className="container mt-5">
      <h1 className="text-center mb-4">Multiple Accordions (Props Example)</h1>

     
      <Accordion
        id="one"
        title="What is React?"
        content="React is a JavaScript library for building user interfaces."
      />

      
      <Accordion
        id="two"
        title="What are Props?"
        content="Props allow components to receive data from parent components."
      />

      
      <Accordion
        id="three"
        title="What is JSX?"
        content="JSX is a syntax that allows you to write HTML inside JavaScript."
      />
    </div> */}
      
    </>
  )
}

export default App
