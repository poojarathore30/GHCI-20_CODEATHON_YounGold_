<<<<<<< HEAD
# YounGold CHAT APPLICATION USING SOCKET.IO
> Provide solutions for post-COVID-19 life. A Social networking application to connect all people of different age groups specifically  connecting Young ones with Old ones to solve problems because of which people are stressed and depressed.

# Prerequisite 
## Project Local Setup 👩‍💻

### For Back end part using Youngold-chat-application folder
=======
# GHCI'20 Codeathon
## Team: BrainStabilizer
### Web App Name: YounGold

```
PROBLEM STATEMENT:Provide solutions for post-COVID-19 life
SOLUTION: Built by team Brainstabilizer

A Social networking application named as YOUNGOLD to connect all people of different age groups
specially connecting Young one with Old one to solve problems because of
which people are stressed and depressed.

PROPOSED SOLUTION:
In Post Covid life people will be facing mental health issues due to selfisolation,financial crisis, career uncertainty social- distancing, fear,anxiety, etc.There are many people who are struggling and wish to share their problems with the people who have faced similar problems and are experienced in their field of interest to seek for guidance andcareer paths. Also,There are many elderly retired professionals who arefacing loneliness in this Pandemic and who have ample time and wish to guide young people in their spare time.

```

# Prerequisite

```bash
There are two additional folder that you need to extract while setting it up locally,

1.YounGold (Recommender system folder)
2.YounGold-Chat-Application (For communication purpose folder)
Run both these folder seperately

NOTE:Readme for running both this folder seperately in your local system is available inside it.
 ```
#### Except these two, below are the instruction to run the full stack website in your local system.
 
##### You are good to go now :)

## Packages must be installed before start writing the code
>>>>>>> 253e7003d9799ca0a613d70c511b9ac1692ca06d


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

<<<<<<< HEAD
You're good to go :)

> [Link to deployed chat-App can be found here. :sunglasses:	](https://youngold-chat.herokuapp.com/)
=======
## Run both Express & React from root :heavy_check_mark:

Now you can run from root of your project using command

```bash
npm run dev
```

This will run both your server and development environment too.
and you're good to go :)

```bash
This full Stack App has integrated with the other two App as well, i.e
1.Chat App and
2.Recommender System
Here you go :)
```
> [Link To the final Deployed Application(Integration of chat app and recommender system along with the full stack web app](https://youngold-app.herokuapp.com/)

## Demo of the Project :rocket: :100:
![](https://github.com/Puja7629/GHCI-20_CODEATHON_YounGold_/blob/master/images/aa.PNG)
![](https://github.com/Puja7629/GHCI-20_CODEATHON_YounGold_/blob/master/images/f.PNG)
![](https://github.com/Puja7629/GHCI-20_CODEATHON_YounGold_/blob/master/images/b.PNG)
![](https://github.com/Puja7629/GHCI-20_CODEATHON_YounGold_/blob/master/images/a.PNG)
![](https://github.com/Puja7629/GHCI-20_CODEATHON_YounGold_/blob/master/images/d.PNG)
![](https://github.com/Puja7629/GHCI-20_CODEATHON_YounGold_/blob/master/images/e.PNG)



>>>>>>> 253e7003d9799ca0a613d70c511b9ac1692ca06d

## Demo of the Chat-App :rocket: :100:
![](https://github.com/Puja7629/GHCI-20_CODEATHON_YounGold_/blob/master/images/chat/a.PNG)
![](https://github.com/Puja7629/GHCI-20_CODEATHON_YounGold_/blob/master/images/chat/c.PNG)
![](https://github.com/Puja7629/GHCI-20_CODEATHON_YounGold_/blob/master/images/chat/b.PNG)


<<<<<<< HEAD
=======
Cheers! :rocket: :100:	
>>>>>>> 253e7003d9799ca0a613d70c511b9ac1692ca06d
