import React, { useState } from 'react';
import { BookOpen, Trophy, Users, Settings, Home, Brain, Globe } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Lessons from './components/Lessons';
import GreetingLesson from './components/lessons/Greeting';
import NumbersLesson from './components/lessons/Numbers';
import VerbsLesson from './components/lessons/VerbsLesson';
import ArticlesLesson from './components/lessons/ArticlesLesson';
import Exercises from './components/Exercises';
import Progress from './components/Progress';
import Social from './components/Social';
import Cultural from './components/Cultural';
import SettingsPanel from './components/Settings';

function App() {
  const navItems = [
    { id: 'dashboard', label: 'Übersicht', icon: Home, path: '/dashboard' },
    { id: 'lessons', label: 'Lektionen', icon: BookOpen, path: '/lessons' },
    { id: 'exercises', label: 'Übungen', icon: Brain, path: '/exercises' },
    { id: 'progress', label: 'Fortschritt', icon: Trophy, path: '/progress' },
    { id: 'social', label: 'Gemeinschaft', icon: Users, path: '/social' },
    { id: 'cultural', label: 'Kultur', icon: Globe, path: '/cultural' },
    { id: 'settings', label: 'Einstellungen', icon: Settings, path: '/settings' },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-primary">
      <Navigation items={navItems} />
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/greetings" element={<GreetingLesson />} />
          <Route path="/lessons/numbers" element={<NumbersLesson />} />
          <Route path="/lessons/verbs" element={<VerbsLesson />} />
          <Route path="/lessons/articles" element={<ArticlesLesson />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/social" element={<Social />} />
          <Route path="/cultural" element={<Cultural />} />
          <Route path="/settings" element={<SettingsPanel />} />
        </Routes>
      </main>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}