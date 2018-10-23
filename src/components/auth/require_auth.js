import React from 'react';
import {connect} from 'react-redux';
import BrowserHistory from '../../components/history'

export default function(ComposedComponent){
    class Authentication extends React.Component{

      componentWillMount(){
        if(!this.props.authenticated){
          BrowserHistory.push("/");
        }
      }

      componentWillUpdate(nextProps){
        if(!nextProps.authenticated){
           BrowserHistory.push("/");
        }
      }

      render(){
          return <ComposedComponent {...this.props} />
      }
    }

    function mapStateToProps(state){
        return{
            authenticated:state.auth.authenticated
        }
    }

    return connect(mapStateToProps)(Authentication);
}