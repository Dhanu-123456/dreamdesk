import './applyJobs.css'


const ApplyJobs = ()=>{

    return(

         <div className="apply-container">

    <form className="apply-form">

      <h2>Apply Job</h2>

      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Phone" />
      <input type="file" />

      <button>Submit</button>

      </form>

  </div>
    )
}

export default ApplyJobs;