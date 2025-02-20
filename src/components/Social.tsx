import React from 'react';
import { Users, MessageCircle, Trophy, UserPlus } from 'lucide-react';

const users = [
  {
    id: 1,
    name: 'Anna Schmidt',
    level: 'Fortgeschritten',
    xp: '3.240',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100',
    online: true
  },
  {
    id: 2,
    name: 'Max Weber',
    level: 'Mittelstufe',
    xp: '2.180',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100',
    online: true
  },
  {
    id: 3,
    name: 'Laura Meyer',
    level: 'Anfänger',
    xp: '1.450',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100',
    online: false
  }
];

export default function Social() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-red-600">Community</h2>
        <p className="text-white">Verbinden Sie sich mit anderen Deutschlernenden</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-blue-900/10 p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-900">Lernpartner</h3>
            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-100">
                  <div className="relative">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {user.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-blue-900 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-blue-900">{user.name}</h4>
                    <p className="text-sm text-blue-700">{user.level} • {user.xp} XP</p>
                  </div>
                  <button className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100 rounded-lg">
                    Nachricht
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-blue-900/10 p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-900">Schnellzugriff</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-blue-900 hover:bg-blue-100 rounded-lg">
                <UserPlus className="w-5 h-5" />
                Lernpartner finden
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-blue-900 hover:bg-blue-100 rounded-lg">
                <MessageCircle className="w-5 h-5" />
                An Diskussion teilnehmen
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-blue-900 hover:bg-blue-100 rounded-lg">
                <Trophy className="w-5 h-5" />
                Wöchentliche Challenge
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-blue-900/10 p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-900">Lerngruppen</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg hover:bg-blue-100">
                <h4 className="font-medium text-blue-900">Anfängerkreis</h4>
                <p className="text-sm text-blue-700">15 Mitglieder • Tägliche Übungen</p>
              </div>
              <div className="p-3 rounded-lg hover:bg-blue-100">
                <h4 className="font-medium text-blue-900">Grammatik-Enthusiasten</h4>
                <p className="text-sm text-blue-700">28 Mitglieder • Wöchentliche Treffen</p>
              </div>
              <div className="p-3 rounded-lg hover:bg-blue-100">
                <h4 className="font-medium text-blue-900">Konversationsclub</h4>
                <p className="text-sm text-blue-700">20 Mitglieder • Zweiwöchentlich</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
