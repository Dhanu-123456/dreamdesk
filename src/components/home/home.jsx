import Header from '../header/header';
import './home.css'

const Home=()=>{


    return(
        <>

        <Header/>
        
            <div className="main-cont"> 
            
                <h1>Modernizing the_Job </h1>
                <h1>Search Experience</h1> 

                <div className="search-bar">

                    <input className='text-color' type="text" placeholder="Search jobs..." /> 
                    <img src="src/assets/searchicon.jpg"/> 
                </div> 
                    
                <div className="workoption"> 
                        <h4>Popular Jobs:</h4> 
                        <h4>Designer</h4>
                        <h4>Web Devloper</h4>
                        <h4>Software Engineer</h4> 
                </div> 

            <img src="src/assets/newimg.png" alt="boyimg" className='boyimg'/>
                

            </div>
        
       
    
        </>
    )
    
}

export default Home;