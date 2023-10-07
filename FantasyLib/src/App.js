<<<<<<< HEAD
import React, { component } from 'react';
import './index.css';
import { useEffect, useState } from "react";

function App() {
  const [files, setFiles] = useState();
  const [previews, setPreviews] = useState();

  // rendering previews
  useEffect(() => {
    if (!files) return;
    let tmp = [];
    for (let i = 0; i < files.length; i++) {
      tmp.push(URL.createObjectURL(files[i]));
    }
    const objectUrls = tmp;
    setPreviews(objectUrls);

    // free memory
    for (let i = 0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    }
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
=======
import React, { useState } from 'react';
import './index.css'; // Import your CSS file

function App() {
  const [image, setImage] = useState(null);

  function handleImage(e) {
    setImage(e.target.files[0]);
  }


  // May need this to send request to backend: 
  // const response = await fetch ('http://localhost:8000/completions', options)

  function handleSubmit() {
    if (image) {
      // You can perform actions with the selected image here
      console.log('Selected image:', image);
    } else {
      console.log('No image selected');
    }
  }

  return (
    <div className="person">
      <label>
        Upload Image
        <input type="file" name="file" onChange={handleImage} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
>>>>>>> b4022f66d0b01c20161473976d761fdd571aac69
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
