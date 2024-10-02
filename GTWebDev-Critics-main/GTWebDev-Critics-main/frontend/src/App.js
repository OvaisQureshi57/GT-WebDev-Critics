import './App.css';
import { Routes, Route } from 'react-router-dom';
import EntryPage from './components/EntryPage/EntryPage';
import LoginPage from './components/LoginPage/LoginPage';
import RewardsPage from './components/RewardsPage/RewardsPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<EntryPage />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/rewards" element={<RewardsPage />} />
    </Routes>
  );
}

export default App;
