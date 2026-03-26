import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-neutral-100">
      <aside className="w-60 p-2">
        <SideNav />
      </aside>

      <main className="flex-1 p-6">
        <div className="min-h-full rounded-2xl bg-neutral-100">
          {children}
        </div>
      </main>
    </div>
  );
}