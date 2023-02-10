import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Signup from './pages/signup';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
         <Router>
          <Routes>
               <Route element={<Home/>} path='/'></Route>
               <Route element={<Signup/>} path='/signup'></Route>
               <Route element={<Login/>} path='/login'></Route>
          </Routes>
         </Router>
    </div>
  );
}

export default App;
