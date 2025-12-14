import { useEffect, useState } from "react";
import Header from "../header/header";
import Cookies from "js-cookie";
import './findJobs.css'
import { data } from "react-router-dom";
import FilterSection from "../filterSection/filterSection";
import DisplayAllJobs from "../displayAllJobs/displayAllJobs";


const FindJobs = () => {

    const [allValues, setValues] = useState({

        jobsdataArr: []

    })

    useEffect(() => {

        const getJobsData = async () => {

            const api = "https://apis.ccbp.in/jobs";

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
}, [])


    return (
        <>

            <Header />
            <br/>

             <div className='input-box'>
                    <input type="text" placeholder='Search Jobs Here'/>
             </div>


            <div className="job-cont">

                <div className="job-card">

                    <div className="sec1">

                        <FilterSection />
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