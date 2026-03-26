type Team = {
  id: number;
  name: string;
  city: string;
  conference: string;
  wins: number;
  losses: number;
};

export default function TeamsGrid({ teams }: { teams: Team[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {teams.map((team) => (
        <div
          key={team.id}
          className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">{team.city}</p>
              <h2 className="text-xl font-semibold text-gray-800">
                {team.name}
              </h2>
            </div>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              {team.conference}
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-gray-50 p-3">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Victorias
              </p>
              <p className="mt-1 text-2xl font-semibold text-gray-800">
                {team.wins}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-3">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Derrotas
              </p>
              <p className="mt-1 text-2xl font-semibold text-gray-800">
                {team.losses}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}