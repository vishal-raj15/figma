import React, { Component } from 'react'
import ToggleButton from 'react-toggle-button'
import Access from './access';
import Restrict from './restrict';
import Nope from './nope';
import Table from 'react-bootstrap/Table';
import Expended from './expandede';
// let items=[{ ""}];
// let itemList=[];
// items.forEach((item,index)=>{
//   itemList.push( <li key={index}>{item}</li>)
// })

const items=[ 'me' , 'vishal' , 'dfdkf'];

export class tabledata extends Component {

    constructor(props) {
        super(props);
        this.state = {
            t1:true,
            t2:false,
            t3:true,
            t4: false,
            t5:true,
            plus1:true,
            plus2:true,
            plus3:true,
            plus4:true,
            plus5:true,
            plus6:true,
            allowed:"All",
            allowed2:'',
            allowed3:'',
            allowed4:'',
            allowed5:'',
            allowed6:'',

             accs :"View | Create | Edit | Delete",
             recs : "View | Create",
             noa :"",
            


          showComponent: false,
            

        };
        this._clicked = this._clicked.bind(this);
        this._clicked2 = this._clicked2.bind(this);
        this._clicked3 = this._clicked3.bind(this);
        this._clicked4 = this._clicked4.bind(this);
        this._clicked5 = this._clicked5.bind(this);
        this._clicked6 = this._clicked6.bind(this);

      }
    
      _clicked() {
        this.setState({
            plus1:!this.state.plus1
        });
      }

      _clicked2(){
        this.setState({
            plus2:!this.state.plus2
        });
      }
      _clicked3(){
        this.setState({
            plus3:!this.state.plus3
        });
      }
      _clicked4(){
        this.setState({
            plus4:!this.state.plus4
        });
      }
      _clicked5(){
        this.setState({
            plus5:!this.state.plus5
        });
      }
      _clicked6(){
        this.setState({
            plus6:!this.state.plus6
        });
      }
    //   _clicked7(){
    //     this.setState({
    //         allowed:!this.state.allowed
    //     });
    //   }

      callbackFunction = (childData) => {
        this.setState({allowed: childData})
  }     

  callbackFunction2 = (childData) => {
    this.setState({allowed2: childData})
}


callbackFunction3 = (childData) => {
    this.setState({allowed3: childData})
}

callbackFunction4 = (childData) => {
    this.setState({allowed4: childData})
}
callbackFunction5 = (childData) => {
    this.setState({allowed5: childData})
}






