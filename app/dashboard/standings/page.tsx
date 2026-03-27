import { fetchStandings } from '@/app/lib/data';

export default async function Page() {
  const standings = await fetchStandings();

  const east = standings.filter((team: any) => team.conference === 'East');
  const west = standings.filter((team: any) => team.conference === 'West');

  return (
    <main className="p-6">
      <h1 className="mb-6 text-2xl font-semibold text-gray-800">Clasificación</h1>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Este</h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-gray-500">
                <th className="py-3">Equipo</th>
                <th className="py-3">Victorias</th>
                <th className="py-3">Derrotas</th>
              </tr>
            </thead>
            <tbody>
              {east.map((team: any) => (
                <tr key={team.id} className="border-b">
                  <td className="py-3 font-medium">{team.team}</td>
                  <td className="py-3">{team.wins}</td>
                  <td className="py-3">{team.losses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Oeste</h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-gray-500">
                <th className="py-3">Equipo</th>
                <th className="py-3">Victorias</th>
                <th className="py-3">Derrotas</th>
              </tr>
            </thead>
            <tbody>
              {west.map((team: any) => (
                <tr key={team.id} className="border-b">
                  <td className="py-3 font-medium">{team.team}</td>
                  <td className="py-3">{team.wins}</td>
                  <td className="py-3">{team.losses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}