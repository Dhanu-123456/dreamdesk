import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './filterSection.css'


const empArr=[
    {
        id:"INTERNSHIP",
        label:"Internship"
    },
     {
        id:"PARTTIME",
        label:"Part Time"
    },
     {
        id:"FULLTIME",
        label:"Full Time"
    },
     {
        id:"FREELANCE",
        label:"Freelance"
    },
]

const salaryArr=[
    {
        id:1000000,
        label:"10 LPA and above"
    },
    {
        id:2000000,
        label:"20 LPA and above"
    },
    {
        id:3000000,
        label:"30 LPA and above"
    },
    {
        id:4000000,
        label:"40 LPA and above"
    },
    

]

const FilterSection=()=>{

    const[allValues, setValues]=useState({

                userProfile:{},

    })



    useEffect(()=>{

        const FetchProfile= async()=>{

            const token=Cookies.get("myToken");

            const api="https://apis.ccbp.in/profile";

            console.log(api);

            const options={
                method:"Get",
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }

            try {

                const response= await fetch(api,options);
                const data= await response.json();

                console.log(data);

                if(response.ok){

                    setValues({ ...allValues, userProfile: data.profile_details });
                }
                
            } catch (error) {

                console.log(error);
                
            }
        }

        FetchProfile();
        },[])

        const displayProfile=()=>{
            return(

                <div className="profile-cont">
                <img src={allValues.userProfile.profile_image_url} width="100px"/>
                <div>
                    <h4>{allValues.userProfile.name}</h4>
                    <p>{allValues.userProfile.short_bio}</p>
                </div>
            </div>
            
       ) }

        const displayEmpType=()=>{
            
          return(
            <div className='emp-cont'>
            <h4>Employmen Type:</h4>
            <ul>
                {
                    empArr.map(each => (
                        <li>
                            <input id={each.id} type='checkbox'/>
                            <label htmlFor={each.id}>{each.label}</label>
                        </li>

                    ))
                }
            </ul>
</div>
            
       )  }

        const displaySalary=()=>{
            return(

            <div className='sal-cont'>
            <h4>Salary Range:</h4>
            <ul>
                {
                    salaryArr.map(each => (
                        <li>
                            <input name="salary" id={each.id} type='radio'/>
                            <label htmlFor={each.id}>{each.label}</label>
                        </li>

                    ))
                }
            </ul>
            </div>

            )
        }




    return(
        <div>
        {displayProfile()}
       <hr/>
        
        {displayEmpType()}
      
             <hr/>
        {displaySalary()}


            </div>  
    )
    
       
    

}
export default FilterSection;