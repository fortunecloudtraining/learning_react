import { useState } from 'react'
import Child from './component2/Child';
import MessageProvider from './component2/MessageProvider';
import AllInOne from './AllInOne';
import ThemeChangeAllInOne from './ThemeChangeAllInOne';

function App() {

  return (
    <>
      <div className='container mt-5'>
        <h1>Using Prop Drilling</h1>
        {/* <Child message="Hello Students!"/> */}

        <h1>Using PropDrilling</h1>
          <MessageProvider>
            <Child/>
          </MessageProvider>

          <AllInOne/>
          <ThemeChangeAllInOne/>
      </div>
    </>
  )
}

export default App
