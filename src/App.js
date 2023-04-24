import './App.css';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee';
import ViewEmployee from './components/ViewEmployee';
function App() {
  return (
    <div >
      <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/"  element={<ListEmployeeComponents/>} />
              <Route path="/employee" element={<ListEmployeeComponents/>} />
              <Route path="/add-employee/:id"  element={<CreateEmployee/>} />
              <Route path="/view-employee/:id"  element={<ViewEmployee/>} />
            </Routes> 
          </div>
          <Footer />
        
      </Router>
    </div>
  );
}

export default App;
