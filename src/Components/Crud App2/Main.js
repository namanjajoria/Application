import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Read from './Read'
import Add from './Add'
import Update from './Update'
function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<Read/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
          <Route path='/update' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main

