import React, { useState } from 'react';
import './index.css';



function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setUploadedImage(imageUrl);
    }
  };

  const uploadBarbarian = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('text', "subject: beard, metal helmet");

    try {
      const response = await fetch('https://api.deepai.org/api/image-editor', {
        method: 'POST',
        headers: {
          'Api-Key': '2366ef39-2e50-42b4-822d-f114b992d5cb'
        },
        body: formData
      });

      const result = await response.json();
      console.log(result);
      setApiResponse(result);

    } catch (error) {
      console.error('Error uploading the image:', error);
      setApiResponse({ error: "There was an error uploading the image." });
    }
  };
  const uploadRanger = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('text', "subject: elf with a bow and arrow");

    try {
      const response = await fetch('https://api.deepai.org/api/image-editor', {
        method: 'POST',
        headers: {
          'Api-Key': '2366ef39-2e50-42b4-822d-f114b992d5cb'
        },
        body: formData
      });

      const result = await response.json();
      console.log(result);
      setApiResponse(result);

    } catch (error) {
      console.error('Error uploading the image:', error);
      setApiResponse({ error: "There was an error uploading the image." });
    }
  };
  const uploadDruid = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('text', "subject: elf with horns and brown cloak");

    try {
      const response = await fetch('https://api.deepai.org/api/image-editor', {
        method: 'POST',
        headers: {
          'Api-Key': '2366ef39-2e50-42b4-822d-f114b992d5cb'
        },
        body: formData
      });

      const result = await response.json();
      console.log(result);
      setApiResponse(result);

    } catch (error) {
      console.error('Error uploading the image:', error);
      setApiResponse({ error: "There was an error uploading the image." });
    }
  };
  const uploadCleric = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('text', "subject: gold cloak, bright eyes");

    try {
      const response = await fetch('https://api.deepai.org/api/image-editor', {
        method: 'POST',
        headers: {
          'Api-Key': '2366ef39-2e50-42b4-822d-f114b992d5cb'
        },
        body: formData
      });

      const result = await response.json();
      console.log(result);
      setApiResponse(result);

    } catch (error) {
      console.error('Error uploading the image:', error);
      setApiResponse({ error: "dark black jacket with hood over head" });
    }
  };
  const uploadRogue = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('text', "subject: purple robe with hood over head, black lines on face");

    try {
      const response = await fetch('https://api.deepai.org/api/image-editor', {
        method: 'POST',
        headers: {
          'Api-Key': '2366ef39-2e50-42b4-822d-f114b992d5cb'
        },
        body: formData
      });

      const result = await response.json();
      console.log(result);
      setApiResponse(result);

    } catch (error) {
      console.error('Error uploading the image:', error);
      setApiResponse({ error: "There was an error uploading the image." });
    }
  };

  const uploadWarlock = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('text', "subject:  long white beard, wizard hat");

    try {
      const response = await fetch('https://api.deepai.org/api/image-editor', {
        method: 'POST',
        headers: {
          'Api-Key': '2366ef39-2e50-42b4-822d-f114b992d5cb'
        },
        body: formData
      });

      const result = await response.json();
      console.log(result);
      setApiResponse(result);

    } catch (error) {
      console.error('Error uploading the image:', error);
      setApiResponse({ error: "There was an error uploading the image." });
    }
  };

  return (
<div className="App">
  <header>
    <h1 className="header-text">FantasyLens</h1>
  </header>

  <div className="image-container">
    <div className="image-preview">
      {/* Display the uploaded image to the user */}
      {uploadedImage && (
        <div>
          <h3>Uploaded Image:</h3>
          <img
            src={uploadedImage}
            alt="Uploaded by user"
            style={{ maxWidth: '350px', height: '350px' }}
          />
        </div>
      )}
    </div>
    
    <div className="image-preview">
      {/* Display the API response to the user */}
      {apiResponse && apiResponse.output_url && (
        <div>
          <h3>Your Image:</h3>
          <img
            src={apiResponse.output_url}
            alt="Edited by DeepAI"
            style={{ maxWidth: '350px', height: '350px' }}
          />
        </div>
      )}
    </div>
  </div>

      <header>

        

      <h1 className="header-text">FantasyLens</h1>

      </header>

      <input type="file" classname="inputFile" accept="image/*" onChange={handleImageChange} />

      <button className="barbarianbtn" onClick={uploadBarbarian}>Barbarian</button>
      <button className="rangerbtn" onClick={uploadRanger}>Ranger</button>
      <button className="druidbtn" onClick={uploadDruid}>Druid</button>
      <button className="clericbtn" onClick={uploadCleric}>Cleric</button>
      <button className="roguebtn" onClick={uploadRogue}>Rogue</button>
      <button className="warlockbtn" onClick={uploadWarlock}>Warlock</button>

      
    
    </div>
  );
}

export default App;
