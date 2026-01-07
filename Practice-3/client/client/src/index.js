import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter, Route, withRouter} from 'react-router-dom'; 
import { AuthContextProvider } from "./store/auth-context";
import ScrollToTop from "./components/UI/ScrollToTop";


ReactDOM.render(
    <AuthContextProvider>
    <BrowserRouter>
        <ScrollToTop />
        <App />
    </BrowserRouter>
    </AuthContextProvider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
