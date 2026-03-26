import { Shield, Users, CalendarDays, Trophy } from 'lucide-react';

type CardProps = {
  title: string;
  value: string | number;
  icon: React.ElementType;
};

function Card({ title, value, icon: Icon }: CardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{title}</p>
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <p className="mt-3 text-3xl font-semibold text-gray-800">{value}</p>
    </div>
  );
}

export default function DashboardCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <Card title="Equipos" value={30} icon={Shield} />
      <Card title="Jugadores destacados" value={120} icon={Users} />
      <Card title="Próximos partidos" value={12} icon={CalendarDays} />
      <Card title="Líderes de conferencia" value={2} icon={Trophy} />
    </div>
  );
}