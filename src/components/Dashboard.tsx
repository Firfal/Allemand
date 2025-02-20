import React from 'react';
import { Trophy, Flame, Target, Calendar } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-red-600">Willkommen zurück!</h2>
        <p className="text-white">Machen Sie weiter mit Ihrem Deutschlernen.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Flame className="w-6 h-6 text-red-600" />
            </div>
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 48 48" 
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="title"
            >
              <title id="title">Petit Ourson Style Duolingo</title>
              <circle cx="24" cy="28.8" r="9.6" fill="#0A1F44" />
              <circle cx="24" cy="14.4" r="7.2" fill="#0A1F44" />
              <circle cx="19.2" cy="7.2" r="2.4" fill="#E3342F" />
              <circle cx="28.8" cy="7.2" r="2.4" fill="#E3342F" />
              <circle cx="21.12" cy="13.2" r="1.44" fill="#FFF" />
              <circle cx="26.88" cy="13.2" r="1.44" fill="#FFF" />
              <circle cx="21.12" cy="13.2" r="0.6" fill="#E3342F" />
              <circle cx="26.88" cy="13.2" r="0.6" fill="#E3342F" />
              <circle cx="24" cy="16.32" r="1.2" fill="#FFF" />
              <circle cx="24" cy="16.32" r="0.48" fill="#E3342F" />
              <ellipse cx="14.4" cy="28.8" rx="2.4" ry="3.6" fill="#0A1F44" />
              <ellipse cx="33.6" cy="28.8" rx="2.4" ry="3.6" fill="#0A1F44" />
              <ellipse cx="20.4" cy="38.4" rx="1.92" ry="2.88" fill="#0A1F44" />
              <ellipse cx="27.6" cy="38.4" rx="1.92" ry="2.88" fill="#0A1F44" />
            </svg>
            <div>
              <p className="text-sm text-blue-900">Lernserie</p>
              <p className="text-xl font-semibold text-blue-900">7 Tage</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Trophy className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-blue-900">XP Punkte</p>
              <p className="text-xl font-semibold text-blue-900">2.450</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-blue-900">Tagesziel</p>
              <p className="text-xl font-semibold text-blue-900">75% erreicht</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Calendar className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-blue-900">Lernzeit</p>
              <p className="text-xl font-semibold text-blue-900">45 Min heute</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tagesziele */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10">
          <h3 className="text-lg font-semibold mb-4 text-blue-900">Tagesziele</h3>
          <ul className="space-y-3">
            {[
              'Lektion 5 abschließen: Deutsche Artikel',
              'Ausspracheübungen machen',
              'Vokabelkarten wiederholen',
            ].map((goal) => (
              <li key={goal} className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-900" />
                <span className="text-blue-900">{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Letzte Aktivitäten */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-900/10">
          <h3 className="text-lg font-semibold mb-4 text-blue-900">Letzte Aktivitäten</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
              <p className="text-blue-900">Grammatiktest abgeschlossen - 95%</p>
              <span className="ml-auto text-sm text-blue-700">vor 2h</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
              <p className="text-blue-900">15 neue Wörter gelernt</p>
              <span className="ml-auto text-sm text-blue-700">vor 5h</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
              <p className="text-blue-900">Sprechübung absolviert</p>
              <span className="ml-auto text-sm text-blue-700">Gestern</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
