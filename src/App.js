import logo from './logo.svg';
import applebutton from './applestorelogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="paragraphtxt">
        Thanks for vistiting us! We are slowly opening up and <br />
        will have more contents in our webites soon. Thanks for <br />
        beign part of our special community!
        </p>
        <p className="paragraphtxt2">Sign up to join your family and friends nests!</p>
        <img src={applebutton} className="Apple-button" alt="logo" />
      </header>
        <footer className="footer">
          <a href="www.google.com" className="privacy">Privacy</a>
          <a href="www.google.com" className="terms">Terms</a>
          <a href="www.google.com" className="contact">Contact</a>
        </footer>
    </div>
  );
}
export default App;
