{
  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contact';

  const nav: Record<Page /* key */, PageInfo /* value */> = {
    home: { title: 'Home' },
    about: { title: 'About' },
    contact: { title: 'Contact' },
  };
}
