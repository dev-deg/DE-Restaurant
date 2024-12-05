# Restaurant Project

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
git commit -a -m <message>
git push
```