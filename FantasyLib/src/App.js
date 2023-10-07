 import React, { component } from 'react';
import './index.css';
import { useEffect, useState } from "react";

function App() {
  const [files, setFiles] = useState();
  const [previews, setPreviews] = useState();

  // rendering previews

useEffect(() => {
    // Declare an async function inside the useEffect hook
    const processImages = async () => {
      // Check if files exist
      if (!files) return;
      let tmpurl = [];
      for (let i = 0; i < files.length; i++) {
        tmpurl.push(URL.createObjectURL(files[i]));
      }
      
      const objectUrls = tmpurl;
      // Use await to fetch the response and parse the data
      setPreviews(objectUrls);

      // free memory
      for (let i = 0; i < objectUrls.length; i++) {
        return () => {
          URL.revokeObjectURL(objectUrls[i]);
        };
      }
    }
    // Call the async function immediately
    processImages();
  }, [files]);

  function sendImage(tmpurl) {
    // Send a POST request to /image with the url as the body
    fetch("/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tmpurl }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }


  return (
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
      {previews &&
        previews.map((pic) => {
          return <img src={pic} />;
        })}
    </main>
  );
}

export default App;