import './App.css';
import Home from './screens/Home';
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import MyOrder from "./screens/MyOrder";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-dark-5/dist/css/bootstrap-dark.min.css"; // Only if you want the dark theme
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from './components/ContextReducer';

function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/createuser' element={<Signup/>} />
          <Route exact path='/myorder' element={<MyOrder/>} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
