import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById("root"))
let reRender = () => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
            <App/>
            </Provider>
        </React.StrictMode>
    );
}

reRender()
store.subscribe( () => {
    reRender()
})


