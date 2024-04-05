type NavigationLink = {
    id: number;
    path: string;
    label: string;
  };
  
  const navLink: NavigationLink[] = [
    {
      id: 1,
      path: '/',
      label: 'Home',
    },
    {
      id: 2,
      path: '/contact',
      label: 'Contact',
    },
  ];
  export default navLink;
  