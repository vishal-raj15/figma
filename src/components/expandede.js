
import React, { Component } from 'react'

import  CheckBox  from './checkbox';

export class expandede extends Component {
    constructor() {
        super();

        this.state = {
            fruites: [
              {id: 1, value: "View item in access", isChecked: false},
              {id: 2, value: "Edit items in access", isChecked: false},
              {id: 3, value: "View items in access", isChecked: false},
              {id: 4, value: "grap items in access", isChecked: false}
            ]
          }
        
        this.onChangeValue = this.onChangeValue.bind(this);
      }


    onChangeValue(event) {
        this.props.parentCallback(event.target.value)
      }
    
    render() {
        return (

            <>
            <div  className='expnd'  style={{ display:'inline-block'}}>
                
                <div className='cntrl'> Access Control</div>

                    <div  onChange={this.onChangeValue}>
                        <div ><input type="radio" value="All" name="gender"  /> All Access</div>
                        <p style={{ paddingLeft:'20px' , fontSize:'14px' , color:'grey'}}> Can access all items</p>
                        <div ><input type="radio" value="Resticted" name="gender" /> Resticted Access</div>
                        
                    </div>
                <p style={{ paddingLeft:'20px' , fontSize:'14px' , color:'grey'}}> Can access only assigned and created items</p>
           

           
           
            </div>  

            <div style={{ display:'inline-block'}}> 
            <div className='cntrl2' > Permissions</div>

            <ul>
        {
          this.state.fruites.map((fruite) => {
            return (<CheckBox {...fruite} />)
          })
        }
        </ul>
            </div>

            </>
        )
    }
}

export default expandede
