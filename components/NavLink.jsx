import { Link as ScrollLink } from "react-scroll";

const NavLink = ({ href, title }) => {
  return (
    <ScrollLink
      to={href}
      smooth={true}
      duration={500}
      offset={-80}
      className="block py-2 pl-3 pr-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-white sm:text-xl rounded md:p-0"
    >
      {title}
    </ScrollLink>
  );
};

export default NavLink;
