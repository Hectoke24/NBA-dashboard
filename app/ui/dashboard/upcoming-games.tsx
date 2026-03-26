import { games } from '@/app/lib/data';

export default function UpcomingGames() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Próximos partidos</h2>
        <span className="text-sm text-gray-400">NBA</span>
      </div>

      <div className="space-y-3">
        {games.map((game) => (
          <div
            key={game.id}
            className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3"
          >
            <div>
              <p className="font-medium text-gray-800">
                {game.awayTeam} vs {game.homeTeam}
              </p>
              <p className="text-sm text-gray-500">
                {game.date} · {game.time}
              </p>
            </div>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              Programado
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}