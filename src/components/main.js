import React, { Component } from 'react'
import AccountTreeIcon from '@material-ui/icons/AccountTree';

// import '../node_modules/font-awesome/css/font-awesome.min.css';
// import '../../node_modules/font-awesome/css/font-awesome.min.css';

import 'font-awesome/css/font-awesome.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Rmain from './rmain';
import Pro from './pro';
import Org from './org';


export class main extends Component {
    
    constructor(props) {

        super(props);
       this.onChange1= this.onChange1.bind(this);
       this.onChange2= this.onChange2.bind(this);
       this.onChange3= this.onChange3.bind(this);
    this.state = {
        color1: '',
        color2:'',
        color3:'rgb(202, 169, 235)'
      }
    }

    onChange1 = () => {
         this.setState({ color1: 'rgb(202, 169, 235)' , color2:'' , color3:'' });
      }

      onChange2 = () => {
        this.setState({ color2: 'rgb(202, 169, 235)' , color1:'' , color3:'' });
     }

     onChange3 = () => {
        this.setState({ color3: 'rgb(202, 169, 235)' , color2:'' , color1:'' });
     }


    render() {
        return (
            <div className='main'>
                
                <Router>
                <div className='screen'>
                    <div className= 'sleft'> 

                        <div className='box'>
                            
                            <Link to='/pro' style={{ textDecoration:'none'}}>
                            <div style={{ backgroundColor: this.state.color1 }} 
                                    onClick={this.onChange1}>
                            <div className='a'>
                           <div style={{ display:'inline' }}><i className="fa fa-folder-open" aria-hidden="true"></i></div> 
                            <div style={{ display:'inline' , fontSize:'13px' , margin:'15px' ,fontWeight:'normal' , fontStyle:'normal' ,fontFamily:'roboto' , color:'rgb(75, 77, 76)'}}>Projects</div>
                            </div>
                            </div>
                            </Link>



                            <Link to='/org' style={{ textDecoration:'none'}}>
                                <div style={{ backgroundColor: this.state.color2 }} 
                                    onClick={this.onChange2}>
                            <div className='a'>
                           
                            <div style={{ display:'inline'}}><i className="fa fa-briefcase" aria-hidden="true"></i></div> 
                            <div style={{ display:'inline' , fontSize:'13px' , margin:'15px' ,fontWeight:'normal' , fontStyle:'normal' ,fontFamily:'roboto' , color:'rgb(75, 77, 76)'}}>Organisation Profile</div>
                                
                            </div>
                            </div>

                            </Link>


                            <Link to='/access' style={{ textDecoration:'none'}}>
                            <div  style={{ backgroundColor: this.state.color3 }} 
                                    onClick={this.onChange3}>
                            <div className='a'>
                            {/* <i class="fas fa-user-shield"></i> */}
                            <div style={{ display:'inline'}}><i className="fa fa-key" aria-hidden="true"></i></div> 
                            <div style={{ display:'inline' , fontSize:'13px' , margin:'15px' ,fontWeight:'normal' , fontStyle:'normal' ,fontFamily:'roboto' , color:'rgb(75, 77, 76)' }} > Access Control</div>
                            </div>
                            </div>

                            </Link>


                        </div>
                    
                    </div>
                   
                   
                   
                   
                    <div className='sright'>

                            <Switch>
                            <Route exact path="/access">
                                <Rmain />
                            </Route>

                            <Route exact path="/pro">
                                <Pro />
                            </Route>
                            <Route exact path="/org">
                                <Org />
                            </Route>


                            </Switch>
                    </div>
                </div>

                </Router>
              


            </div>  
        )
    }
}

export default main
