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

  const uploadToDeepAI = async () => {
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
      <button onClick={uploadToDeepAI}>Upload to DeepAI</button>

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
