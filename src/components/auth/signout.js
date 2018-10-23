import React from 'react';
import {connect} from 'react-redux';
import {signoutuser} from '../../actions/index'

class Signout extends React.Component{
    componentWillMount(){
        this.props.signoutuser();
    }
    render(){
        return(
            <h3>Sorry to see You go out</h3>
        )
    }
}

export default connect(null,{signoutuser})(Signout);