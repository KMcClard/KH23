import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [files, setFiles] = useState(null);
  const [previews, setPreviews] = useState([]);

  function handleImage(e) {
    setFiles(e.target.files);
  }

  useEffect(() => {
    if (!files) return;
    const objectUrls = [];

    for (let i = 0; i < files.length; i++) {
      objectUrls.push(URL.createObjectURL(files[i]));
    }

    setPreviews(objectUrls);

    // free memory
    return () => {
      for (let i = 0; i < objectUrls.length; i++) {
        URL.revokeObjectURL(objectUrls[i]);
      }
    };
  }, [files]);

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
        <button className="submit-btn" onClick={handleSubmit}></button>
        <select className="dropdown" onChange={handleOptionChange}>
          <option value="">Select an option</option>
          <option value="Barbarian">Barbarian</option>
          <option value="Ranger">Ranger</option>
          <option value="Druid">Druid</option>
          <option value="Cleric">Cleric</option>
          <option value="Rogue">Rogue</option>
          <option value="Warlock">Warlock</option>
        </select>
      </div>
      <main className="container">
        <br />
        <h3>Fantasy Lens</h3>
        <input
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          multiple
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setFiles(e.target.files);
            }
          }}
        />
        {previews.map((pic, index) => (
          <img key={index} src={pic} alt={`Preview ${index}`} />
        ))}
      </main>
    </div>
  );
}

export default App;
