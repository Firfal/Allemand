import React from 'react';
import { Trophy, Target, Clock, Star, TrendingUp } from 'lucide-react';

export default function Progress() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-red-600">Ihr Fortschritt</h2>
        <p className="text-white">Verfolgen Sie Ihre Deutschlernreise</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Trophy className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-blue-700">Gesamt XP</p>
              <p className="text-xl font-semibold text-blue-900">2.450</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-blue-700">Abgeschlossene Lektionen</p>
              <p className="text-xl font-semibold text-blue-900">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Clock className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-blue-700">Lernzeit</p>
              <p className="text-xl font-semibold text-blue-900">24h 30m</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10">
          <h3 className="text-lg font-semibold mb-4 text-blue-900">Fähigkeiten</h3>
          <div className="space-y-4">
            {[
              { label: 'Wortschatz', progress: 75 },
              { label: 'Grammatik', progress: 60 },
              { label: 'Sprechen', progress: 45 },
              { label: 'Hören', progress: 80 },
            ].map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-blue-700">{skill.label}</span>
                  <span className="text-sm text-blue-700">{skill.progress}%</span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: `${skill.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10">
          <h3 className="text-lg font-semibold mb-4 text-blue-900">Letzte Erfolge</h3>
          <div className="space-y-4">
            {[
              {
                icon: <Star className="w-5 h-5" />,
                title: 'Perfekte Serie',
                description: '5 Übungen mit 100% Genauigkeit abgeschlossen',
                time: 'vor 2T'
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                title: 'Level aufgestiegen!',
                description: 'Mittelstufe in Grammatik erreicht',
                time: 'vor 5T'
              },
              {
                icon: <Trophy className="w-5 h-5" />,
                title: 'Wortschatz-Meister',
                description: '100 neue Wörter gelernt',
                time: 'vor 1W'
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-900">{item.title}</p>
                  <p className="text-xs text-blue-700">{item.description}</p>
                </div>
                <span className="text-xs text-blue-700">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
