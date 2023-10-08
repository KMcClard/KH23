 import React, { component } from 'react';
import './index.css';
import { useEffect, useState } from "react";
// import deepai from 'deepai';

function App() {
  const [files, setFiles] = useState();
  const [previews, setPreviews] = useState();
  handleNewImage = (event) => {
    this.setState({
      picture: event.target.files[0]
    }, ()=>{
      console.log(this.state.picture);
    });
  };

  // rendering previews

useEffect(() => {
    // Declare an async function inside the useEffect hook
    const processImages = async () => {
      // Check if files exist
      if (!files) return;
      let tmpurl = [];
      for (let i = 0; i < files.length; i++) {
        tmpurl.push(URL.createObjectURL(files[i]));
        console.log(tmpurl);
      }
      
      const objectUrls = tmpurl;
      // Use await to fetch the response and parse the data
      setPreviews(objectUrls);
      console.log("no");
    };
  
      
      
      
      
      
      //FIGURE OUT HOW TO GET THE KEY IN 
      //FIGURE OUT HOW TO SEND THE IMAGE AND HTE PROMPT
      // deepai.setApiKey = ('ba02a71f-7628-4a31-a8c3-ef045bbc120f');

      // const resp = await deepai.callStandardApi('image-editor', { image: 'objectsUrl', text: 'give me a viking helemet', }); 
      
    

  //     if(objectUrl.current.value==="") return 0;
  //     const deepAIResponse = await fetch('https://api.deepai.org/api/image-editor', {
  //       // we use post to because we are sending data to be processed
  //       method: 'POST',
  //       // meta data for the request
  //       headers: {
  //           'api-key': API_KEY,
  //           'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         //SENDING IMAGE I THINK
  //           prompt:`${objectUrl.current.value}`
  //           // image: imageUrl,
  //           // style: 'watercolor'
  //           //HEREHEHREHEREHRHERHEHRHERHEHRHERHRE
  //       }),
        
  //   });

      
      
  //   }
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
        onChange={this.handleNewImage}
      />
      <image src= {this.state.pricture}/>
      
    </main>
  );
}

export default App;