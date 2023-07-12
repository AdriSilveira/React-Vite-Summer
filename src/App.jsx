import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/layout/Layout.jsx";
import Login from "./components/views/Login.jsx";
import Modules from "./components/views/Modules.jsx";
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
          <Route path="/modules" element={<Modules />} />
          <Route path="/login" element={<Login loginToApp={loginToApp} />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
