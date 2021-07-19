import './App.css';
import Navy from './components/Navy'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'

import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navy />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/about" ><About /></Route>
          <Route exact path="/services" ><Services /></Route>
          <Route exact path="/contact" ><Contact /></Route>
        </Switch>
      <Footer />
    </>
  );
}

export default App;
