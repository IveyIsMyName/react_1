import logo from '../logo.svg';
import './App.css';
import Header from './header/Header.js';
import Footer from './footer/Footer.js'; 
import Article from './article/Article.js';
import Nav from './nav/Nav.js'; 
import data from './db.json';

function App(props) {
  let db = data.people;

  return (
      <div className='app'>
        <Nav navigation={props.navigation}/>
        <Header/>
        <Article db = {db}/>
      </div>
  );
}

export default App;
