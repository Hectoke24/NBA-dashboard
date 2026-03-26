import DashboardCards from '@/app/ui/dashboard/cards';
import UpcomingGames from '@/app/ui/dashboard/upcoming-games';
import StandingsPreview from '@/app/ui/dashboard/standings-preview';
import TopPlayers from '@/app/ui/dashboard/top-players';

export default function Page() {
  return (
    <main className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Página del panel de control
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Resumen general del dashboard NBA
        </p>
      </div>

      <DashboardCards />

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <UpcomingGames />
        </div>

        <div>
          <TopPlayers />
        </div>
      </div>

      <div className="mt-6">
        <StandingsPreview />
      </div>
    </main>
  );
}