import logo from './logo.svg';
import applebutton from './applestorelogo.svg';
import ellipseimg from './eimg.png';
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
          <a href="https://app.termly.io/document/privacy-policy/e4ffbd93-000a-41f5-b3ed-d0130f4682d5" className="privacy">Privacy</a> <img src={ellipseimg} className="elimg" alt="dot"/>
          <a href="https://app.termly.io/document/terms-of-use-for-ios-app/07503c8d-a8b9-49ee-93f6-751e9030a8c1" className="terms">Terms.</a> <img src={ellipseimg} className="elimg" alt="dot"/>
          <a href="mailto:team@yornest.com" className="contact">Contact</a>
        </footer>
    </div>
  );
}
export default App;
