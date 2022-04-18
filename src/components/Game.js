import React, { useState } from 'react';
import StateIcon from './StateIcon';
import StatePicker from './StatePicker';

const Game = ({ states }) => {
    
    const [listOfStates, setlistOfStates] = useState(states);
    
    const generateRandomState = () => {
      return listOfStates[Math.floor(Math.random()*listOfStates.length)];
    }

    const [correctState, setCorrectState ] = useState(generateRandomState());
   
    console.log(correctState);

    // console.log(correctState.state);
   
    // const [stateOption, setStateOption] = useState("");
      
    // console.log(listOfStates);
    // console.log(correctState);
    // const setIconImage = () => {
    //   for (let obj of listOfStates){
    //     if (obj.state === correctState){
    //       setStateIcon(obj.image);
    //       return;
    //     }
    //   }
    // }
  
    // setIconImage();

    const checkCorrectState = (e) => {
      if (e.target.textContent === correctState.state){
        console.log('YES')
        const newList = listOfStates.filter(states => {
          return states.state !== correctState.state;
        });
        console.log(newList);
       
        setlistOfStates(newList);
        setCorrectState(generateRandomState());
      };
      // setCorrectState(generateRandomState().state);
    }

  return (
   
    <div>
    <StateIcon icon={ correctState } />
   
    <StatePicker states={ states } checkStateFunction={ checkCorrectState }  />
    {/* <div className='state-picker'>
       { states.map( obj  => {
            return <p 
                    onClick={ (e) => {
                      checkCorrectState(e);
                      }} 
                    key={obj.id}
                    > 
              {obj.state} 
            </p>
        })}
    </div> */}
    </div>
  )
}

export default Game;