import React, { useState } from 'react';
import './index.css';

function App() {
  const [image, setImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState(''); // State to store the selected option

  function handleImage(e) {
    setImage(e.target.files[0]);
  }

  function handleOptionChange(e) {
    setSelectedOption(e.target.value);
  }

  function handleSubmit() {
    if (image) {
      // You can perform actions with the selected image and option here
      console.log('Selected image:', image);
      console.log('Selected option:', selectedOption);
    } else {
      console.log('No image selected');
    }
  }

  return (
    <div className="App">
      <header className="header">
        <h1>FantasyLens</h1>
      </header>
      <div className="person">
        <div className="upload-btn-wrapper">
          <label className="btn">
            Upload Image
            <input type="file" name="file" onChange={handleImage} />
          </label>
        </div>
        <select className="dropdown" onChange={handleOptionChange}>
          <option value="">Select an option</option>
          <option value="Barbarian">Barbarian</option>
          <option value="Ranger">Ranger</option>
          <option value="Druid">Druid</option>
          <option value="Cleric">Cleric</option>
          <option value="Rogue">Rogue</option>
          <option value="Warlock">Warlock</option>
        </select>
        <button className="submit-btn" onClick={handleSubmit}></button>
      </div>
    </div>
  );
}

export default App;
