# KH23

Fantasy Lens

Flow: 
User uploads image --> user selects class (wizard, barbarian, etc) --> image and prompt is input into image generator api --> image output


How to run: 
    1) open command prompt
    2) To start front end: 
        i) use following command in command prompt 
            "npm run start:frontend"
    3) to start Back end: 
        i) use following command in command prompt 
            "npm run start:backend" 
    

Structure of Code: 
    1) /FantasyLib contains the react project. 
    2) ignore /node_modules 
    3) ignore /public
    4) /src contains: 
        i) App.js
            a) contains our front end java script (user functionality)
            b) contains the front end java script call to back end (API frontend)
            c) contains our front end HTML (website structure)
        ii) index.css
            a) contains styling for front end 
        iii) index.js 
            a) ignore 
    5) .env 
        i) contains API keys 
    6) server.js 
        i) backend API call 