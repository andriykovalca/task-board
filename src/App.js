import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage/SignUpPage'; 
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div>
        <Router>
            <Routes>
            <Route path="/signup" element={<SignUpPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
        
    </div>
    
  );
}

export default App;