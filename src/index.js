import ReactDOM  from "react-dom/client";  // This is used to import the virtual dom from react lib

import { App } from "./App"; // We are importing the component from the app.js

const rootDiv = document.getElementById("root"); // pointing towards the DIV with ID "root" in Index.HTML

const reactRoot = ReactDOM.createRoot(rootDiv); //Creating our virtual dom and injecting it in the root div

reactRoot.render(<App />); // Here app is the compone which is created in the APP.js file, we are just calling it here.
