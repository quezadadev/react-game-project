import React from 'react';
import Title from '../components/Title';
import Game from '../components/Game';
// import StateIcon from '../components/StateIcon';
// import StatePicker from '../components/StatePicker';


const HomePage = () => {

  const americanStates = [
    {id: 1, state: "Texas", image: "https://i.ibb.co/NL4jkLx/texas.png"}, 
    {id: 2, state: "California", image: "https://i.ibb.co/KN7fDTc/california.png"}, 
    {id: 3, state: "Florida", image: "https://i.ibb.co/HLy1rwp/florida.png"},
    {id: 4, state: "Alaska", image: "https://i.ibb.co/cb4jJV8/alaska.png"},
    {id: 5, state: "New York", image: "https://i.ibb.co/nm0XXkm/new-york.png"}
  ];

  return (
    <section>
      <Title />
      
      <Game states={ americanStates }/>
      {/* <StateIcon icons={ americanStates }/>
      <StatePicker states={ americanStates } /> */}
    </section>
  )
}

export default HomePage;