    render() {
        
        return (
            <>


<div>
  <Table >
    <thead>
      <tr>
        <th></th>
        <th className='lit'>Department / Role Name</th>
        <th className='lit'>Access level</th>
        <th className='lit'>Summary</th>
        <th className='lit'>Last Updated</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     <>
     {this.state.plus1 ?
      <tr>
        <td><i class="fa fa-plus-circle" aria-hidden="true" onClick={this._clicked}></i></td>
        <td>Budget</td>
        <td >
        { this.state.t1 ? 

        (this.state.allowed === 'Resticted' ?  <Restrict />:<Access /> ) : <Nope />
        }

        </td>
        <td> 
            { this.state.allowed === 'Resticted' ? "View | Create ": (this.state.allowed === 'All' ? "View | Create | Edit | Delete" : "") }
            
            </td>
      
        <td>1 min ago</td>
        <td>  
            <ToggleButton
                value={ this.state.t1 || false }
                onToggle={(t1) => {
                    this.setState({
                    t1: !t1,
                    })
                }} />
        </td>
      </tr>
     : <tr> 
      <td><i class="fa fa-minus-circle" aria-hidden="true" onClick={this._clicked}></i></td>
            <td colSpan='3'>  
            <div id="my_box">
            <p>Budget</p>

            <Expended parentCallback = { this.callbackFunction} />
            
            </div>

        </td>
        <td>1 min ago</td>
        <td>  
            <ToggleButton
                value={ this.state.t1 || false }
                onToggle={(t1) => {
                    this.setState({
                    t1: !t1,
                    })
                }} />
        </td>
      
      </tr>
    
    }
    </>

      
     <>
     {this.state.plus2 ?
      <tr>
        <td><i class="fa fa-plus-circle" aria-hidden="true" 

            onClick={this._clicked2}
            
            ></i></td>
        <td>Bidding</td>
        <td >

        { this.state.t2 ? 

            (this.state.allowed2 === 'All' ? <Access /> : <Restrict />) : <Nope />
        }
        </td>
        <td>  { this.state.allowed2 === 'Resticted' ?  "View | Create": "View | Create | Edit | Delete"}
            </td>
        <td>1 min ago</td>
        <td>  
            <ToggleButton
                value={ this.state.t2 || false }
                onToggle={(t2) => {
                    this.setState({
                    t2: !t2,
                    })
                }} />
        </td>
      </tr>
     :
     <tr> 
     <td><i class="fa fa-minus-circle" aria-hidden="true" onClick={this._clicked2}></i></td>
           <td colSpan='3'>  
           <div id="my_box">
           <p>Bidding</p>


            <Expended parentCallback = { this.callbackFunction2} />

           </div>
       </td>

       <td>1 min ago</td>
        <td>  
            <ToggleButton
                value={ this.state.t2 || false }
                onToggle={(t2) => {
                    this.setState({
                    t2: !t2,
                    })
                }} />
        </td>
     


     </tr>
    
     }</>
     
        
     <>
     {this.state.plus3 ?
      <tr>
        <td><i class="fa fa-plus-circle" aria-hidden="true" 

            onClick={this._clicked3}
            
            ></i></td>
        <td>Vendor Portal</td>
        <td >

        { this.state.t3 ? 

            (this.state.allowed3 === 'All' ? <Access /> : <Restrict />) : <Nope />
        }
        </td>
        <td> { this.state.allowed3 === 'Resticted' ?  "View | Create": "View | Create | Edit | Delete"}
            </td>
        <td>1 min ago</td>
        <td>  
            <ToggleButton
                value={ this.state.t3 || false }
                onToggle={(t3) => {
                    this.setState({
                    t3: !t3,
                    })
                }} />
        </td>
      </tr>
     :
     <tr> 
     <td><i class="fa fa-minus-circle" aria-hidden="true" onClick={this._clicked3}></i></td>
           <td colSpan='3'>  
           <div id="my_box">
           <p>Vendor Portal</p>


            <Expended parentCallback = { this.callbackFunction3} />
           </div>
       </td>
       <td>1 min ago</td>
        <td>  
            <ToggleButton
                value={ this.state.t3 || false }
                onToggle={(t3) => {
                    this.setState({
                    t3: !t3,
                    })
                }} />
        </td>
     
     </tr>
    
     }</>
  
  
  
  <>
     {this.state.plus4 ?
      <tr>
        <td><i class="fa fa-plus-circle" aria-hidden="true" 

            onClick={this._clicked4}
            
            ></i></td>
        <td>Purchase order/ Work Order</td>
        <td >

        { this.state.t4 ? 

            (this.state.allowed4 === 'All' ? <Access /> : <Restrict />) : <Nope />
        }
        </td>
        <td> { this.state.allowed4 === 'Resticted' ?  "View | Create": "View | Create | Edit | Delete"}
            </td>
        <td>1 min ago</td>
        <td>  
            <ToggleButton
                value={ this.state.t4 || false }
                onToggle={(t4) => {
                    this.setState({
                    t4: !t4,
                    })
                }} />
        </td>
      </tr>
     :
     <tr> 
     <td><i class="fa fa-minus-circle" aria-hidden="true" onClick={this._clicked4}></i></td>
           <td colSpan='3'>  
           <div id="my_box">
           <p>Purchase order/ Work Orde</p>


            <Expended parentCallback = { this.callbackFunction4} />
           </div>
       </td>

       <td>1 min ago</td>
        <td>  
            <ToggleButton
                value={ this.state.t4 || false }
                onToggle={(t4) => {
                    this.setState({
                    t4: !t4,
                    })
                }} />
        </td>
     
     </tr>
    
     }</>
   
   
  <>
     {this.state.plus5 ?
      <tr>
        <td><i class="fa fa-plus-circle" aria-hidden="true" 

            onClick={this._clicked5}
            
            ></i></td>
        <td>Organisation Profile</td>
        <td >

        { this.state.t5 ? 

            (this.state.allowed5 === 'Resticted' ? <Restrict />:<Access /> ) : <Nope />
        }
        </td>
        <td> { this.state.allowed5 === 'Resticted' ?  "View | Create": "View | Create | Edit | Delete"}
            </td>
        <td>1 min ago</td>
        <td>  
            <ToggleButton
                value={ this.state.t5 || false }
                onToggle={(t5) => {
                    this.setState({
                    t5: !t5,
                    })
                }} />
        </td>
      </tr>
     :
     <tr> 
     <td><i class="fa fa-minus-circle" aria-hidden="true" onClick={this._clicked5}></i></td>
           <td colSpan='3'>  
           <div id="my_box">
           <p>Organisation Profile</p>


            <Expended parentCallback = { this.callbackFunction5} />
           </div>
       </td>

       <td>1 min ago</td>
        <td>  
            <ToggleButton
                value={ this.state.t5 || false }
                onToggle={(t5) => {
                    this.setState({
                    t5: !t5,
                    })
                }} />
        </td>
     
     </tr>
    
     }</>
    </tbody>
  </Table>


{/* ///////////////////////////////////////////////////////////// */}

  {/* <div className='expanded'>




  </div> */}




  {/* ///////////////////////////////////////////////////////////////////// */}

</div>


{/*             
            <div className='datatable'>
                <div className='single8'>

                   Department / Role Name
                </div>

                <div className='singlechac'>

                     Access Level
                </div>

                <div className='singlechsm'>

                    summery
                </div>

                <div className='singlech'>

                    Last Updated
                </div>

                <div className='singlech2'>

                    <div> </div>
                </div>

            </div>

            <div className='datatable1'>

           
            <div className="plus" style={{ display:'inline-block' , marginLeft:'10px'}}> <i class="fa fa-plus-circle" aria-hidden="true"></i></div>
                
            <div className='bud' style={{ display:'inline-block' , width: '10vw'}}>
                <div className='nwsingle'>

                     Budgetsffdsdggdfd
                </div> 
                </div>



                { this.state.t1 ? 

                    <Access /> : <Nope />
            }

                <div className='single2'>

                    create | edit
                </div>

                <div className='single3'>

                    1 min ago
                </div>

                <div className='single4'>

                <ToggleButton
                        value={ this.state.t1 || false }
                        onToggle={(t1) => {
                            this.setState({
                            t1: !t1,
                            })
                        }} />

                    <div>
                        
                         </div>
                </div>

            </div>

            <div className='datatable1'>
            <div className="plus" style={{ display:'inline-block' , marginLeft:'10px'}}> <i class="fa fa-plus-circle" aria-hidden="true"></i></div>
                
                <div className='nwsingle'>

                     Bidding
                </div>  


                { !this.state.t2 ? 

                    <Nope />: <Restrict /> 
            }

                <div className='single2'>

                    create
                </div>

                <div className='single3'>

                    1 min ago
                </div>

                <div className='single4'>

                <ToggleButton
                        value={ this.state.t2 || false }
                        onToggle={(t2) => {
                            this.setState({
                            t2: !t2,
                            })
                        }} />

                    <div>
                        
                         </div>
                </div>

            </div>

            <div className='datatable1'>
            <div className="plus" style={{ display:'inline-block' , marginLeft:'10px'}}> <i class="fa fa-plus-circle" aria-hidden="true"></i></div>
                
                <div className='nwsingle'>

                     Vendor Portal
                </div>  

                { !this.state.t3 ? 

                    <Nope />: <Access /> 
            }

                <div className='single2'>

                    create
                </div>

                <div className='single3'>

                    1 min ago
                </div>

                <div className='single4'>

                <ToggleButton
                        value={ this.state.t3 || false }
                        onToggle={(t3) => {
                            this.setState({
                            t3: !t3,
                            })
                        }} />

                    <div>
                        
                         </div>
                </div>

            </div>

 */}





{/* 
            <div className='datatable1'>
                <div className='single'>

                     Bidding 
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

                <div className='single'>

                    <div>
                        
                         </div>
                </div>

            </div>



            <div className='datatable1'>
                <div className='single'>

                     Project Team
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

                <div className='single'>

                    <div>
                        
                         </div>
                </div>

            </div>


            <div className='datatable1'>
                <div className='single'>

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

                <div className='single'>

                    <div>
                        
                         </div>
                </div>

            </div>


            <div className='datatable1'>
                <div className='single'>

                   Super Admin
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

                <div className='single'>

                    <div>
                        
                         </div>
                </div>

            </div> */}

            </>
        )
    }
}

export default tabledata


