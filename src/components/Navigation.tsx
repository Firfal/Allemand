import React, { useState } from 'react';
import { LucideIcon, Menu, X } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import Logo from "../assets/images/logo1.webp"
import { useNavigate, useLocation } from 'react-router-dom';

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
}

interface NavigationProps {
  items: NavItem[];
}

export default function Navigation({ items }: NavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = location.pathname.split('/')[1] || 'dashboard';

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-20 p-2 rounded-lg bg-primary text-text shadow-md"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <nav className={`
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
        transition-transform duration-200
        fixed md:relative
        top-0 left-0
        h-full
        w-64
        bg-primary border-r border-accent/20
        p-4
        z-10
      `}>
        <div className="flex items-center gap-2 mb-8">
          <img src={Logo} className="w-8 h-8 text-accent" />
          <h1 className="text-xl font-bold text-accent">GermanMaster</h1>
        </div>
        <div className="space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  currentPath === item.id
                    ? 'bg-accent/10 text-accent'
                    : 'text-text hover:bg-accent/5'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}