import { useEffect } from 'react';
import './displayAllJobs.css'
import { IoIosBriefcase } from "react-icons/io";



/*id: 'bb95e51b-b1b2-4d97-bee4-1d5ec2b96751', 
employment_type: "Internship"
id: "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751"
job_description: "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support."
location: "Delhi"
package_per_annum: "10 LPA"
rating: 4
title: "Devops Engineer"

*/



const DisplayAllJobs=(prop)=>{

    const {jobDetails}=prop;

    console.log(jobDetails);



    return(

        <>
        
        <li className='list-cont'>
           

        <div className='sub-cont'>

            <img src={jobDetails.company_logo_url} width="70px"/>

            <div className='title-sec'>

             <h4>{jobDetails.title}</h4>

            <div className='detail-cont'>
                <div className='emp'>
                    <IoIosBriefcase />
                    <span>Employment:</span>
                    <span>{jobDetails.employment_type}</span>
                </div>
             
                <div className='pkg'>
                    <span>Package:</span>
                    <span>{jobDetails.package_per_annum}</span>
                </div>
           </div>
           </div>
                
                    <button className='btn'>Apply</button>
                 
           
        </div> 
       
                <hr/>

                <h4>Description:</h4>
                <p>{jobDetails.job_description}</p>
                
        </li>


        </>
    )
}


export default DisplayAllJobs;