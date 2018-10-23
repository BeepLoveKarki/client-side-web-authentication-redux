import React from 'react';
import {signupuser} from '../../actions/index';
import {connect} from 'react-redux';

class Signup extends React.Component{

    handleit=(e)=>{
      e.preventDefault();
      const data={};
      data['email']=this.email.value;
      data['password']=this.password.value;
      this.props.signupuser(data,this.form);
    };

    renderError=()=>{
        if(this.props.errorMessage){
            return(
              <div className="alert alert-danger">
                <strong>Oops! </strong>{this.props.errorMessage}
              </div>
            )
          }
    };

    render(){
        return(
            <div>
            <form onSubmit={(e)=>{this.handleit(e)}} ref={(i)=>{this.form=i}} style={{marginTop:'20px'}}>
                <fieldset className="form-group" style={{marginLeft:'10px',marginRight:'10px'}}>
                  <label>Email:</label>
                  <input name="email" ref={(input)=>{this.email=input}} className="form-control" type="email" style={{width:'25%'}}/>
                </fieldset>
                <fieldset className="form-group" style={{marginLeft:'10px',marginRight:'10px'}}>
                  <label>Password:</label>
                  <input name="password" ref={(input)=>{this.password=input}} className="form-control" type="password" style={{width:'25%'}}/>
                </fieldset>
                <fieldset className="form-group" style={{marginLeft:'10px',marginRight:'10px'}}>
                  <label>Confirm Password:</label>
                  <input name="password" ref={(input)=>{this.password1=input}} className="form-control" type="password" style={{width:'25%'}}/>
                </fieldset>
                {this.renderError()}
                <button type="submit" style={{marginLeft:'10px',marginRight:'10px'}} className="btn btn-primary">Sign Up</button>
            </form>
           </div>
        )
    }
}

function mapStateToProps(state){
   return{
       errorMessage:state.auth.error
   }
}

export default connect(mapStateToProps,{signupuser})(Signup);