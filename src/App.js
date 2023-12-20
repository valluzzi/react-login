import './App.css';
import Login from './lib/SignIn';
import SignUp from './lib/SignUp';
import ForgotPassword from './lib/ForgotPassword';
import logo from './assets/logo.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      
        <BrowserRouter>
          <Routes>
            <Route exact path="" element={<Login logo={logo} />} />
            <Route exact path="/login" element={<Login logo={logo} />} />
            <Route exact path="/sign-up" element={<SignUp logo={logo} />} />
            <Route exact path="/forgot-password" element={<ForgotPassword logo={logo}/>} />           
          </Routes>
        </BrowserRouter>
      

    </div>
  );
}

export default App;
