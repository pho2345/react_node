import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> 
            <div id="navMainMenu" className="navbar-collapse collapse">
                <div className="navbar-nav ml-auto">
                    <Link to='/home' className="nav-item nav-link active">Home</Link>
                    <Link to='/tweets' className="nav-item nav-link">Tweets</Link>
                    <Link to='/data' className="nav-item nav-link">Data</Link>
                    <Link to='/login' className='nav-item nav-link'>Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
