export interface MenuItem {
  path: string;
  name: string;
  exact: boolean;
}

const menuItems: MenuItem[] = [
  {
    path: '/',
    name: 'Home',
    exact: true,
  },
  {
    path: '/band',
    name: 'The Band & Music',
    exact: false,
  },
  {
    path: '/contact',
    name: 'Contact',
    exact: false,
  },
];

export default menuItems;
