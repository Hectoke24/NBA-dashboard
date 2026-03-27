import { fetchPlayers } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const params = await searchParams;
  const query = params?.query || '';
  const players = await fetchPlayers(query);

  return (
    <main className="p-6">
      <h1 className="mb-4 text-2xl font-semibold text-gray-800">Jugadores</h1>

      <form className="mb-6">
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Buscar jugador..."
          className="w-full max-w-xs rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm"
        />
      </form>

      <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Equipo</th>
              <th className="px-4 py-3">Posición</th>
              <th className="px-4 py-3">PPG</th>
            </tr>
          </thead>

          <tbody>
            {players.map((player: any) => (
              <tr key={player.id} className="border-t">
                <td className="px-4 py-3 font-medium text-gray-800">
                  {player.name}
                </td>
                <td className="px-4 py-3 text-gray-600">{player.team}</td>
                <td className="px-4 py-3 text-gray-600">{player.position}</td>
                <td className="px-4 py-3 text-gray-600">{player.ppg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {players.length === 0 && (
        <div className="mt-4 rounded-xl bg-white p-4 shadow-sm">
          No se encontraron jugadores.
        </div>
      )}
    </main>
  );
}