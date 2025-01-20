# Setup Instructions

## Prerequisites
- Install [Node.js](https://nodejs.org/) (Recommended LTS version)
- Install [Git](https://git-scm.com/)
- A code editor like [VS Code](https://code.visualstudio.com/)

## Cloning the Repository
To get started, clone the repository from GitHub:
```sh
git clone <repository_url>
cd <project_folder>
```

## Setting Up a Virtual Environment (Optional but Recommended)
If you are working with multiple projects, setting up a virtual environment can help isolate dependencies:

### For Windows:
```sh
python -m venv venv
venv\Scripts\activate
```

### For macOS/Linux:
```sh
python3 -m venv venv
source venv/bin/activate
```

## Installing Dependencies
Once inside the project directory, install the required dependencies using:
```sh
npm install
```
This will ensure that all dependencies specified in `package.json` are installed correctly.

### Running the Application
To start the development server, run:
```sh
npm start
```
This will start the application, and you can view it in your browser at:
```
http://localhost:3000
```


### Troubleshooting Common Issues
1. **OpenSSL Digital Envelope Routines Error**
If you encounter an OpenSSL error like:
```sh
Error: error:0308010C:digital envelope routines::unsupported
```
Try running:
```sh
set NODE_OPTIONS=--openssl-legacy-provider
npm start
```
If using Mac/Linux, run:
```sh
export NODE_OPTIONS=--openssl-legacy-provider
npm start
```
2. **Dependencies Not Found**
If you get an error about missing dependencies, try:
```sh
rm -rf node_modules package-lock.json
npm install
npm start
```
3. **Clear Cache and Start Fresh**
```sh
npm cache clean --force
npm install
npm start
```


