import React, { StrictMode } from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QuizzContextProvider } from "./contexts/quiz-context";
const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
    <QuizzContextProvider>
          <App />
    </QuizzContextProvider>
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
