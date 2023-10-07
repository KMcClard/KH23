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
      
      
      
      
      
      
      //FIGURE OUT HOW TO GET THE KEY IN 
      //FIGURE OUT HOW TO SEND THE IMAGE AND HTE PROMPT



      if(objectUrl.current.value==="") return 0;
      const deepAIResponse = await fetch('https://api.deepai.org/api/image-editor', {
        // we use post to because we are sending data to be processed
        method: 'POST',
        // meta data for the request
        headers: {
            'api-key': API_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          //SENDING IMAGE I THINK
            prompt:`${objectUrl.current.value}`
            // image: imageUrl,
            // style: 'watercolor'
            //HEREHEHREHEREHRHERHEHRHERHEHRHERHRE
        }),
        
    });

      
      
    }
    // Call the async function immediately
    processImages();
  }, [files]);

  




  


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
          sendImage(tmpurl);
          return <img src={pic} />;
        })}
    </main>
  );
}

export default App;