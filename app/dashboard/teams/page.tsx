import { fetchTeams } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const params = await searchParams;
  const query = params?.query || '';
  const teams = await fetchTeams(query);

  return (
    <main className="p-6">
      <h1 className="mb-4 text-2xl font-semibold text-gray-800">Equipos</h1>

      <form className="mb-6 max-w-xs">
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Buscar equipo..."
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm"
        />
      </form>

      <div className="overflow-x-auto rounded-2xl bg-white p-4 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left text-gray-500">
              <th className="py-3">Equipo</th>
              <th className="py-3">Ciudad</th>
              <th className="py-3">Conferencia</th>
              <th className="py-3">Victorias</th>
              <th className="py-3">Derrotas</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team: any) => (
              <tr key={team.id} className="border-b">
                <td className="py-3 font-medium">{team.name}</td>
                <td className="py-3">{team.city}</td>
                <td className="py-3">{team.conference}</td>
                <td className="py-3">{team.wins}</td>
                <td className="py-3">{team.losses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {teams.length === 0 && (
        <div className="mt-4 rounded-xl bg-white p-4 shadow-sm">
          No se encontraron equipos.
        </div>
      )}
    </main>
  );
}