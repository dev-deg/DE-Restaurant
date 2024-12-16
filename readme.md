# Restaurant Project

## Getting Started

After cloning the project, you need to follow the important steps below:

### Step 1: Install the packages

These will re-create your node_modules file

```bash
npm install
```

### Step 2: Create a .env file
```text
DB_USERNAME=admin
DB_PASSWORD=mcast
```

### Step 3: Update the Url of your database

Replace <put your url here> with your own url. To obtain this, go to the clusters tab on Mongo Atlas website, Click on Connect, Select Drivers, Select Mongoose, copy the url from @ symbol onwards (excluding @ symbol).

```js
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@<put your url here>`;
```

## Troubleshooting Tips

- Check that your IP address is whitelisted in MongoAtlas. To do this go to Network Access in Mongo Atlas, and add the Ip address 0.0.0.0/0 for all users to be able to connect.
- Make sure that in your MongoAtlas, you have a database called restaurant and two collections called 'dishes' and 'drinks'. Mongoose will look specifically for these names.
- Try a different internet connection (MCAST ICT LAB PCs have blocked ports and will not be able to connect)
- You might also want to check your nodejs version to ensure it is up to date:
```bash
node --version
```

## Project Setup

1. Initialised the Project
```bash
npm init -y
````

2. Install the dependencies

```bash
npm install bootstrap express
```

3. Create a .gitignore

4. Install dev dependencies
```bash
npm install nodemon --save-dev
```

5. Update package.json settings

To execute start, type:
```bash
npm start
```

To execute nodemon type:
```bash
npm run dev
```

```json
"scripts": {
    "start": "node server.js",
    "dev" : "nodemon server.js"
  }
```

7. Setup Git

a. Setting up git globally:
```bash
git config --global user.email you@example.com
git config --global user.name "Your Name”
```
b. Setting up git repository:
```bash
git init
git commit -m "first commit"
git remote add origin <url of repo>
git push -u origin main
```

c. Commit Changes Regularly
```bash
git add *
git commit -a -m "message"
git push
```

8. Imported images into public/images/

9. Installing Mongoose
```bash
npm install mongoose
```

Created db.js where the mongo db code will reside.

10. Installing dotenv to load .env files
```bash
npm install dotenv
```
