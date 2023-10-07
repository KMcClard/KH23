import React, { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [files, setFiles] = useState();
  const [previews, setPreviews] = useState();
  const [image, setImage] = useState();
  const [selectedOption, setSelectedOption] = useState('');

  // Rendering previews for selected images
  useEffect(() => {
    if (!files) return;
    let tmp = [];

    for (let i = 0; i < files.length; i++) {
      tmp.push(URL.createObjectURL(files[i]));
    }

    setPreviews(tmp);

    // Free memory by revoking object URLs when the component unmounts
    return () => {
      for (let i = 0; i < tmp.length; i++) {
        URL.revokeObjectURL(tmp[i]);
      }
    };
  }, [files]);

  // Handle image selection
  function handleImage(e) {
    setImage(e.target.files[0]);
  }

  // Handle option change
  function handleOptionChange(e) {
    setSelectedOption(e.target.value);
  }

  // Handle form submission
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
          {/* Other options */}
        </select>
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
        {previews &&
          previews.map((pic, index) => {
            return <img key={index} src={pic} alt={`Preview ${index}`} />;
          })}
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;