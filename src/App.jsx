import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';

import Home from './components/views/Home.jsx';
import Modules from './components/views/Modules.jsx';
import Students from './components/views/Students.jsx';
import PageNotFound from "./components/views/404.jsx";
import FauxLogin from './components/views/FauxLogin.jsx';


function App() {
  const loggedInUser = 'Graeme';

  return (
    <BrowserRouter>
      <Layout loggedInUser={loggedInUser}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/modules' element={<Modules />} />
          <Route path='/students' element={<Students />} />
          <Route path="/*" element={<PageNotFound/>}/> 
          <Route path="/fauxLogin" element={<FauxLogin/>}/> 
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;