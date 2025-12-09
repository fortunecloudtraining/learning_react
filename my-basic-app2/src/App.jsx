import { React,useState } from 'react'
import Child from './component2/Child';
import MessageProvider from './component2/MessageProvider';
import AllInOne from './AllInOne';
import ThemeChangeAllInOne from './ThemeChangeAllInOne';
import WithoutUseMemo from './components/WithoutUseMemo';
import WithUseMemo from './components/WithUseMemo';
import CounterUseReducer from './components/CounterUseReducer';
import CounterUseState from './components/CounterUseState';
import Todoarray from './components/TodorryLocalstorage';
import TodoCrud from './components/TodoCrud';
import SessionDemo from './components/SessionDemo';
import WithoutCallBack from './components/WithoutCallBack';
import WithCallBack from './components/WithUseCallBack';
import WithCallBackChild from './components/WithCallBackChild';

function App() {

  return (
    <>
      <div className='container mt-5'>
        {/* <WithoutUseMemo/>
        <WithUseMemo/>
        <CounterUseState/>
        <CounterUseReducer/> */}
        {/* <h1>Using Prop Drilling</h1> */}
        {/* <Child message="Hello Students!"/> */}

        {/* <h1>Using PropDrilling</h1>
          <MessageProvider>
            <Child/>
          </MessageProvider>

          <AllInOne/>
          <ThemeChangeAllInOne/> */}
          <WithoutCallBack/>
          {/* <WithCallBack/>
          <WithCallBackChild/> */}
          <Todoarray/>
          <TodoCrud/>
          <SessionDemo/>
      </div>
    </>
  )
}

export default App
