import React from 'react';


const StatePicker = ({ states, checkStatefunciton }) => {
  return (
    <div className='state-picker'>
       { states.map( obj  => {
            return <p 
                    onClick={ (e) => {
                      checkStatefunciton(e);
                      }} 
                    key={obj.id}
                    > 
              {obj.state} 
            </p>
        })}

      
         {/* { listOfStates.map( obj  => {
            return <p 
                    onClick={ (e) => {
                      checkCorrectState(e);
                      }} 
                    key={obj.id}
                    > 
              {obj.state} 
            </p>
        })} */}


    </div>
  )
}

export default StatePicker;