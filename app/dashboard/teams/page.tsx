'use client';

import { useMemo, useState } from 'react';
import TeamsGrid from '@/app/ui/dashboard/teams-grid';
import { teams } from '@/app/lib/data';

export default function Page() {
  const [search, setSearch] = useState('');

  const filteredTeams = useMemo(() => {
    const term = search.toLowerCase().trim();

    if (!term) return teams;

    return teams.filter((team) => {
      const fullName = `${team.city} ${team.name}`.toLowerCase();

      return (
        team.name.toLowerCase().includes(term) ||
        team.city.toLowerCase().includes(term) ||
        team.conference.toLowerCase().includes(term) ||
        fullName.includes(term)
      );
    });
  }, [search]);

  return (
    <main className="p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Equipos</h1>
          <p className="mt-1 text-sm text-gray-500">
            Consulta información general de los equipos NBA.
          </p>
        </div>

        <div className="w-full sm:w-72">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar equipo..."
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-blue-400"
          />
        </div>
      </div>

      {filteredTeams.length > 0 ? (
        <TeamsGrid teams={filteredTeams} />
      ) : (
        <div className="rounded-2xl bg-white p-6 text-sm text-gray-500 shadow-sm ring-1 ring-gray-100">
          No se encontraron equipos para tu búsqueda.
        </div>
      )}
    </main>
  );
}