import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './jobDetails.css';
import Cookies from 'js-cookie';
import ApplyJobs from '../applyJobs/applyJobs';


// {
//   "job_details": {
//     "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
//     "company_website_url": "https://about.netflix.com/en",
//     "employment_type": "Internship",
//     "id": "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
//     "job_description": "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev",
// "location":"Delhi",
//     "package_per_annum":"10 LPA",
//     "rating":4
//   },
//     "skills": [
//       {
//         "image_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png",
//         "name": "Docker"
//       },
//     ],
//     "life_at_company": {
//       "description": "Our core philosophy is people over process. Our culture has been instrumental to our success. It has helped us attract and retain stunning colleagues, making work here more satisfying. Entertainment, like friendship, is a fundamental human need, and it changes how we feel and gives us common ground. We want to entertain the world.",
//       "image_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/life-netflix-img.png"
//     },
    
//   "similar_jobs": [
//     {
//       "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
//       "employment_type": "Freelance",
//       "id": "2b40029d-e5a5-48cc-84a6-b6e12d25625d",
//       "job_description": "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
//       "location": "Delhi",
//       "rating": 4,
//       "title": "Frontend Engineer"
//     },
//     ...
//   ]
// }




const JobsDetails = () => {

  const navigate = useNavigate();
   const [jobData, setJobData] = useState(null);
   const { id } = useParams();

   useEffect(() => {

      const getJobsDetails = async () => {

         const api = `https://apis.ccbp.in/jobs/${id}`;

         const token = Cookies.get("myToken");

         const options = {
            method: "GET",
            headers: {
               Authorization: `Bearer ${token}`
            }
         };

         try {
            const response = await fetch(api, options);
            const data = await response.json();

            console.log(data);

            if (response.ok) {
               setJobData(data);
            }

         } catch (error) {
            console.log(error);
         }
      };

      getJobsDetails();

   }, [id]);

  
   if (!jobData || !jobData.job_details) {
      return <h2 className="loading">Loading...</h2>;
   }

   const job = jobData.job_details;

   console.log(job);

  

   return (
     <div className="job-main">

  {/* TOP */}
          <div className="top">
            <img src={job.company_logo_url} alt={job.title} />

            <div>
              <h2>{job.title}</h2>
              <p className="rating">⭐ {job.rating}</p>
            </div>
          </div>

  {/* INFO */}
          <div className="info">
            <span>📍 {job.location}</span>
            <span>💼 {job.employment_type}</span>
            <span>💰 {job.package_per_annum}</span>
          </div>

      
      <hr />

  {/* DESCRIPTION */}
            <h3>Description</h3>
            <p>{job.job_description}</p>

  {/* SKILLS */}
            <h3>Skills</h3>

            <div className="skills">
              {job.skills?.map(each => (
                <div key={each.name} className="skill-card">
                  <img src={each.image_url} alt={each.name} />
                  <p>{each.name}</p>
                </div>
              ))}
            </div>

  {/* LIFE AT COMPANY */}
            <h3>Life at Company</h3>

            <div className="life">
              <p>{job.life_at_company?.description}</p>

              <img
                src={job.life_at_company?.image_url}
                alt="life at company"
              />
            </div>
  
  {/* APPLY BUTTON */}
            <button className="apply-btn" onClick={() => navigate("/applyJobs")}>
              Apply Now
            </button>

  {/* SIMILAR JOBS */}
              <h3 className='similar-text'>Similar Jobs</h3>

              <div className="similar">
                {jobData.similar_jobs?.map(each => (
                  <div key={each.id} className="similar-card">

                    <img
                      src={each.company_logo_url}
                      alt={each.title}
                    />

                    <h4>{each.title}</h4>

                    <p>📍 {each.location}</p>
                    <p>💼 {each.employment_type}</p>
                    <p>⭐ {each.rating}</p>

                  </div>
                ))}
              </div>  
            

            
</div>

   )
}

export default JobsDetails;



