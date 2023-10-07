import React, { component } from 'react';
import {useState} from 'react'
import './index.css';


function App() {
  const[image, setImage] = useState('')
  function handleImage(e){
    console.log(e.targer.files[0])
    setImage(e.target.files[0])
  }

  return (

        <div className="person">

          <input type="file" name='file' onChange={handleImage}/>
          <button>submit</button>
        </div>
    
  )
}

export default App;
