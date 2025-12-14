import { Route,Routes } from 'react-router-dom';
import './App.css'
import Home from './components/home/home';
import About from './components/about/about';
import NotFound from './components/notFound';
import Login from './components/login/login';
import FindJobs from './components/findJobs/findJobs';
import ProtectedRoute from './components/protectedRoute';
import Contact from './components/contactUs/contact';

function App() {
  

  return (
    <Routes>

          <Route path="/" element ={<ProtectedRoute Component={Home}/>}></Route>

          <Route path="/about" element ={<ProtectedRoute Component ={About}/>}></Route>

          <Route path= "/findJobs" element={<ProtectedRoute Component={FindJobs}/>}></Route>

          <Route path= "/contact" element={<ProtectedRoute Component={Contact}/>}></Route>
 
          <Route path= "/login" element ={<Login/>}></Route>

          <Route path="/*" element ={<NotFound/>}></Route>

    </Routes>
      
    
  )
}

export default App;
