import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import { NavLink } from 'react-router-dom';



function FormSignup ({ submitForm }) {

      const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
      );



  return (
    <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>

                  <h1>
                    Get started with us today! Create your account by filling out the
                    information below.
                  </h1>

              <div className='form-inputs'>
                   {/* the username section begins */}
                  <label className='form-label'>Username</label>
                  <input
                    className='form-input'
                    type='text'
                    name='username'
                    placeholder='Enter your username'
                    value={values.username}
                    onChange={handleChange}
                  />
                  {errors.username && <p>{errors.username}</p>} 
                  {/* the username section ends */}
              </div>



              <div className='form-inputs'>
                  {/* the email section begins */}
                  <label className='form-label'>Email</label>
                  <input
                    className='form-input'
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p>{errors.email}</p>}
                  {/* the email section ends */}
              </div>



              <div className='form-inputs'>
                {/* the password section begins */}
                  <label className='form-label'>Password</label>
                  <input
                    className='form-input'
                    type='password'
                    name='password'
                    placeholder='Enter your password'
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && <p>{errors.password}</p>}
                {/* the password section ends */}
              </div>





              <div className='form-inputs'>
                 {/* the confirm password section begins */}
                  <label className='form-label'>Confirm Password</label>
                  <input
                    className='form-input'
                    type='password'
                    name='password2'
                    placeholder='Confirm your password'
                    value={values.password2}
                    onChange={handleChange}
                  />
                  {errors.password2 && <p>{errors.password2}</p>}
                  {/* the confirm password section begins */}
              </div>



                <button className='form-input-btn' type='submit'>
                  Sign up
                </button>

                <span className='form-input-login'>
                   Already have an account? Login <NavLink exact to='/login'>here</NavLink>
                </span>

            </form>

            {submitForm};
    </div>
  );
};

export default FormSignup;
