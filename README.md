# Prerequisite 
## Packages must be installed before start writing the code

```bash
npm init
```

```bash
npm i express express-validator bcryptjs config gravator jsonwebtoken mongoose request
 ```

 ```bash
 npm i -D nodemon concurrently
 ```

**Chages should be made in package.json** Instead of **test** in package.json write this :

```bash
"start": "node server",
"server": "nodemon server"
```

### For Front end part using react in client folder

Create a folder inside your root project named **client**.
Go to the client folder by,

```bash
cd client
```

Create a react app using this cmd,

```bash
npx create-react-app client
```

After that, try to open the development server

```bash
npm start

```

and if everything work fine and server gets open then close it using **ctrl+c** and install few packages, inside client folder only

```bash
npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension moment react-moment
```

## Changes to GitHub API authentication :octopus:


GitHub has [depreciated authentication via URL query parameters](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api/#authenticating-using-query-parameters)
You can get an access token by following [these instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)
For this app we don't need to add any permissions so don't select any in the _scopes_.
**DO NOT SHARE ANY TOKENS THAT HAVE PERMISSIONS**
This would leave your account or repositories vulnerable, depending on permissions set.

It would also be worth adding your `default.json` config file to `.gitignore`
If git has been previously tracking your `default.json` file then...

```bash
git rm --cached config/default.json
```

Then add your token to the config file and confirm that the file is untracked with `git status` before pushing to GitHub.
GitHub does have your back here though. If you accidentally push code to a repository that contains a valid access token, GitHub will revoke that token.

# Quick Start :atom_symbol:

### Add a default.json file in config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Deploy to Heroku :cloud:	

If you followed the sensible advice above and included `config/default.json` `and config/production.json` in your .gitignore file, then pushing to Heroku will omit your config files from the push.  
However, Heroku needs these files for a successful build.  
So how to get them to Heroku without commiting them to GitHub?

What I suggest you do is create a local only branch, lets call it _production_.

```bash
git checkout -b production
```

We can use this branch to deploy from, with our config files.

Add the config file...

```bash
git add -f config/production.json
```

This will track the file in git on this branch only. **DON'T PUSH THE PRODUCTION BRANCH TO GITHUB**

Commit...

```bash
git commit -m 'ready to deploy'
```

Create your Heroku project

```bash
heroku create [Appname]
```

And push the local production branch to the remote heroku master branch.

```bash
git push heroku production:master
```

Now Heroku will have the config it needs to build the project.

> **Don't forget to make sure your production database is not whitelisted in MongoDB Atlas, otherwise the database connection will fail and your app will crash.**

After deployment you can delete the production branch if you like.

```bash
git checkout master
git branch -D production
```

Or you can leave it to merge and push updates from another branch.  
Make any changes you need on your master branch and merge those into your production branch.

```bash
git checkout production
git merge master
```

Once merged you can push to heroku as above and your site will rebuild and be updated ready.

---

## Run both Express & React from root :heavy_check_mark:

Now you can run from root of your project using command

```bash
npm run dev
```

This will run both your server and development environment too.
and you're good to go :)

## Demo of the Project :rocket: :100:
![](https://github.com/poojarathore30/GHCI-20_CODEATHON_YounGold_/blob/master/images/aa.PNG)
![](https://github.com/poojarathore30/GHCI-20_CODEATHON_YounGold_/blob/master/images/f.PNG)
![](https://github.com/poojarathore30/GHCI-20_CODEATHON_YounGold_/blob/master/images/b.PNG)
![](https://github.com/poojarathore30/GHCI-20_CODEATHON_YounGold_/blob/master/images/a.PNG)
![](https://github.com/poojarathore30/GHCI-20_CODEATHON_YounGold_/blob/master/images/d.PNG)
![](https://github.com/poojarathore30/GHCI-20_CODEATHON_YounGold_/blob/master/images/e.PNG)






Cheers! :rocket: :100:	
