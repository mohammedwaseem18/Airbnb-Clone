
import './App.css';
import Home from './Home';
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from './Search';

function App() {
  return (
    <div className="App">

<Router>
    <Header />
        <Routes>
         
          <Route path="/search" element={<Search/>} />
          <Route path="/" element={<Home />} />
       
        </Routes>
        <Footer />
      </Router>

        


      
      
    </div>
  );
}

export default App;
