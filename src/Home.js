import React,{Component} from 'react';
import logo from './avatar.jpeg';
import Card from "react-bootstrap/Card";
import { MDBContainer } from "mdb-react-ui-kit";


export class Home extends Component{

    render(){
        return (
            <div className='Home'>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            
    <MDBContainer className="my-5 d-flex justify-content-left">
        <card>
            <div>
            <img src={logo}     style={{ width: "150px" }} className="rounded-3" alt="Avatar"/>
            
          <h1 className="text-muted p-0">
            Praneetha Ravi
          </h1>
            </div>
        </card>
    
        </MDBContainer>
  
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            </div>

        )
    }
}