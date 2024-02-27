import './App.css';
import Nav from '../components/Nav/Nav'
import Main from '../components/Brand/Brand'
import Footer from '../components/Footer/Footer'
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import { BrowserRouter as Router} from 'react-router-dom'

function App() {

  return (
    <Router >
      <Nav />
      <Main  />
      <Footer />
    </Router>
  );
}

export default App;