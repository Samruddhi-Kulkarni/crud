
import { BrowserRouter, Route,Routes } from 'react-router-dom'  

import './App.css'
import Users from './Users'
import CreateUsers from './CreateUser'
import UpdateUsers from './UpdateUser'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Users/>}></Route>
     <Route path='/create' element={<CreateUsers/>}></Route>
     <Route path='/update/:id' element={<UpdateUsers/>}></Route>
     
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
