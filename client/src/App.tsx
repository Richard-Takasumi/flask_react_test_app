import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home }  from './pages/home/Home'
import { SideNavigation } from './components/side-navigation/SideNavigation';
import { DashboardPage } from './pages/dashboard-page/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', height: '100vh' }}>
      
      <SideNavigation/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;