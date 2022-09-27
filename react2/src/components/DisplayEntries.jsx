import React, { Component } from 'react'

export default class DisplayEntries extends Component {

  render() {
    return (
        <div id='result'>
            
          {this.props.data.map((value,index) => {
            let { name, department, rating } = value;

            return(<div key={index} className='innerresult'>
            <p>Name : {name} | Department : {department} | Rating : {rating}</p>
            </div>)
          } )}      
       </div>
    )
  }
}