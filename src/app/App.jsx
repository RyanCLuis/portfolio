import './App.css';
import Nav from '../components/Nav/Nav'
import Main from '../components/AboutMe/Main'
import Footer from '../components/Footer/Footer'
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