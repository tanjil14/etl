const NavMenu = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  return (
    <ul>
      {Links.map((link) => (
        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
          <a
            href={link.link}
            className="text-white hover:text-gray-400 duration-500"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
