# 🚀 Microfrontend (MFE) App with Dynamic Routes using React 19, Webpack 5, and Vite
## Overview
This repository contains a **Microfrontend (MFE) architecture** using **React 19, Webpack 5, and Vite**. The project includes:
- **Shell App** (Container App)
- **MFE1** (First Microfrontend)
- **MFE2** (Second Microfrontend)
Each MFE has its own routing, and navigation between MFEs is handled dynamically using `react-router-dom` and `useNavigate()`.
---
## Setup Instructions
### Clone the Repository
```sh
git clone <your-repository-url>
cd mfe-project
```
### Install Dependencies
#### For Shell App:
```sh
cd shell-app
npm install
```
#### For MFE1:
```sh
cd ../mfe1
npm install
```
#### For MFE2:
```sh
cd ../mfe2
npm install
```
### Run the Applications
#### Start Shell App:
```sh
cd shell-app
npm start
```
#### Start MFE1:
```sh
cd mfe1
npm start
```
#### Start MFE2:
```sh
cd mfe2
npm start
```
Now, access **[http://localhost:3000/](http://localhost:3000/)** in your browser to see the shell app running.
---
## Architecture
The project follows a **Microfrontend Architecture**:
- The **Shell App** loads remote components from **MFE1** and **MFE2** dynamically.
- Navigation is handled via **React Router v6**.
- Webpack **Module Federation** is used to expose and consume remote modules.
### Ports Used
| App       | Port  |
|-----------|------|
| Shell App | 3000 |
| MFE1      | 3001 |
| MFE2      | 3002 |
---
## Folder Structure
```
/mfe-project
│── shell-app
│   ├── src
│   │   ├── index.js
│   │   ├── App.js
│   │   ├── routes.js
│   ├── webpack.config.js
│── mfe1
│   ├── src
│   │   ├── index.js
│   │   ├── App.js
│   ├── webpack.config.js
│── mfe2
│   ├── src
│   │   ├── index.js
│   │   ├── App.js
│   ├── webpack.config.js
```
---
## Key Features
- ✅ **React 19 & Webpack 5** - Latest React version with module federation.
- ✅ **Vite Integration** - Faster builds and development.
- ✅ **Dynamic Routing** - Nested routes managed via `react-router-dom`.
- ✅ **Microfrontend Navigation** - `useNavigate()` allows MFEs to navigate seamlessly.
- ✅ **Shared Dependencies** - `react`, `react-dom`, and `react-router-dom` are shared to avoid duplication.
---
## Issues Faced and Solutions
### 1️⃣ Shared Module Consumption Issue
**Error:** `Shared module is not available for eager consumption`
✅ **Solution:** Ensure correct Webpack `shared` dependencies are configured:
```js
shared: {
  react: { 
    singleton: true, 
    requiredVersion: '^19.0.0',
    eager: true // Add this to resolve eager consumption issue
  },
  'react-dom': { 
    singleton: true, 
    requiredVersion: '^19.0.0',
    eager: true // Add this to resolve eager consumption issue
  },
  'react-router-dom': { 
    singleton: true, 
    requiredVersion: '^6.0.0',
    eager: true // Add this to resolve eager consumption issue
  },
}
```

### 2️⃣ ReactDOM.render() Not a Function
**Error:** `react_dom__WEBPACK_IMPORTED_MODULE_1___default(...).render is not a function`
✅ **Solution:** Update `index.js` to use `ReactDOM.createRoot()`:
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### 3️⃣ Eager Module Consumption in Webpack Module Federation
**Error:** `Uncaught Error: Shared module is not available for eager consumption`
✅ **Solution:** Set `eager: true` for shared dependencies in Webpack configuration to ensure immediate module loading:
```js
// In webpack.config.js for each MFE
new ModuleFederationPlugin({
  // ... other configurations
  shared: {
    react: { 
      singleton: true, 
      requiredVersion: '^19.0.0', 
      eager: true 
    },
    'react-dom': { 
      singleton: true, 
      requiredVersion: '^19.0.0', 
      eager: true 
    },
    'react-router-dom': { 
      singleton: true, 
      requiredVersion: '^6.0.0', 
      eager: true 
    },
  },
})
```

Key points for resolving eager module consumption:
- Set `eager: true` for critical shared dependencies
- Ensure consistent versions across all MFEs
- Use `singleton: true` to prevent multiple versions
---
## Tech Stack
- **React 19**
- **Webpack 5**
- **Vite**
- **React Router v6**
- **Module Federation**
- **Node.js 20.19.0**
---
## Contributing
If you'd like to contribute, please fork the repository and submit a pull request! 🚀
---
## License
This project is open-source and available under the MIT License.
---
📌 **GitHub Repository:** https://github.com/Ajitkumar-P/mfe-nested-routes
