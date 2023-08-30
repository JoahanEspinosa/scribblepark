import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Navcontainer } from './components/Navcontainer';
import { Home } from './screens/Home';
import { About } from './screens/About';
import { Entries } from './screens/Entries';
import { PastEntry } from './screens/PastEntry';

function App() {
  return (
    <div>
      <Router>
        <Navcontainer></Navcontainer>
        <div style={{marginTop: 20}}></div>
        <Routes>
          <Route element={<Home></Home>} path="/"></Route>
          <Route element={<Entries></Entries>} path="/entries"></Route>
          <Route element={<About></About>} path="/about"></Route>
          <Route element={<PastEntry></PastEntry>} path="/pastentry/:id"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
