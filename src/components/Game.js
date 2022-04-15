import React, { useState } from 'react';
// import StateIcon from './StateIcon';
// import StatePicker from './StatePicker';

const Game = ({ states }) => {
    
  const [listOfStates, setlistOfStates] = useState(states);
    
  const generateRandomState = () => {
    return listOfStates[Math.floor(Math.random()*listOfStates.length)];
    }

    const [correctState, setCorrectState ] = useState(generateRandomState().state);
    const [stateIcon, setStateIcon] = useState(generateRandomState().image);

   
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
      if (e.target.textContent === correctState){
        console.log('YES')
        const newList = listOfStates.filter(states => {
          return states.state !== correctState;
        });
        console.log(newList);
       
        setlistOfStates(newList);
        setCorrectState(generateRandomState().state);
      };
      // setCorrectState(generateRandomState().state);
    }

  return (
   
    <div>
    {/* <StateIcon /> */}
    <img src={`${stateIcon}`} alt="texas" width="500" height="600"></img>
    {/* <StatePicker /> */}
    <div className='state-picker'>
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
    </div>
  )
}

export default Game;