import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
export default function Header() {
    return (
            
                <React.Fragment>
                <Jumbotron style={{marginTop:'10px'}}>
                    <h1>A React To Do app</h1>
                    <br></br>
                    <Link to="/">Home</Link> | <Link to="/about">About</Link>
                </Jumbotron>
                
                </React.Fragment>


                



            
    )

}
/*const headerStyle={
    
    background: '#333',
    color:'#fff',
    //width:'60%',
    
    padding:'10px',
    margin:'auto',
    borderRadius:'3%'
}
*/