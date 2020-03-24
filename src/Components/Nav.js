import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div>
            <Link to='/'>Home </Link> 
            <br/>
            <Link to='/characters'>Characters</Link>
        </div>
    )
}

export default Nav
