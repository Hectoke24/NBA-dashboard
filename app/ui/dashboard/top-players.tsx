import { players } from '@/app/lib/data';

export default function TopPlayers() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">Jugadores destacados</h2>

      <div className="space-y-3">
        {players.map((player) => (
          <div
            key={player.id}
            className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3"
          >
            <div>
              <p className="font-medium text-gray-800">{player.name}</p>
              <p className="text-sm text-gray-500">
                {player.team} · {player.position}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-500">PPG</p>
              <p className="font-semibold text-gray-800">{player.ppg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}