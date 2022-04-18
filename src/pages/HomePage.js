import React from 'react';
import { americanStates } from '../data';
import Title from '../components/Title';
import Game from '../components/Game';

const HomePage = () => {

  return (
    <section>
      <Title />
      <Game states={ americanStates }/>
    </section>
  )
}

export default HomePage;