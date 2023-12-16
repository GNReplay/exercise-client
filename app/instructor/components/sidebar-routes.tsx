'use client';

import { BarChart, List, Book } from 'lucide-react';

import { SidebarItem } from './sidebar-item';

const routes = [
    {
        icon: Book,
        label: 'Exercises',
        href: '/instructor/exercise',
    }
];

export const SidebarRoutes = () => {
    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    );
};
