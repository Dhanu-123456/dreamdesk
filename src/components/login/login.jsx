import './login.css'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'


const Login= ()=>{

    const navigate = useNavigate();

    useEffect(()=>{

        const token= Cookies.get("myToken");

        if(token!==undefined){
            navigate("/");
        }
    },[])

    const [allValues,setValues] = useState({
            username:"",
            password: "",
            errormsg:""

        })

    
            
    const onSubmitUser=async(e)=>{
        
        e.preventDefault();


        const api= "https://apis.ccbp.in/login";

        const userDetails={
            username: allValues.username,
            password: allValues.password
        }

        const options= {
            method: "POST",
            body: JSON.stringify(userDetails)
        }

        try {

            const response=await fetch(api,options);
            const data=await response.json();

            if(response.ok){

                Cookies.set("myToken",data.jwt_token);
                setValues({...allValues,errormsg:""});
                navigate("/");

            }
            else{
                setValues({...allValues,errormsg:data.error_msg})
            }

            console.log(response);
            console.log(data);
            
        } catch (error) {
            
            console.log(error);
        }
    }

    return(

        
        <div className='login-cont'>

            <form className='w-50 p-4 shadow' onSubmit={onSubmitUser}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">USERNAME</label>
                    <input onChange={(e)=>{setValues({...allValues,username : e.target.value})}}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">PASSWORD</label>
                    <input onChange={(e)=>{setValues({...allValues,password : e.target.value})}} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>

                <h4 className='text-danger'>{allValues.errormsg}</h4>
</form>

         
        </div>
    )
}

export default Login;