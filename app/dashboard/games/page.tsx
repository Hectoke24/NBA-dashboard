import { fetchGames } from '@/app/lib/data';

export default async function Page() {
  const games = await fetchGames();

  return (
    <main className="p-6">
      <h1 className="mb-6 text-2xl font-semibold text-gray-800">Juegos</h1>

      <div className="overflow-x-auto rounded-2xl bg-white p-4 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left text-gray-500">
              <th className="py-3">Visitante</th>
              <th className="py-3">Local</th>
              <th className="py-3">Fecha</th>
              <th className="py-3">Hora</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game: any) => (
              <tr key={game.id} className="border-b">
                <td className="py-3 font-medium">{game.away_team}</td>
                <td className="py-3">{game.home_team}</td>
                <td className="py-3">{new Date(game.date).toLocaleDateString()}</td>
                <td className="py-3">{game.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {games.length === 0 && (
        <div className="mt-4 rounded-xl bg-white p-4 shadow-sm">
          No hay juegos disponibles.
        </div>
      )}
    </main>
  );
}