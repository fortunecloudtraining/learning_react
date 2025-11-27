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

function App() {

  return (
    <>
      {/* <h1>Welcomt to FCT</h1> */}
      {/* <Function_Example/>
      <Event_Example/> */}
      {/* <FruitListArray/> */}
      {/* <UserCard/> */}
      {/* <ConditionalStatement/> */}
      <div className='container text-danger'>
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

    </>
  )
}

export default App
