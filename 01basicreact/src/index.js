import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); //taking reference of root and storing in variable root
root.render(  //creating dom - render karo - using react strict mode (property of react)
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

//root variable - react dom is implementation on net

//react also makes virtual dom using createRoot

//app is not a tag - custom tags can be made in jsx

//react safe mode is used in development specific - to do optimization