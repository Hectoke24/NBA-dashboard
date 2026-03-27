import NavLinks from './nav-links';
import { LogOut, Trophy } from 'lucide-react';

export default function SideNav() {
  return (
    <div className="flex h-[calc(100vh-16px)] flex-col rounded-2xl bg-[#1D428A] p-2 text-white">
      <div className="mb-3 rounded-xl bg-[#C8102E] px-4 py-6 text-white shadow-sm">
        <div className="flex items-center gap-2">
          <Trophy className="h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">NBA</h1>
        </div>
        <p className="mt-2 text-sm text-blue-100">Dashboard</p>
      </div>

      <div className="flex-1">
        <NavLinks />
      </div>

      <button className="mt-3 flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
        <LogOut className="h-4 w-4" />
        <span>Sign Out</span>
      </button>
    </div>
  );
}