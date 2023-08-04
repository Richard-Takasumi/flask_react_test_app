import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home }  from './pages/home/Home'
import { SideNavigation } from './components/side-navigation/SideNavigation';
import { CamelsPage } from './pages/camels-page/CamelsPage';
import { BondOverviewPage } from './pages/bond-overview-page/BondOverviewPage';
import { WatchlistPage } from './pages/watchlist-page/WatchlistPage';
import { PortfolioPage } from './pages/portfolio-page/PortfolioPage';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', height: '100vh' }}>
      
      <SideNavigation/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/camels" element={<CamelsPage />} />
            <Route path="/bond-overview" element={<BondOverviewPage />} />
            <Route path="/watchlist" element={<WatchlistPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;