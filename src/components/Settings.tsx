import React from 'react';
import { Bell, Moon, Globe, Volume2, Shield, HelpCircle } from 'lucide-react';

export default function Settings() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-red-600">Einstellungen</h2>
        <p className="text-white">Passen Sie Ihre Lernerfahrung an</p>
      </header>

      <div className="max-w-3xl">
        <div className="bg-white rounded-xl shadow-sm border border-blue-900/10">
          <div className="p-6 border-b border-blue-900/10">
            <h3 className="text-lg font-semibold mb-4 text-blue-900">Präferenzen</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Bell className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">Benachrichtigungen</p>
                    <p className="text-sm text-blue-700">Verwalten Sie Ihre Benachrichtigungseinstellungen</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-blue-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-blue-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Moon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">Dunkelmodus</p>
                    <p className="text-sm text-blue-700">Zwischen Hell- und Dunkelmodus wechseln</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-blue-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-blue-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Volume2 className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">Soundeffekte</p>
                    <p className="text-sm text-blue-700">Soundeffekte für Übungen aktivieren</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-blue-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-blue-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Globe className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">Sprache</p>
                    <p className="text-sm text-blue-700">Spracheinstellungen der Benutzeroberfläche</p>
                  </div>
                </div>
                <select className="bg-blue-100 border border-blue-900/10 text-blue-900 text-sm rounded-lg focus:ring-red-300 focus:border-red-300 p-2.5">
                  <option value="en">Englisch</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-900">Hilfe</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-3 text-left text-sm font-medium text-blue-900 hover:bg-blue-100 rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5" />
                  <span>Datenschutzrichtlinien</span>
                </div>
              </button>
              <button className="w-full flex items-center justify-between p-3 text-left text-sm font-medium text-blue-900 hover:bg-blue-100 rounded-lg">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5" />
                  <span>Hilfezentrum</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
