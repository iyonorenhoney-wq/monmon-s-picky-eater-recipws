
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Suggest from './pages/Suggest';
import Recommend from './pages/Recommend';
import Shopping from './pages/Shopping';
import Diagnosis from './pages/Diagnosis';
import Children from './pages/Children';
import { ChildrenProvider } from './context/ChildrenContext';

function App() {
  return (
    <ChildrenProvider>
      <header style={{ 
        backgroundColor: 'var(--primary)', 
        color: 'white', 
        padding: '16px', 
        textAlign: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ fontSize: '1.2rem', margin: 0 }}>偏食っ子おたすけレシピ</h1>
      </header>
      
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diagnosis" element={<Diagnosis />} />
          <Route path="/suggest" element={<Suggest />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/children" element={<Children />} />
        </Routes>
      </main>
      
      <Navigation />
    </ChildrenProvider>
  );
}

export default App;
