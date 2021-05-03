import { ThreeSixty } from '@material-ui/icons';
import React, { Component } from 'react'
import Tabledata from './tabledata';



export class content extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
          name:'',
        };
      }
    



    render() {
        return (
            <div className="content">
                
                <div className='head'>


                    <>

                    {this.state.showComponent ?
                    <>
                    <div className='ab' onClick = {() => this.setState( { showComponent:false , name:''}) } >
                        <i className="fa fa-arrow-left"></i></div>
           <div className='but1'>
           { this.state.name} 


           <div className='pen'> <i class="fa fa-pencil" aria-hidden="true"></i></div>

           </div> </>
           
           :
           
                        <>
                    <div className='but'>
                    <span> + </span> Add Role 

                    </div>


                   <div className='pen'> <i class="fa fa-pencil" aria-hidden="true"></i></div>
                   <div className='pen'> <i class="fa fa-trash" aria-hidden="true"></i></div>
                    </>
                     }
                    </>

                </div>

                <div className='tabels'>
                    
                { this.state.showComponent == false ? 
                <>
                     
            <div className='datatable'>
                <div className='single'>

                   Department / Role
                </div>

                <div className='single'>

                     Access Level
                </div>

                <div className='single'>

                    No of members
                </div>

                <div className='single'>

                    Last Updated
                </div>

                <div className='single'>

                    <div> </div>
                </div>

            </div>

            <div className='datatable1'>

                        
                
                <div className='single'  onClick = {() => this.setState( { showComponent:true , name:'Management Team'}) } >

                    <button className='hov'> Management Team </button>
                </div>

                <div className='single'>

                    <div className='acc'>All access</div>
                </div>
                     


                <div className='single'>

                    4
                </div>

                

                <div className='single'>

                    1 min ago
                </div>

                <i class="fa fa-eye" aria-hidden="true"></i>
              

            </div>


            <div className='datatable1'>
                <div className='single' onClick = {() => this.setState( { showComponent:true , name:'Procurement Team'}) }>

                     Procurement Team
                </div>

                <div className='single'>

                <div className='res'>Restricted access</div>
                </div>

                <div className='single'>

                    8
                </div>

                <div className='single'>

                    1 min ago
                </div>

                    <i class="fa fa-eye" aria-hidden="true"></i>
                     

            </div>


            <div className='datatable1'>
                <div className='single' onClick = {() => this.setState( { showComponent:true , name:'Project Team'}) }>

                     Project Team
                </div>

                <div className='single'>

                <div className='res'>Restricted access</div>
                </div>

                <div className='single'>

                    16
                </div>

                <div className='single'>

                    1 min ago
                </div>

                    <i class="fa fa-eye" aria-hidden="true"></i>
                     

            </div>


            <div className='datatable1'>
                <div className='single' onClick = {() => this.setState( { showComponent:true , name:'IT Team'}) }>

                     IT Team
                </div>

                <div className='single'>

                <div className='res'>Restricted access</div>

                </div>

                <div className='single'>

                    4
                </div>

                <div className='single'>

                    1 min ago
                </div>

                    <i class="fa fa-eye" aria-hidden="true"></i>
                     

            </div>


            <div className='datatable1'>
                <div className='single'>

                   Super Admin
                </div>

                <div className='single'>

                <div className='acc'>All access</div>

                </div>

                <div className='single'>

                    1
                </div>

                <div className='single'>

                    1 min ago
                </div>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                        
                     
            </div>

            </>
                    :

                    <>
                    <Tabledata />
                    
                    </>

                }
                </div>

            </div>
        )
    }
}

export default content
