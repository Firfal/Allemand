import React from 'react';
import { BookOpen, Star, Clock, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const lessons = [
  {
    id: 1,
    title: 'Deutsche Begrüßungen',
    level: 'Anfänger',
    duration: '20 Min',
    progress: 0,
    description: 'Lernen Sie wichtige deutsche Begrüßungen und Vorstellungen',
    path: '/lessons/greetings'
  },
  {
    id: 2,
    title: 'Zahlen und Zählen',
    level: 'Anfänger',
    duration: '25 Min',
    progress: 0,
    description: 'Beherrschen Sie die Zahlen 1-100 und grundlegendes Zählen auf Deutsch',
    path: '/lessons/numbers'
  },
  {
    id: 3,
    title: 'Verben im Präsens',
    level: 'Mittelstufe',
    duration: '30 Min',
    progress: 0,
    description: 'Verstehen und Konjugieren von Verben im Präsens',
    path: '/lessons/verbs'
  },
  {
    id: 4,
    title: 'Deutsche Artikel',
    level: 'Mittelstufe',
    duration: '35 Min',
    progress: 0,
    description: 'Lernen Sie die richtige Verwendung von der, die und das',
    path: '/lessons/articles'
  }
];

export default function Lessons() {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-red-600">Deutschlektionen</h2>
        <p className="text-white">Beginnen Sie Ihre Reise zur deutschen Sprache</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            onClick={() => navigate(lesson.path)}
            className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10 hover:border-red-200 transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-blue-900">{lesson.title}</h3>
                <p className="text-sm text-blue-700 mt-1">{lesson.description}</p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-1 text-sm text-blue-700">
                    <Star className="w-4 h-4" />
                    <span>{lesson.level}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-blue-700">
                    <Clock className="w-4 h-4" />
                    <span>{lesson.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-blue-700">
                    <BarChart className="w-4 h-4" />
                    <span>{lesson.progress}% Abgeschlossen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
