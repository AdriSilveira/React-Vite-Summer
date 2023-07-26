import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/layout/Layout.jsx";
import Login from "./components/views/Login.jsx";
import Home from "./components/views/Home.jsx";
import PageNotFound from "./components/views/404.jsx";
import "./App.scss";

function App() {
  const [userKnumber, setData] = useState("");

  const loginToApp = (loginKnumber) => {
    setData(loginKnumber);
    //window.location = "/modules";
  };

  // View ----------------------------------------
  return (
    <BrowserRouter>
      <Layout loggedInUser={userKnumber}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home isModules={(true, true)} />} />
          <Route path="/login" element={<Login loginToApp={loginToApp} />} />
          <Route path="/*" element={<PageNotFound />} />

          {/*<Route path="/groupsProgramming 1" element={<Programming1Groups />} />
          <Route
            path="/groupsRequirements Analysis and Design"
            element={<RequirementAnalisysDesingGroups />}
          />
          <Route
            path="/groupsProfessional Environments 1"
            element={<ProfessionalEnvironmentGroups />}
          />
          <Route
            path="/groupsComputing Fundamentals"
            element={<ComputingFundamentalsGroups />}
          /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
