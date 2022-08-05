import React from 'react';
import './App.css';
import Form from './Form';
import Login from './login';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import List from './list';


function App() {

  console.log("Host URL"+process.env.PUBLIC_URL);
  return(
    <div className='main-page'>
      <Router>

        <Route exact path= "/" render={() => (
                  <Redirect to="/signUP"/>
                )}/>
        <Route exact path='/signUP' component={Form}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/List' component={List}/>



     

      </Router>
     
    </div>

    
  ) ;
}

export default App;

