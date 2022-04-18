import React from 'react';


const StatePicker = ({ states, checkStateFunction }) => {
  return (
    <div className='state-picker'>
       { states.map( obj  => {
            return <p 
                    onClick={ (e) => {
                      checkStateFunction(e);
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