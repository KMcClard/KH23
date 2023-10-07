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
    setPreviews(temp);
    return () => {
    // free memory
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

  function ImageUploadComponent(e) {
    const [files, setFiles] = useState(null);
    // Handle form submission
    const handleSubmit = async () => {
      const formData = new FormData();
      formData.append('image', files);

      const response = await fetch('http://localhost:8000/process-image', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data);
    };
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
              setFiles(e.target.files[0]);
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