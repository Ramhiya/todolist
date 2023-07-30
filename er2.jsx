import React from 'react';
import GreetingCard from './GreetingCard'; // Adjust the path to the GreetingCard component based on your file structure

const App = () => {
  return (
    <div>
      <GreetingCard name="John" greeting="Welcome" />
      <GreetingCard name="Jane" greeting="Hello" />
    </div>
  );
};

export default App;
