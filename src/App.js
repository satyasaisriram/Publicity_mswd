import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div>
      
        
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="log" element={<Login/>}/>
          <Route path="res" element={<Register/>}/>
          <Route path="pro" element={<Profile/>}/>
      

        </Routes>    
      </BrowserRouter>
      
    </div>
  )
}

export default App;