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
    formData.append('text', "Viking helmet with two horns and a long beard");

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
    formData.append('text', "green jacket hood over head");

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
    formData.append('text', "pale flowing gold cloak. light hair");

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
    formData.append('text', "purple robe with hood over head. Give me face tats");

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
    formData.append('text', "make me into a wizard from harry potter");

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
  const upload = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('text', "make me into a wizard from harry potter");

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
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={uploadBarbarian}>Barbarian</button>
      <button onClick={uploadRanger}>Ranger</button>
      <button onClick={uploadDruid}>Druid</button>
      <button onClick={uploadCleric}>Cleric</button>
      <button onClick={uploadRogue}>Rogue</button>
      <button onClick={uploadWarlock}>Warlock</button>

      {/* Display the uploaded image to the user */}
      {uploadedImage && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={uploadedImage} alt="Uploaded by user" style={{ maxWidth: '200px', height: '200px' }} />
        </div>
      )}
      
      {/* Display the API response to the user */}
      {apiResponse && apiResponse.output_url &&(
        <div>
          <h3>Your Image:</h3>
          <img src = {apiResponse.output_url} alt = "Edited by DeepAI" 
            style = {{ maxWidth: '100%', height: 'auto'}} />
        </div>
      )}
    </div>
  );
}

export default App;
