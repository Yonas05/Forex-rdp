// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
   
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
         </Router>
  );
}

export default App;
