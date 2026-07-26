export interface navLinkItem {
    label: string;
    path: string;
}

export const navLinks: navLinkItem[] = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'Courses',
        path: '/courses',
    },
    {
        label: 'About',
        path: '/about',
    },
    {
        label: 'Contact',
        path: '/contact',
    },
];