
import { NavLink } from 'react-router-dom';
import { Home as HomeIcon, Utensils, Calendar, ShoppingCart, ClipboardCheck } from 'lucide-react';
import './Navigation.css';

const Navigation: React.FC = () => {
  
  const navItems = [
    { path: '/', icon: HomeIcon, label: '探す' },
    { path: '/diagnosis', icon: ClipboardCheck, label: '診断' },
    { path: '/suggest', icon: Utensils, label: '食材提案' },
    { path: '/recommend', icon: Calendar, label: '献立' },
    { path: '/shopping', icon: ShoppingCart, label: '買い物' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink 
          key={item.path} 
          to={item.path} 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          <item.icon size={24} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
