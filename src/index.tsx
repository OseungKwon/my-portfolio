import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";
import Activitys from "./pages/Activitys";
import About from "./pages/About";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter basename="/my-portfolio">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="project/:id" element={<Projects />} />
        <Route path="activity" element={<Activitys />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
