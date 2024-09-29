import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import LoginW from './LoginW';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loginW" element={<LoginW />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
