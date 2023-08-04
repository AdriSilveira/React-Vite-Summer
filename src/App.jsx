import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/layout/Layout.jsx";
import Login from "./components/views/Login.jsx";
import Home from "./components/views/Home.jsx";
import PageNotFound from "./components/views/404.jsx";
import "./App.scss";

function App() {
  const [loggedinUserEmail, setLoginUserEmail] = useState("");
  const [loggedInUserId, setLoggedInUserId] = useState("");

  const loginToApp = (loginKnumber) => {
    console.log(loginKnumber);
    setLoginUserEmail(loginKnumber[0].UserEmail);
    setLoggedInUserId(loginKnumber[0].UserID);
    //window.location = "/modules";
  };

  // View ----------------------------------------
  return (
    <BrowserRouter>
      <Layout loggedInUser={loggedinUserEmail}>
        <Routes>
          <Route path="/" element={<Login loginToApp={loginToApp} />} />
          <Route
            path="/home"
            element={
              <Home isModules={(true, true)} loggedInUserId={loggedInUserId} />
            }
          />
          <Route path="/login" element={<Login loginToApp={loginToApp} />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
