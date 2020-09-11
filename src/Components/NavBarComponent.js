import React from 'react';
import {Navbar,Image,FormControl,Form,Button} from 'react-bootstrap';
import CompanyLogo from '../images/CompanyLogo.png';
import AddQuestion from './AddQuestionComponent';

class NavBar extends React.Component{
    render(){
        return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
        <Image
        alt="CompanyLogo"
        src={CompanyLogo} 
        width="70"
        height="50"
        className="d-inline-block align-top"
        thumbnail  /> {' '}
        <span className="align-middle">
            <span className="greenColour">Q</span>uestion 
            <span className="blueColour"> B</span>ank
        </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Form inline className="center" >
      <FormControl type="text" id="search" placeholder="Search" className="mr-sm-2"  />
      <Button variant="outline-success">Search</Button>
    </Form>
        <AddQuestion />
        </Navbar.Collapse>
        
    </Navbar>
        )
    }
}

export default NavBar;