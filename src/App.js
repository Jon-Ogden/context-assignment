import './App.css';
import { Route, Routes} from "react-router-dom"
import NavBar from './NavBar';
import About from './About';
import Users from './Users';
import Home from './Home';
import UpdateForm from './UpdateForm';

function App() {
  return (
    <div className='all'>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Users/:id/update" element={<UpdateForm />} />
          <Route path="/Users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
