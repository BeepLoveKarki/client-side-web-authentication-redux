import React from 'react';
import {connect} from 'react-redux';
import {signinuser} from '../../actions/index';

class Signin extends React.Component{

    handleit=(e)=>{
      e.preventDefault();
      this.props.signinuser(this.email.value,this.password.value,this.form);
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
              {this.renderError()}
              <button type="submit" style={{marginLeft:'10px',marginRight:'10px'}} className="btn btn-primary">Sign In</button>
          </form>
         </div>
      )
    }
}

function mapStateToProps(state){
  return {
    errorMessage:state.auth.error
  }
}

export default connect(mapStateToProps,{signinuser})(Signin);