const PORT = 8000
const express = require('express')
const cors = require('cors')
const multer = require('multer')
// const fetch = require('node-fetch').default;
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())

const upload = multer({ storage: multer.memoryStorage() });

const API_KEY = process.env.API_KEY
// deepai.setApiKey(API_KEY);

// method to send a request to the server and return response to user 
app.post('/process-image', upload.single('image'), async (req, res) => {
    // get image url from request body
    const imageFile = req.body; 
    const formData = new FormData();
    formData.append('image', imageFile.buffer, imageFile.originalname);
    // send https fetch req to the deepAI api
    const deepAIResponse = await fetch('https://api.deepai.org/api/image-editor', {
        // we use post to because we are sending data to be processed
        method: 'POST',
        // meta data for the request
        headers: {
            'api-key': API_KEY,
        },
        body: formData,
    });

    const data = await deepAIResponse.json();
    res.json(data); 
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 