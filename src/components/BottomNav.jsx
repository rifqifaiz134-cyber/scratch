import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.css';

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { 
      path: '/home', 
      label: 'Home', 
      icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></>, 
      fill: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></> 
    },
    { 
      path: '/schedule', 
      label: 'Schedule', 
      icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></> 
    },
    { 
      path: '/gpa', 
      label: 'GPA', 
      icon: <><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></> 
    },
    { 
      path: '/tasks', 
      label: 'Tasks', 
      icon: <><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M9 12l2 2 4-4"></path></> 
    },
    { 
      path: '/more', 
      label: 'More', 
      icon: <><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></> 
    }
  ];

  return (
    <nav className="bottom-nav glass">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link to={item.path} key={item.label} className={`nav-item ${isActive ? 'active' : ''}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill={isActive && item.fill ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={isActive && item.fill ? "0" : "2"} strokeLinecap="round" strokeLinejoin="round">
              {item.path === '/schedule' ? (
                <>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </>
              ) : item.path === '/gpa' ? (
                <>
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </>
              ) : item.path === '/tasks' ? (
                <>
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </>
              ) : item.path === '/more' ? (
                <>
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </>
              ) : (
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              )}
            </svg>
            <span className="nav-label">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  );
}
