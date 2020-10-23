# Bookmark MERN  

"scripts": {
    "build": "cd client && npm run build",
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
  },  

npm run dev  
npm run build

https://account.mongodb.com/  

//From Driver  
MONGO_URL_ATLAS=mongodb+srv://******:****@cluster0.c0uc9.mongodb.net/bookmark?retryWrites=true&w=majority  
MONGO_URL_LOCAL=mongodb://localhost:27017/bookmark  
NODE_ENV = "development"  

"start": "concurrently \"node app.js\" \"npm run client\""  
 "start": "node inspect ./bin/www"  

 Client Directory package.json :  
 { "proxy": '/api/save' }  
 
  Server Side > cors: 'http://localhost:5000/api/save',  
  npm install cors -s  

  heroku/7.45.0 win32-x64 node-v12.16.2  

  https://bookmern.herokuapp.com/ | https://git.heroku.com/bookmern.git  

  https://bookmern.herokuapp.com/


    "build": "cd client && npm run build",
    "install-client": "cd client && npm install",
    "heroku-postbuild": "npm run install-client && npm run build",
    "start": "node ./bin/www",
    "devnodemon": "nodemon ./bin/www",
    "client": "cd client && npm start",
    "dev": "concurrently -n 'server,client' -c 'red,green' \"nodemon start\" \"npm run client\""


    //blog
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "cd client && npm run build",
    "install-client": "cd client && npm install",
    "heroku-postbuild": "npm run install-client && npm run build",
    "start": "node ./bin/www",
    "devnodemon": "nodemon ./bin/www",
    "client": "cd client && npm start",
    "dev": "concurrently -n 'server,client' -c 'red,green'  \"nodemon start\" \"npm run client\""

    //Success Heroku Local  
    page"scripts": {
    "server": "node app.js",
    "client": "cd client && npm start",
    "start": "npm run server",
    "heroku-postbuild": "cd client && npm install && npm run build"
    },

    //Success Local
    "scripts": {
    "build": "cd client && npm run build",
    "install-client": "cd client && npm install",
    "heroku-postbuild": "npm run install-client && npm run build",
    "start": "node app.js",
    "devnodemon": "nodemon ./bin/www",
    "client": "cd client && npm start",
    "dev": "concurrently -n 'server,client' -c 'red,green'  \"npm run start\" \"npm run client\""
  },

  //Heroku Production
  "scripts": {
    "server": "node app.js",
    "client": "cd client && npm start",
    "start": "npm run server",
    "heroku-postbuild": "cd client && npm install && npm run build"
    },

//