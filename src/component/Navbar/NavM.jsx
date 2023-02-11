const NavM = ({scroll}) => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  return (
    <div className="hidden md:inline-flex">
      <ul className="flex">
        {Links.map((link) => (
          <li key={link.name} className="md:ml-8 text-sm uppercase tracking-wider md:my-0 my-7">
            <a
              href={link.link}
              className={`${scroll?"text-gray-500":"text-white"} hover:border-b-2 hover:border-blue-500 hover:border-solid pb-6`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavM;
