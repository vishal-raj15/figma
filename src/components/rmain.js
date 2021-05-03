import { Container } from '@material-ui/core'
import React, { Component } from 'react'
import Content from './content';

export class rmain extends Component {
    render() {
        return (
            <div className='rmain'>

                <div >
                <div className='permission'>
                <div className='sig' style={{ display:'inline' , paddingTop:'100px'}}><i className="fa fa-wifi fa-rotate-45" style= {{ fontSize:'20px'}}></i></div> 
                <div className='per' style={{ display:'inline' , fontSize:'15px' , marginLeft:'10px' ,fontFamily:'roboto'}}>permissions</div>
                </div>


                <div className='approve'>
                <div className='sig2' style={{ display:'inline' , paddingTop:'100px'}}><i className="fa fa-table" style= {{ fontSize:'20px'}}></i></div> 
                <div className='per2' style={{ display:'inline' , fontSize:'15px' , marginLeft:'10px' ,fontFamily:'roboto' }}>Approval Matrix</div>
                </div>

                </div>

                
                <Content />
                
            </div>
        )
    }
}

export default rmain
