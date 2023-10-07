# KH23

Fantasy Lens

Flow: 

    User uploads image --> user selects class (wizard, barbarian, etc) --> image and prompt is input into image generator api --> image output


How to run: 

    1) Open command prompt
        i) go into /FantasyLib
        ii) If it is your first time running must use: 
            "npm install" 
            "npm install dotenv"
            "npm install cors"
            "npm install express"
            "npm install --save deepai"
            "npm install node-fetch" 
    2) To start front end: 
        i) Use following command in command prompt 
            "npm run start:frontend"
    3) To start Back end: 
        i) Use following command in command prompt 
            "npm run start:backend" 
    

Structure of Code: 

    1) /FantasyLib contains the react project. 
    2) Ignore /node_modules 
    3) Ignore /public
    4) /src contains: 
        i) App.js
            a) Contains our front end java script (user functionality)
            b) Contains the front end java script call to back end (API frontend)
            c) Contains our front end HTML (website structure)
        ii) index.css
            a) Contains styling for front end 
        iii) index.js 
            a) Ignore 
    5) .env 
        i) contains API keys 
    6) server.js 
        i) backend API call 