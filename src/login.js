import * as React from 'react';
import { NavLink } from 'react-router-dom'; 

 
class Login extends React.Component{
  render() {
    return (

       

  


        <div className='form-content-right'>
            <h1>
        <NavLink  exact to={"/signUp"} className='form-success'>This page will online soon </NavLink>
          </h1>
        </div>
 
    );
  };
};

export default Login;