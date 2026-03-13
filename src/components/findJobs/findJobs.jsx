import { useEffect, useState } from "react";
import Header from "../header/header";
import Cookies from "js-cookie";
import './findJobs.css'
import { data } from "react-router-dom";
import FilterSection from "../filterSection/filterSection";
import DisplayAllJobs from "../displayAllJobs/displayAllJobs";


const FindJobs = () => {

    const [allValues, setValues] = useState({

        jobsdataArr: [],
        emptype:[],
        salary:"",
        userin:""

    })

    useEffect(() => {

        const getJobsData = async () => {

            const {emptype,salary,userin} = allValues;

            const api = `https://apis.ccbp.in/jobs?employment_type=${emptype}&minimum_package=${salary}&search=${userin}`;

            console.log(api);

            const token = Cookies.get("myToken");

            const options = {
                method: "Get",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            try {

                const response = await fetch(api, options);
                const data = await response.json();

                if (response.ok) {

                    console.log(data);
                    setValues({ ...allValues, jobsdataArr: data.jobs });
                }

            } catch (error) {

                console.log(error);
            }
        };  getJobsData();
}, [allValues.userin,allValues.emptype]);


const onTitleUpdate = (e)=>{

    console.log(e.target.value);

    

    if(e.key === "Enter"){
        setValues({...allValues,userin:e.target.value});

    }
}

    return (
        <>

            <Header />
            <br/>

             <div className='input-box'>
                    <input onKeyUp={onTitleUpdate} type="text" className="form-control" placeholder='Search Jobs Here'/>
             </div>


            <div className="job-cont">

                <div className="job-card">

                    <div className="sec1">

                        <FilterSection setMyValues= {setValues} myValues ={allValues} />
                    </div>
                    <div className="sec2">

                        <ul>
                            {
                            allValues.jobsdataArr.map(each => <DisplayAllJobs jobDetails={each} key={each.id} />)
                        }
                        </ul>

                    </div>

                </div>

            </div>
        </>
    )


}

export default FindJobs;