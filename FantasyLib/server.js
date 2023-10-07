const PORT = 8000
const express = require('express')
const cors = require('cors')
// const fetch = require('node-fetch').default;
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())

const API_KEY = process.env.API_KEY
// deepai.setApiKey(API_KEY);

// method to send a request to the server and return response to user 
app.post('/process-image', async (req, res) => {
    // get image url from request body
    const { imageUrl } = req.body; 

    // send https fetch req to the deepAI api
    const deepAIResponse = await fetch('https://api.deepai.org/api/image-editor', {
        // we use post to because we are sending data to be processed
        method: 'POST',
        // meta data for the request
        headers: {
            'api-key': API_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image: imageUrl,
            style: 'watercolor'
        }),
    });

    const data = await deepAIResponse.json();
    res.send(data); 
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)); 