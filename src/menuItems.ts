export interface MenuItem {
  path: string;
  name: string;
  end: boolean;
}

const menuItems: MenuItem[] = [
  {
    path: '/',
    name: 'Home',
    end: true,
  },
  {
    path: '/band',
    name: 'The Band & Music',
    end: false,
  },
  {
    path: '/contact',
    name: 'Contact',
    end: false,
  },
];

export default menuItems;
