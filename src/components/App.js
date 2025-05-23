
import React, { useState } from "react";
import './../styles/App.css';
import Childcomponent1 from './Childcomponent1';
import Childcomponent2 from './Childcomponent2';

const App = () => {

  const [selectedOption, setSelectionOption] = useState('');

  const handleOptionChange  = (option) => {
    setSelectionOption(option);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>

      <Childcomponent1 onSelect={handleOptionChange} />
      <Childcomponent2 onSelect={handleOptionChange} />
      <h4>Selected Option: {selectedOption}</h4>        
    </div>
  )
}

export default App;
