import './App.css';
import Navbar from './Components/navbar/Navbar';
import Sidebar from './Components/sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import News from './Pages/news/News';
import Profile from './Pages/profile/Profile';
import Dashboard from './Pages/dashboard/Dashboard';
import Equipment from './Pages/equipment/Equipment';
import Workforce from './Pages/workforce/Workforce';
import Specialists from './Pages/specialists/Specialists';
import Stores from './Pages/stores/Stores';
import Finance from './Pages/finance/Finance';
import Majorcrops from './Pages/majorcrops/Majorcrops';
function App() {
  const apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='mainApp'>
          <Sidebar />
          <div className='mainAppPage'>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/news" element={<News key="general" apiKey = {apiKey} country="in" category="science" />}></Route>              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/equipment" element={<Equipment />} />
              <Route exact path="/workforce" element={<Workforce />} />
              <Route exact path="/specialists" element={<Specialists />} />
              <Route exact path="/stores" element={<Stores />} />
              <Route exact path="/finance" element={<Finance />} />
              <Route exact path="/majorcrops" element={<Majorcrops />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
