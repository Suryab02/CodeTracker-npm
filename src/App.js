
import './App.css';
import {BrowserRouter , Routes ,Route} from "react-router-dom"
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';
import Home from "./Pages/home/Home"
function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" element = {<Home />} />
    <Route path="/login" element = { <Login />} />
    <Route path="/register" element = {<Register />} />

     </Routes>
    </BrowserRouter>
  );
}

export default App;
