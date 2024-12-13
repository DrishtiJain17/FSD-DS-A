import {BrowserRouter,Routes,Route} from "react-router-dom";
import MainLayout from './components/MainLayout';
import Register from './components/Register';
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Logout from "./components/logout";
import { useState } from "react";


const App = () => {
  const [data,setData] = useState();
  return (
    <div>
      {JSON.stringify(data)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}/>
          <Route path="/register" element={<Register regData={setData}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App