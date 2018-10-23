import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getMessage} from '../actions/index';

class Feature extends React.Component{

    componentWillMount(){
      this.props.getMessage();
    }

    renderit=()=>{
       if(this.props.status){
        return(
            <h2>Status: {this.props.status}</h2>
         )
       }
    };

    render(){
        return(
            <div>
              <Header/>
              <h1>Feature</h1>
              {this.renderit()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        status:state.auth.data
    }
}

export default connect(mapStateToProps,{getMessage})(Feature);