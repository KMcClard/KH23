const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())

const API_KEY = process.env.API_KEY
deepai.setApiKey(API_KEY);

app.post('/completions', async (req, res) => {
    var result = await deepai.callStandardApi("torch-srgan", {
        image: "https://YOUR_IMAGE_URL",
    });

    var result = await deepai.callStandardApi("text-generator", {
        text: "Your long article or text goes here.",
    });

    var result = await deepai.callStandardApi("nsfw-detector", {
        image: document.getElementById("yourImageId"),
    });