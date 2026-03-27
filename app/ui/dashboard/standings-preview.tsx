import { standings } from '@/app/lib/seed-data';

export default function StandingsPreview() {
  const east = standings.filter((team) => team.conference === 'East');
  const west = standings.filter((team) => team.conference === 'West');

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">Clasificación rápida</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Este
          </h3>
          <div className="space-y-2">
            {east.slice(0, 3).map((team) => (
              <div
                key={team.id}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2"
              >
                <span className="font-medium text-gray-800">{team.team}</span>
                <span className="text-sm text-gray-500">
                  {team.wins}-{team.losses}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Oeste
          </h3>
          <div className="space-y-2">
            {west.slice(0, 3).map((team) => (
              <div
                key={team.id}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2"
              >
                <span className="font-medium text-gray-800">{team.team}</span>
                <span className="text-sm text-gray-500">
                  {team.wins}-{team.losses}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}