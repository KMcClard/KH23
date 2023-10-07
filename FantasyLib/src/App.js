import React, { useState } from 'react';
import './index.css'; // Import your CSS file

function App() {
  const [image, setImage] = useState(null);

  function handleImage(e) {
    setImage(e.target.files[0]);
  }


  // May need this to send request to backend: 
  // const response = await fetch ('http://localhost:8000/completions', options)

  function handleSubmit() {
    if (image) {
      // You can perform actions with the selected image here
      console.log('Selected image:', image);
    } else {
      console.log('No image selected');
    }
  }

  return (
    <div className="person">
      <label>
        Upload Image
        <input type="file" name="file" onChange={handleImage} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
