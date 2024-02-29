import React from 'react'
import { useFormik } from "formik"
import * as yup from "yup"
import { Link } from 'react-router-dom'


const Signin = () => {

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  const validationSchema = yup.object({
      email: yup.string().email("enter valid email address"),
      password: yup.string().matches(passwordRegex, "The password must be at least 8 character, and should include one uppercase, one lowercase" ),
    });


  const formik = useFormik({
      initialValues: {
          email: '',
          password: '',



      },
      validationSchema: validationSchema,
      onSubmit: values => {
        console.log(values)
      },
    });





  return (
    <>
     <center>
      <div className='sig'>

    <form onSubmit={formik.handleSubmit} className="form">
       <h1 className="form-title">Sign in to your account</h1>
        <div className="input-container">
          <input name='email' required="" type="email"  onChange={formik.handleChange} placeholder="Enter email"/>
        
          <span className="text-danger">{formik.errors.email}</span>
         
      </div>
      <div className="input-container">
          <input name="password" required=""   onChange={formik.handleChange} type="password" placeholder="Enter password"/>
          <span className="text-danger">{formik.errors.password}</span>
        </div>
         <button type="submit" className="submit">
        Sign in
      </button>

      <p className="signup-link">
        Don't have an account?
        <Link to={"/signup"} >Create one now</Link>
      </p>
   </form>
      </div>
     </center>
    </>
  )
}

export default Signin