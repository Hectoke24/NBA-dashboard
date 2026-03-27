import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F7F9FC]">
      <aside className="w-64 p-3">
        <SideNav />
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}