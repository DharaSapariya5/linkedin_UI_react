import './App.css';
import NevBar from './Componet/NevBar';
import Home from './Componet/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./Componet/Feed/Feed";
import Network from './Componet/Network/Network';
import Jobs from './Componet/Jobs/Jobs';
import Chat from "./Componet/Chat/Chat";
// import Notices from "./Componet/Notices/Notices";


function App() {
  return (
    <div className="App">

      <Router>
        <NevBar />
        {/* <Home /> */}
        {/* <Footer /> */}
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/Feed" element={<Feed />} ></Route>
          <Route exact path="/Network" element={<Network />}></Route>
          <Route exact path="/Jobs" element={<Jobs />}></Route>
          <Route exact path="/Chat" element={<Chat />}></Route>
          {/* <Route exact path="/Notices" element={<Notices />}></Route> */}
        </Routes>
      </Router>
    </div>

  );
}
export default App;
