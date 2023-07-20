import React from 'react'
import './App.css';
import Table from './components/Table';
import {HashRouter , Routes , Route} from "react-router-dom"
import UserDetails from './components/UserDetails';


function App() {
const api = 'https://jsonplaceholder.typicode.com/users'

  return (
      <HashRouter>
<div className='mx-5 my-5'>
      <Routes>
         <Route  exact path= '/' element={<Table api = {api}/>}/>
         <Route  exact path= '/userID/:id' element={<UserDetails/>}/>



      </Routes>
    
     </div>
    </HashRouter>
  );
}

export default App;
