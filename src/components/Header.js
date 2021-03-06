import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends React.Component{

    renderLinks(){
        if(this.props.authenticated){
         return(
           <li className="nav-item">
             <Link className="nav-link" to="/signout">Sign Out</Link>
           </li>
         )
        }else{
         return(
          <li className="nav-item">
           <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
         )
        }
    }

    render(){
        return(
            <nav className="navbar navbar-light">
             <ul className="nav navbar-nav">
               {this.renderLinks()}
             </ul>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return{
        authenticated:state.auth.authenticated
    }
}

export default connect(mapStateToProps)(Header);