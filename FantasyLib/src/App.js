import React, { useState } from 'react';
const deepai = require('deepai'); 

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  deepai.setApiKey('2366ef39-2e50-42b4-822d-f114b992d5cb');

  const uploadToDeepAI = async () => {
    if (!selectedImage) return;

    try {
      const resp = await deepai.callStandardApi("image-editor", {
        image: selectedImage,
        text: "paint a dragon", // You may want to change this to a different value or handle it separately if required
      });

      console.log(resp);
      setApiResponse(resp);
      
    } catch (error) {
      console.error('Error uploading the image:', error);
      setApiResponse({ error: "There was an error uploading the image." });
    }
  };

  return (
    <div className="App">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={uploadToDeepAI}>Upload to DeepAI</button>

      {/* Display the API response to the user */}
      {apiResponse && (
        <div>
          <h3>API Response:</h3>
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
