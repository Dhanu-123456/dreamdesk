
import { useParams } from 'react-router-dom';
import './jobDetails.css';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const JobsDetails =()=>{

    const{id} = useParams();

    useEffect(()=>{

       const getJobsDetails =async ()=>{


         const api= `https://apis.ccbp.in/jobs/${id}`;

        const token = Cookies.get("myToken");

        const options ={
            method:"Get",
            headers:{
                Authorization:`Bearer${token}`
            }
        }

        try {
            
            const response = await fetch(api);
            const data = response.json();

            console.log(data);

        } catch (error) {
         
            console.log(error);
            
        }
       }

       getJobsDetails();

    },[])


    return(
    

        <h1>Job Detail Complonent</h1>


    )
}

export default JobsDetails;