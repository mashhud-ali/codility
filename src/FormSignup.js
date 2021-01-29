import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import { Link } from 'react-router-dom';
import './Form.css'

const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} 
    = useForm(
        submitForm,
        validate
        );

        console.log(values)

    return (
       <div className="form-content-right">
           <form className="form" onSubmit={handleSubmit}>
               <h1>Create Account by Filling Info Below</h1>
               <div className="form-inputs">
                   <label htmlFor="firstname" className="form-label">
                       First Name
                   </label>
                   <input
                       id="firstname"
                       type="text" 
                       name="firstname" 
                       className="form-input" 
                       placeholder="Enter Your First Name"
                       value={values.firstname}
                       onChange={handleChange}
                       />
                       {errors.firstname && <p>{errors.firstname}</p>}
               </div>

                <div className="form-inputs">
                   <label htmlFor="lastname" className="form-label">
                       Last Name
                   </label>
                   <input
                       id="lastname"
                       type="text"
                       name="lastname" 
                       className="form-input" 
                       placeholder="Enter Your Last Name"
                       value={values.lastname}
                       onChange={handleChange}
                       />
                       {errors.lastname && <p>{errors.lastname}</p>}
               </div>

               <div className="form-inputs">
                   <label htmlFor="dob" className="form-label">
                       Date of Birth
                   </label>
                   <input
                       id="dob"
                       type="date" 
                       name="dob" 
                       className="form-input" 
                       placeholder="Enter Your Date of Birth"
                       value={values.dob}
                       onChange={handleChange}
                       />
                       {errors.dob && <p>{errors.dob}</p>}
               </div>

               <div className="form-inputs">
                   <label htmlFor="email" className="form-label">
                       Email
                   </label>
                   <input
                       id="email"
                       type="email" 
                       name="email" 
                       className="form-input" 
                       placeholder="Enter Your Email"
                       value={values.email}
                       onChange={handleChange}
                       />
                       {errors.email && <p>{errors.email}</p>}
               </div>

               <div className="form-inputs">
                   <label htmlFor="password" className="form-label">
                       Password
                   </label>
                   <input
                       id="password"
                       type="password" 
                       name="password" 
                       className="form-input" 
                       placeholder="Enter Your Password"
                       value={values.password}
                       onChange={handleChange}
                       />
                       {errors.password && <p>{errors.password}</p>}
               </div>

               <div className="form-inputs">
                   <label htmlFor="password2" className="form-label">
                       Confirm Password
                   </label>
                   <input
                       id="password2"
                       type="password" 
                       name="password2" 
                       className="form-input" 
                       placeholder="Reenter Your Password"
                       value={values.password2}
                       onChange={handleChange}
                       />
                       {errors.password2 && <p>{errors.password2}</p>}
               </div>

               <button className="form-input-btn" type="submit">
                   Sign Up
               </button>
               <Link className="form-login-btn" exact to="/login"> Log In </Link>

               {/* <span className="form-input-login">
                   Already have an account? <a href="#"> Login Here </a>
               </span> */}
           </form>
       </div>
    )
}

export default FormSignup
