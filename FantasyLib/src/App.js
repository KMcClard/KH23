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
      let tmp = [];
      for (let i = 0; i < files.length; i++) {
        tmp.push(URL.createObjectURL(files[i]));
      }
      
      const objectUrls = tmp;
      // Use await to fetch the response and parse the data
      const response = await fetch('http://localhost:8000/process-image', objectUrls)
      const data = await response.json()

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
// // import { axios } from 'axios'


// function App() {
//   const[image, setImage] = useState('')

//   function handleImage(e){
//     setImage(e.target.files[0])
//     return e.target.files[0];
//   }
//   const imageUrl = URL.createObjectURL(image)

//   // Revoke the URL when the component unmounts
//   useEffect(() => {
//     return () => {
//       URL.revokeObjectURL(imageUrl)
//     }
//   }, [imageUrl])

//   // function handleApi(){
//   //   const formData = new FormData()
//   //   formData.append('image', image)
//   //   axios.post('url', formData).then((res) => {
//   //     console.log(res)
//   //   })
//   // }

//   return (

//         <div className="person">

//           <input 
//             type="file" 
//             name='file' 
//             accept="image/jpg, image/jpeg, image/png"
//             onChange={handleImage}/>
//           <img src={imageUrl} alt="User Image" />
          
//           {/* <button onClick={handleApi}>submit</button> */}
//         </div>
        
    
//   )
// }

// export default App;
