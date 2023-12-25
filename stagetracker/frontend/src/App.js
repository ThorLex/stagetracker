 import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Login from "./components/Login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<div className = "routes">



   <Routes>
   
      <Route 
        path="/login" 
       element={<Login />} 
     />
   </Routes>


</div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
