'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  House,
  Shield,
  Users,
  CalendarDays,
  Trophy,
} from 'lucide-react';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/dashboard', icon: House },
  { name: 'Teams', href: '/dashboard/teams', icon: Shield },
  { name: 'Players', href: '/dashboard/players', icon: Users },
  { name: 'Games', href: '/dashboard/games', icon: CalendarDays },
  { name: 'Standings', href: '/dashboard/standings', icon: Trophy },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition',
              {
                'bg-blue-100 text-blue-700': isActive,
                'text-gray-700 hover:bg-gray-100': !isActive,
              }
            )}
          >
            <LinkIcon className="h-4 w-4" />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
}