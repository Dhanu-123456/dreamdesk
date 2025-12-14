import { Link } from 'react-router-dom';
import './header.css';

const Header= () =>{
    return(
        
        <div className="header">

             <Link to="/">
             <img src="src/assets/newlogo2.png" alt="logo" className='logo'/> 
             </Link>

            <div className="list-items">
                <ul>
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to="/about">About</Link>
                     </li>
                     <li>
                        <Link to="/findjobs">Find JObs</Link>
                     </li>
                     <li>
                        <Link to="/contact">Contact</Link>
                     </li>
                </ul>
             </div> 
             
            <img src="src/assets/useri.png" alt="user profile" className='user-profile'/>
            
            </div>

            
    )
}

export default Header;
