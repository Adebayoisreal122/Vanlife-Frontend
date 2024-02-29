import React from 'react'
import { useFormik } from "formik"
import * as yup from "yup"
import { Link } from 'react-router-dom'

const Signup = () => {


  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  const validationSchema = yup.object({
      firstName: yup.string().required("required").min(4, "minimum of four character" ).max(10, "maximum of ten character"),
      secondName: yup.string().required("required").min(4, "minimum of four character" ).max(10, "maximum of ten character"),
      userName: yup.string().required("required").min(4, "minimum of four character" ).max(10,"maximum of ten character" ),
      email: yup.string().email("enter valid email address"),
      password: yup.string().matches(passwordRegex, "The password must be at least 8 character, and should include one uppercase, one lowercase" ),
    });


  const formik = useFormik({
      initialValues: {
          firstName: '',
          secondName: '',
          userName: '',
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
          <input name="firstName" required="" type="email"  onChange={formik.handleChange} placeholder="Enter First Name"/>
        
          <span className="text-danger">{formik.errors.firstName}</span>
      </div>
      <div className="input-container">
          <input name="secondName"  required="" type="email"  onChange={formik.handleChange} placeholder="Enter Last Name"/>
        
          <span className="text-danger">{formik.errors.secondName}</span>
      </div>
      <div className="input-container">
          <input  name="userName" required="" type="email"  onChange={formik.handleChange} placeholder="Enter Username"/>
        
          <span className="text-danger">{formik.errors.userName}</span>
      </div>
        <div className="input-container">
          <input name='email' required="" type="email"  onChange={formik.handleChange} placeholder="Enter email"/>
        
          <span className="text-danger">{formik.errors.email}</span>
      </div>
      <div className="input-container">
          <input name="password" required=""   onChange={formik.handleChange} type="password" placeholder="Enter password"/>
          <span className="text-danger">{formik.errors.password}</span>
        </div>
         <button type="submit" className="submit">
        Sign up
     </button>

      <p className="signup-link">
        Do you have an account with us?
        <Link to={"/"} >Sign in now</Link>
      </p>
   </form>
      </div>
     </center>

    </>
  )
}

export default Signup