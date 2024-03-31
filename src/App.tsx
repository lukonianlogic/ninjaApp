// In src/App.tsx or a routing file
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login';
import Students from './pages/Students';
import Attendance from './pages/Attendance';
import Classes from './pages/Classes';
import Obstacles from './pages/Obstacles';
import Courses from './pages/Courses';


const App: React.FC = () => {
    return (
        <Router>
          <Header />
          <main className='py-3'>
            <Container>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/students" element={<Students />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/classes" element={<Classes />} /> 
                <Route path="/obstacles" element={<Obstacles />} />
                <Route path="/courses" element={<Courses />} />
                {/* Define other routes similarly */}
                </Routes>
            </Container>
          </main>
          <Footer />
        </Router>
    );
};

export default App;
