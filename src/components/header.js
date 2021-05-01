import React, { Component } from 'react'

import logo from '../static/viish.png';
import me from '../static/cpp.png';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export class header extends Component {
    render() {
        return (
            <div className="header">

                <div className='left'> <img src={logo} style={{ width:'25px' , height:'25px' , paddingRight:'10px' , paddingTop:'10px'}} />

                   <div style={{ float:'right' , paddingTop:'15px'}}> My page</div> 

                </div>

                <div style={{ position:'absolute' ,right:0 , width:'180px' , height:'50px' , top:'10px'}}>

                <div className='middle'>
                 <img className='im' src={me} style={{ width:'20px' , height:'20px' , paddingRight:'5px' }} />

                    <div className='name' style={{ float:'right', fontSize:'12px'}}> Vishal</div> 

                </div>


                <div className='righ' >

                <NotificationsNoneIcon />
                <HelpOutlineIcon />

                </div>
                </div>


                
            </div>
        )
    }
}

export default header
