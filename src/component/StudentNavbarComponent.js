import React,{Component} from 'react';
import logo from './UCP-Logo.gif';
import {Navbar, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import './main.css';
import { Redirect } from 'react-router-dom';



class StudentNavbarComponent extends Component{
    constructor(props){
      super(props);
      const token=localStorage.getItem('token');
      let loggedin=true;
      let dropdownOpen=false;
      if(token==null)
      {
        alert("HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
          loggedin=false;
      }
      this.state={
        dropdownOpen
      }
      this.toggle=this.toggle.bind(this);
      this.logoutHandle=this.logoutHandle.bind(this);
    }
    logoutHandle(){
            localStorage.removeItem('token');
            this.setState({
                loggedin:false
            })
    }
    toggle (){
        const {dropdownOpen}=this.state;
        this.setState({dropdownOpen:!dropdownOpen})
    }
     render(){
        const token=localStorage.getItem('token');
        if(this.state.loggedin === false)
        {
            return <Redirect to="/stdsignin"/>
        }
       return(
            <div>
                <Navbar className='NavbarIMG' style={{color:'white',fontFamily:'"Times New Roman", Times, serif'}} >
                    <span>
                        <h5 style={{color:'white'}}><img src={logo} className="logo" alt="logo"></img> University of Central Punjab</h5>
                    </span>
                            {/* <Control.select  model='.userinfo' id='userinfo' name='userinfo' className='form-control' style={{borderRadius: '35px',paddingRight:'50px',backgroundColor:"hsla(0, 100%, 100%, 0.7)"}}>
                                    <option value='Muhammad Adrees' selected>Muhammad Adrees</option>
                                    <option>{token}</option>
                                    <option>adreees012@ucp.edu.pk></option>
                            </Control.select> */}
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{marginRight:'90px'}}>
                        <DropdownToggle caret style={{borderRadius: '35px',paddingRight:'40px',paddingLeft:'20px',backgroundColor:"hsla(254, 32%, 28%, 0.7)"}}>
                        {token}
                        </DropdownToggle>
                        <DropdownMenu style={{borderRadius: '35px',paddingRight:'20px',paddingLeft:'20px',backgroundColor:"hsla(254, 32%, 28%, 0.4)"}}>
                            <DropdownItem >Muhammad Adrees</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>adreees012@ucp.edu.pk</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem type="submit" onClick={this.logoutHandle}>LogOut</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </Navbar>
                <div style={{backgroundColor:'#3C315F'}}>
                    <br/>
                </div>
            </div>
                    
       )
     }
    }
    export default StudentNavbarComponent;