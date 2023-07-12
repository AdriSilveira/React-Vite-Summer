import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Modules from "./components/views/Modules.jsx";
import Students from "./components/views/Students.jsx";
import PageNotFound from "./components/views/404.jsx";
import FauxLogin from "./components/views/FauxLogin.jsx";
import './App.scss';

function App() {
  const loggedInUser = "Adriana";

  return (
    <BrowserRouter>
      <Layout loggedInUser={loggedInUser}>
        <Routes>
          <Route path="/" element={<Modules />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/students" element={<Students />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/fauxLogin" element={<FauxLogin />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
