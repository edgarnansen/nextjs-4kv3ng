const NAVBAR_ITEMS = [
  { title: 'Forsiden', url: '/' },
  { title: 'Valutakurser', url: '/valuta' },
  { title: 'Om oss', url: '/om-oss' },
  { title: 'Kontakt', url: '/kontakt' },
  { title: 'Logg inn', url: '/logg-inn' },
];

export const Navbar = () => {
  return (
    <div>
      <ul>
        {NAVBAR_ITEMS.map((item, i) => (
          <span key={i}>{item.title}</span>
        ))}
      </ul>
    </div>
  );
};
