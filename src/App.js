import './App.css';

import MainPage from './components/MainPage'
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import StatusPage from './components/Status';
import RegisterComplaint from './components/RegisterComplaint';
import ViewComplaints from './components/ViewComplaints';
import ViewApartment from './components/ViewApartment';
import LeaseDetail from './components/LeaseDetail'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <MainPage/> }></Route>
        <Route path="/home" element={ <HomePage/> }></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/status" element = { <StatusPage/> }></Route>
        <Route path="/raise-complaints" element= { <RegisterComplaint/> }></Route>
        <Route path="/view-complaints" element = { <ViewComplaints/> }></Route>
        <Route path="/your-lease" element = { <LeaseDetail/> }></Route>
        <Route path="/apartment" element={ <ViewApartment/> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
