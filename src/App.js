import logo from './logo.svg';
import './App.css';
import Leftnav from "./components/Left-nav"
import Topnav from "./components/Top-nav"
import Midnav from "./components/Mid-nav"
import Imgnav from "./components/Img-nav"
import Videobody from './components/Video-body';

function App() {
  return (
    <div className="App">
      <div>
         <Leftnav />
      </div>

      <div className="ele2">
        <Topnav />
        <Midnav />
        <div className="the_body">
          <div><Imgnav/></div>
          <div><Videobody /></div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
