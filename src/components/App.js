import React from 'react';
import Header from './Header';
import Feature from './Feature';
import Signin from './auth/signin';

class App extends React.Component{
  render(){
    if(localStorage.getItem('token')){
      return(
       <Feature/>
      )
    }else{
     return(
       <div>
        <Header/>
        <Signin/>
      </div>
      )
  }
  }
}

export default App;