import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './Layout.scss';

function Layout(props) {
  return (
    <div className="layout">
      <Header loggedInUser={props.loggedInUser} />
      <Navbar />
      <main>{props.children}</main>
      
      <Footer />
    </div>
  );  
}

export default Layout;