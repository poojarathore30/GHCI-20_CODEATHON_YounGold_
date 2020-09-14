# YounGold CHAT APPLICATION USING SOCKET.IO
> Provide solutions for post-COVID-19 life. A Social networking application to connect all people of different age groups specifically  connecting Young ones with Old ones to solve problems because of which people are stressed and depressed.

> To help facilitate private communication YounGold chat App provides private rooms to discuss on solutions and gain motivation to problems affecting mental health of an individual.

# Prerequisite 
## Project Local Setup 👩‍💻

### For Back end part using Youngold-chat-application folder

```bash
npm init
```

### Install server dependencies
```bash
npm install
```
### For Front end part using react in client-user folder

Go to the client-user folder by,

```bash
cd client
```

Create a react app using this cmd,

```bash
npx create-react-app client
```
### Install Client dependencies

```bash
npm install
```
After that, try to open the development server on localhost:3000 (Default React Server)

```bash
npm start
```
Hit Ctrl+C to stop the application

# Quick Start :atom_symbol:

### Replace the following code in index.js

```
const app = express();
const server = http.createServer(app);
```
## with
```
const http = require('http');
const app = express();
const server=require('http').Server(app);
```

### Deploy to Heroku :cloud:	
Before Deploying Create static Build in client-user by typing the following command in terminal
```
cd client-user
```
```
npm run build
```
Now set up heroku remote and push code to the remote branch, Inside Root folder type the following commands
```
git init
git init
heroku git:remote -a <remote name>
git add .
git commit -am "<commit message>"
git push heroku master
```
Once merged you can push to heroku as above and your site will rebuild and be updated ready.

---

You're good to go :)

> [Link to deployed chat-App can be found here. :sunglasses:	](https://youngold-chat.herokuapp.com/)

## Demo of the Chat-App :rocket: :100:
![](https://github.com/Puja7629/GHCI-20_CODEATHON_YounGold_/blob/master/images/chat/a.PNG)
![](https://github.com/Puja7629/GHCI-20_CODEATHON_YounGold_/blob/master/images/chat/c.PNG)
![](https://github.com/Puja7629/GHCI-20_CODEATHON_YounGold_/blob/master/images/chat/b.PNG)





